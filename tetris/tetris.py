"""
Tetris — fully-featured pygame implementation
----------------------------------------------
Features:
  • All 7 tetrominoes (I, O, T, S, Z, J, L)
  • SRS rotation with full wall-kick tables
  • Ghost piece
  • Hold piece (one swap per drop)
  • Next-piece preview (3 pieces)
  • Gravity / level progression (speeds up every 10 lines)
  • Soft drop (+1 pt/cell) and hard drop (+2 pts/cell)
  • Line-clear scoring: Single 100, Double 300, Triple 500, Tetris 800
  • Back-to-back Tetris bonus (×1.5)
  • T-spin detection (Mini +100/200, Full +400/700/1200)
  • Lock-delay with move-reset (up to 15 resets)
  • Sticky ARE (spawn delay)
  • Game-over detection
  • Animated line-clear flash
  • Pause support (P key)

Controls:
  Arrow Left / Right  — move
  Arrow Up / X        — rotate CW
  Z / Ctrl            — rotate CCW
  Arrow Down          — soft drop
  Space               — hard drop
  C / Shift           — hold
  P                   — pause / resume
  R                   — restart (when game over)
  Esc                 — quit
"""

import pygame
import sys
import copy
import random
import time

# ---------------------------------------------------------------------------
# Constants
# ---------------------------------------------------------------------------
COLS, ROWS = 10, 20
BLOCK = 32
BOARD_X, BOARD_Y = 200, 40          # board top-left on screen
SCREEN_W = BOARD_X + COLS * BLOCK + 200
SCREEN_H = BOARD_Y + ROWS * BLOCK + 40

FPS = 60

# Colours
BG         = (13,  13,  13)
GRID_LINE  = (30,  30,  30)
BORDER     = (60,  60,  60)
WHITE      = (255, 255, 255)
GRAY       = (120, 120, 120)
DARK_GRAY  = (40,  40,  40)
BLACK      = (0,   0,   0)

PIECE_COLORS = {
    'I': (0,   240, 240),
    'O': (240, 240, 0  ),
    'T': (160, 0,   240),
    'S': (0,   240, 0  ),
    'Z': (240, 0,   0  ),
    'J': (0,   0,   240),
    'L': (240, 160, 0  ),
}

GHOST_ALPHA = 60   # 0-255

# ---------------------------------------------------------------------------
# Tetromino definitions  (row 0 = top of bounding box)
# ---------------------------------------------------------------------------
SHAPES = {
    'I': [[(0,1),(1,1),(2,1),(3,1)],
          [(2,0),(2,1),(2,2),(2,3)],
          [(0,2),(1,2),(2,2),(3,2)],
          [(1,0),(1,1),(1,2),(1,3)]],

    'O': [[(1,0),(2,0),(1,1),(2,1)],
          [(1,0),(2,0),(1,1),(2,1)],
          [(1,0),(2,0),(1,1),(2,1)],
          [(1,0),(2,0),(1,1),(2,1)]],

    'T': [[(1,0),(0,1),(1,1),(2,1)],
          [(1,0),(1,1),(2,1),(1,2)],
          [(0,1),(1,1),(2,1),(1,2)],
          [(1,0),(0,1),(1,1),(1,2)]],

    'S': [[(1,0),(2,0),(0,1),(1,1)],
          [(1,0),(1,1),(2,1),(2,2)],
          [(1,1),(2,1),(0,2),(1,2)],
          [(0,0),(0,1),(1,1),(1,2)]],

    'Z': [[(0,0),(1,0),(1,1),(2,1)],
          [(2,0),(1,1),(2,1),(1,2)],
          [(0,1),(1,1),(1,2),(2,2)],
          [(1,0),(0,1),(1,1),(0,2)]],

    'J': [[(0,0),(0,1),(1,1),(2,1)],
          [(1,0),(2,0),(1,1),(1,2)],
          [(0,1),(1,1),(2,1),(2,2)],
          [(1,0),(1,1),(0,2),(1,2)]],

    'L': [[(2,0),(0,1),(1,1),(2,1)],
          [(1,0),(1,1),(1,2),(2,2)],
          [(0,1),(1,1),(2,1),(0,2)],
          [(0,0),(1,0),(1,1),(1,2)]],
}

# SRS wall-kick offsets  { (from_rot, to_rot): [(dx, dy), ...] }
# Positive y = downward
WALL_KICKS = {
    (0,1): [(-1,0),(-1,-1),(0,2),(-1,2)],
    (1,0): [(1,0),(1,1),(0,-2),(1,-2)],
    (1,2): [(1,0),(1,1),(0,-2),(1,-2)],
    (2,1): [(-1,0),(-1,-1),(0,2),(-1,2)],
    (2,3): [(1,0),(1,-1),(0,2),(1,2)],
    (3,2): [(-1,0),(-1,1),(0,-2),(-1,-2)],
    (3,0): [(-1,0),(-1,1),(0,-2),(-1,-2)],
    (0,3): [(1,0),(1,-1),(0,2),(1,2)],
}
WALL_KICKS_I = {
    (0,1): [(-2,0),(1,0),(-2,1),(1,-2)],
    (1,0): [(2,0),(-1,0),(2,-1),(-1,2)],
    (1,2): [(-1,0),(2,0),(-1,-2),(2,1)],
    (2,1): [(1,0),(-2,0),(1,2),(-2,-1)],
    (2,3): [(2,0),(-1,0),(2,-1),(-1,2)],
    (3,2): [(-2,0),(1,0),(-2,1),(1,-2)],
    (3,0): [(1,0),(-2,0),(1,2),(-2,-1)],
    (0,3): [(-1,0),(2,0),(-1,-2),(2,1)],
}

# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------
def empty_board():
    return [[None]*COLS for _ in range(ROWS)]

def collides(board, cells, ox, oy):
    for (cx, cy) in cells:
        x, y = ox + cx, oy + cy
        if x < 0 or x >= COLS or y >= ROWS:
            return True
        if y >= 0 and board[y][x] is not None:
            return True
    return False

def ghost_drop(board, cells, ox, oy):
    gy = oy
    while not collides(board, cells, ox, gy + 1):
        gy += 1
    return gy

def lock_piece(board, cells, ox, oy, color):
    b = [row[:] for row in board]
    for (cx, cy) in cells:
        x, y = ox + cx, oy + cy
        if 0 <= y < ROWS and 0 <= x < COLS:
            b[y][x] = color
    return b

def clear_lines(board):
    kept = [row for row in board if any(c is None for c in row)]
    cleared = ROWS - len(kept)
    new_board = [[None]*COLS for _ in range(cleared)] + kept
    return new_board, cleared

def draw_block(surf, x, y, color, alpha=255, size=BLOCK):
    s = pygame.Surface((size, size), pygame.SRCALPHA)
    r, g, b = color
    s.fill((r, g, b, alpha))
    # highlight top
    hl = pygame.Surface((size - 2, 4), pygame.SRCALPHA)
    hl.fill((255, 255, 255, 70))
    s.blit(hl, (1, 1))
    # shadow bottom
    sh = pygame.Surface((size - 2, 4), pygame.SRCALPHA)
    sh.fill((0, 0, 0, 80))
    s.blit(sh, (1, size - 5))
    surf.blit(s, (x, y))

def draw_text(surf, text, x, y, size=16, color=WHITE, bold=False):
    font = pygame.font.SysFont('monospace', size, bold=bold)
    img = font.render(text, True, color)
    surf.blit(img, (x, y))

def score_for_clear(lines, level, tspin, back_to_back):
    base = {0: 0, 1: 100, 2: 300, 3: 500, 4: 800}
    tspin_base = {0: 0, 1: 200, 2: 400, 3: 1200}   # full t-spins
    tspin_mini = {0: 100, 1: 200}                    # mini t-spins

    if tspin == 'full':
        pts = tspin_base.get(lines, 0)
    elif tspin == 'mini':
        pts = tspin_mini.get(lines, 0)
    else:
        pts = base.get(lines, 0)

    if back_to_back and (lines == 4 or tspin):
        pts = int(pts * 1.5)

    return pts * (level + 1)

# ---------------------------------------------------------------------------
# 7-bag randomiser
# ---------------------------------------------------------------------------
class Bag:
    def __init__(self):
        self._bag = []

    def next(self):
        if not self._bag:
            self._bag = list(SHAPES.keys())
            random.shuffle(self._bag)
        return self._bag.pop(0)

# ---------------------------------------------------------------------------
# Piece
# ---------------------------------------------------------------------------
class Piece:
    def __init__(self, key, bag=None):
        self.key   = key
        self.color = PIECE_COLORS[key]
        self.rot   = 0
        self.x     = 3
        self.y     = -1

    @property
    def cells(self):
        return SHAPES[self.key][self.rot]

    def copy(self):
        p = Piece(self.key)
        p.rot = self.rot
        p.x   = self.x
        p.y   = self.y
        return p

# ---------------------------------------------------------------------------
# T-spin detection
# ---------------------------------------------------------------------------
def detect_tspin(board, piece, last_kick_used):
    if piece.key != 'T':
        return None
    # corners of the 3×3 bounding box occupied
    cx, cy = piece.x + 1, piece.y + 1   # centre of T
    corners = [
        (cx - 1, cy - 1), (cx + 1, cy - 1),
        (cx - 1, cy + 1), (cx + 1, cy + 1),
    ]
    occupied = 0
    for (x, y) in corners:
        if x < 0 or x >= COLS or y < 0 or y >= ROWS:
            occupied += 1
        elif board[y][x] is not None:
            occupied += 1

    if occupied < 3:
        return None

    # front corners (facing direction of T)
    facing = {0: [(cx-1,cy-1),(cx+1,cy-1)],
              1: [(cx+1,cy-1),(cx+1,cy+1)],
              2: [(cx-1,cy+1),(cx+1,cy+1)],
              3: [(cx-1,cy-1),(cx-1,cy+1)]}
    front_occ = sum(1 for (x,y) in facing[piece.rot]
                    if x<0 or x>=COLS or y<0 or y>=ROWS or board[y][x] is not None)
    if last_kick_used:
        return 'mini'
    return 'full' if front_occ == 2 else 'mini'

# ---------------------------------------------------------------------------
# Game state
# ---------------------------------------------------------------------------
LOCK_DELAY   = 0.5     # seconds before auto-lock
MAX_RESETS   = 15
ARE_DELAY    = 0.1     # spawn delay in seconds

class Game:
    def __init__(self):
        self.bag   = Bag()
        self.reset()

    def reset(self):
        self.board        = empty_board()
        self.score        = 0
        self.lines        = 0
        self.level        = 0
        self.game_over    = False
        self.paused       = False
        self.back_to_back = False

        self.bag          = Bag()
        self.hold         = None
        self.hold_used    = False

        self._preview = [Piece(self.bag.next()) for _ in range(3)]
        self.piece    = self._spawn()

        self.gravity_acc  = 0.0
        self.lock_timer   = None
        self.lock_resets  = 0
        self.last_kick    = False

        self.flash_rows   = []
        self.flash_timer  = 0.0

        self.are_timer    = None   # None = no ARE, else timestamp

        self.last_score_label = ''

    # -----------------------------------------------------------------------
    def _spawn(self):
        p = self._preview.pop(0)
        self._preview.append(Piece(self.bag.next()))
        p.x = 3
        p.y = -1
        # Adjust spawn so piece doesn't start clipped above board badly
        while not collides(self.board, p.cells, p.x, p.y + 1):
            # check if starting at y=-1 already ok
            break
        if collides(self.board, p.cells, p.x, p.y):
            # try y=0
            if not collides(self.board, p.cells, p.x, 0):
                p.y = 0
        return p

    @property
    def preview(self):
        return self._preview

    def gravity_interval(self):
        # frames per row = (0.8 - level*0.007)^level seconds per cell
        level = min(self.level, 29)
        return max(0.016, (0.8 - level * 0.007) ** level)

    # -----------------------------------------------------------------------
    # Movement
    # -----------------------------------------------------------------------
    def move(self, dx):
        if self.game_over or self.paused or self.are_timer is not None:
            return
        nx = self.piece.x + dx
        if not collides(self.board, self.piece.cells, nx, self.piece.y):
            self.piece.x = nx
            self._reset_lock_if_on_ground()

    def rotate(self, dr):
        if self.game_over or self.paused or self.are_timer is not None:
            return
        new_rot = (self.piece.rot + dr) % 4
        kicks = WALL_KICKS_I if self.piece.key == 'I' else WALL_KICKS
        tests = kicks.get((self.piece.rot, new_rot), [])

        # try (0,0) first
        if not collides(self.board, SHAPES[self.piece.key][new_rot], self.piece.x, self.piece.y):
            self.piece.rot = new_rot
            self.last_kick = False
            self._reset_lock_if_on_ground()
            return

        for i, (kx, ky) in enumerate(tests):
            nx, ny = self.piece.x + kx, self.piece.y + ky
            if not collides(self.board, SHAPES[self.piece.key][new_rot], nx, ny):
                self.piece.rot = new_rot
                self.piece.x   = nx
                self.piece.y   = ny
                self.last_kick = (i == len(tests) - 1)  # last kick = special
                self._reset_lock_if_on_ground()
                return

    def soft_drop(self):
        if self.game_over or self.paused or self.are_timer is not None:
            return
        if not collides(self.board, self.piece.cells, self.piece.x, self.piece.y + 1):
            self.piece.y  += 1
            self.score    += 1
            self.gravity_acc = 0.0
            self.lock_timer  = None
        else:
            self._lock()

    def hard_drop(self):
        if self.game_over or self.paused or self.are_timer is not None:
            return
        gy = ghost_drop(self.board, self.piece.cells, self.piece.x, self.piece.y)
        self.score  += 2 * (gy - self.piece.y)
        self.piece.y = gy
        self._lock()

    def do_hold(self):
        if self.game_over or self.paused or self.hold_used or self.are_timer is not None:
            return
        if self.hold is None:
            self.hold  = Piece(self.piece.key)
            self.piece = self._spawn()
        else:
            new_piece      = Piece(self.hold.key)
            self.hold      = Piece(self.piece.key)
            new_piece.x    = 3
            new_piece.y    = -1
            self.piece     = new_piece
        self.hold_used   = True
        self.lock_timer  = None
        self.gravity_acc = 0.0
        self.last_kick   = False

    # -----------------------------------------------------------------------
    # Internal
    # -----------------------------------------------------------------------
    def _reset_lock_if_on_ground(self):
        if collides(self.board, self.piece.cells, self.piece.x, self.piece.y + 1):
            if self.lock_resets < MAX_RESETS:
                self.lock_timer  = time.time()
                self.lock_resets += 1

    def _lock(self):
        tspin = detect_tspin(self.board, self.piece, self.last_kick)
        self.board = lock_piece(self.board, self.piece.cells,
                                self.piece.x, self.piece.y, self.piece.color)
        self.board, cleared = clear_lines(self.board)

        # Scoring
        is_back = (cleared == 4) or (tspin and cleared > 0)
        pts = score_for_clear(cleared, self.level, tspin, self.back_to_back)
        self.score += pts
        if pts:
            self.last_score_label = f'+{pts}'
        if is_back:
            self.back_to_back = True
        elif cleared > 0:
            self.back_to_back = False

        self.lines += cleared
        self.level  = min(self.lines // 10, 29)

        # Flash
        if cleared:
            self.flash_rows  = [r for r, row in enumerate(self.board) if all(c is not None for c in row)]
            # already cleared, so flash the rows that were just replaced (empty now at top)
            # Actually let's just do a brief screen flash instead
            self.flash_timer = 0.12

        self.lock_timer   = None
        self.lock_resets  = 0
        self.last_kick    = False
        self.hold_used    = False
        self.are_timer    = time.time()

    def _do_spawn(self):
        self.piece       = self._spawn()
        self.gravity_acc = 0.0
        if collides(self.board, self.piece.cells, self.piece.x, self.piece.y):
            self.game_over = True

    # -----------------------------------------------------------------------
    def update(self, dt):
        if self.game_over or self.paused:
            return

        # ARE (spawn delay)
        if self.are_timer is not None:
            if time.time() - self.are_timer >= ARE_DELAY:
                self.are_timer = None
                self._do_spawn()
            return

        # Flash timer
        if self.flash_timer > 0:
            self.flash_timer -= dt

        # Gravity
        self.gravity_acc += dt
        interval = self.gravity_interval()
        while self.gravity_acc >= interval:
            self.gravity_acc -= interval
            if not collides(self.board, self.piece.cells, self.piece.x, self.piece.y + 1):
                self.piece.y += 1
                self.lock_timer = None
            else:
                if self.lock_timer is None:
                    self.lock_timer = time.time()

        # Lock delay
        if self.lock_timer is not None:
            if collides(self.board, self.piece.cells, self.piece.x, self.piece.y + 1):
                if time.time() - self.lock_timer >= LOCK_DELAY:
                    self._lock()
            else:
                self.lock_timer = None

# ---------------------------------------------------------------------------
# Renderer
# ---------------------------------------------------------------------------
class Renderer:
    def __init__(self, screen):
        self.screen = screen
        self.small_block = BLOCK - 2

    def draw(self, game):
        self.screen.fill(BG)
        self._draw_board(game)
        self._draw_piece(game)
        self._draw_ghost(game)
        self._draw_hold(game)
        self._draw_preview(game)
        self._draw_hud(game)
        if game.flash_timer > 0:
            s = pygame.Surface((COLS*BLOCK, ROWS*BLOCK), pygame.SRCALPHA)
            alpha = int(180 * (game.flash_timer / 0.12))
            s.fill((255,255,255,alpha))
            self.screen.blit(s, (BOARD_X, BOARD_Y))
        if game.paused and not game.game_over:
            self._draw_overlay('PAUSED', 'Press P to resume')
        if game.game_over:
            self._draw_overlay('GAME OVER', f'Score: {game.score}  |  Press R to restart')

    def _board_rect(self):
        return pygame.Rect(BOARD_X - 2, BOARD_Y - 2, COLS*BLOCK + 4, ROWS*BLOCK + 4)

    def _draw_board(self, game):
        # Border
        pygame.draw.rect(self.screen, BORDER, self._board_rect(), 2)
        # Grid
        for r in range(ROWS):
            for c in range(COLS):
                rx = BOARD_X + c * BLOCK
                ry = BOARD_Y + r * BLOCK
                pygame.draw.rect(self.screen, GRID_LINE, (rx, ry, BLOCK, BLOCK), 1)
                cell = game.board[r][c]
                if cell:
                    draw_block(self.screen, rx, ry, cell)

    def _draw_piece(self, game):
        if game.are_timer is not None:
            return
        p = game.piece
        for (cx, cy) in p.cells:
            rx = BOARD_X + (p.x + cx) * BLOCK
            ry = BOARD_Y + (p.y + cy) * BLOCK
            if p.y + cy >= 0:
                draw_block(self.screen, rx, ry, p.color)

    def _draw_ghost(self, game):
        if game.are_timer is not None:
            return
        p = game.piece
        gy = ghost_drop(game.board, p.cells, p.x, p.y)
        if gy == p.y:
            return
        for (cx, cy) in p.cells:
            rx = BOARD_X + (p.x + cx) * BLOCK
            ry = BOARD_Y + (gy + cy) * BLOCK
            if gy + cy >= 0:
                draw_block(self.screen, rx, ry, p.color, alpha=GHOST_ALPHA)

    # ---- Right panel: NEXT ----
    def _draw_preview(self, game):
        x0 = BOARD_X + COLS * BLOCK + 20
        y0 = BOARD_Y
        draw_text(self.screen, 'NEXT', x0, y0, size=13, color=GRAY)
        y0 += 22
        for i, p in enumerate(game.preview):
            self._draw_mini(p, x0, y0 + i * 82, scale=0.75 if i > 0 else 1.0)

    def _draw_mini(self, piece, ox, oy, scale=1.0):
        sz = int(BLOCK * scale)
        cells = SHAPES[piece.key][0]
        xs = [c for (c, r) in cells]
        ys = [r for (c, r) in cells]
        min_x, max_x = min(xs), max(xs)
        min_y, max_y = min(ys), max(ys)
        w = (max_x - min_x + 1) * sz
        h = (max_y - min_y + 1) * sz
        box_w = 4 * sz
        off_x = (box_w - w) // 2
        for (cx, cy) in cells:
            rx = ox + off_x + (cx - min_x) * sz
            ry = oy + (cy - min_y) * sz
            draw_block(self.screen, rx, ry, piece.color, size=sz)

    # ---- Left panel: HOLD ----
    def _draw_hold(self, game):
        x0 = BOARD_X - 140
        y0 = BOARD_Y
        draw_text(self.screen, 'HOLD', x0, y0, size=13, color=GRAY)
        y0 += 22
        if game.hold:
            alpha = 255 if not game.hold_used else 120
            p = game.hold
            cells = SHAPES[p.key][0]
            xs = [c for (c, r) in cells]
            ys = [r for (c, r) in cells]
            min_x, min_y = min(xs), min(ys)
            for (cx, cy) in cells:
                rx = x0 + (cx - min_x) * BLOCK
                ry = y0 + (cy - min_y) * BLOCK
                draw_block(self.screen, rx, ry, p.color, alpha=alpha)

    # ---- HUD ----
    def _draw_hud(self, game):
        x0 = BOARD_X - 140
        y0 = BOARD_Y + 120
        lh = 28
        sections = [
            ('SCORE', str(game.score)),
            ('LEVEL', str(game.level)),
            ('LINES', str(game.lines)),
        ]
        for label, val in sections:
            draw_text(self.screen, label, x0, y0, size=12, color=GRAY)
            draw_text(self.screen, val,   x0, y0 + 14, size=18, color=WHITE, bold=True)
            y0 += 52

        # back-to-back indicator
        if game.back_to_back:
            draw_text(self.screen, 'B2B', x0, y0, size=12, color=(240,160,0), bold=True)
            y0 += 20

        # controls legend
        y0 = BOARD_Y + ROWS * BLOCK - 160
        controls = [
            ('← →', 'Move'),
            ('↑ / X', 'Rotate CW'),
            ('Z / Ctrl', 'Rotate CCW'),
            ('↓', 'Soft drop'),
            ('Space', 'Hard drop'),
            ('C / ⇧', 'Hold'),
            ('P', 'Pause'),
        ]
        for key, desc in controls:
            draw_text(self.screen, f'{key:<9} {desc}', x0, y0, size=11, color=(70,70,70))
            y0 += 16

    def _draw_overlay(self, title, subtitle):
        s = pygame.Surface((COLS*BLOCK, ROWS*BLOCK), pygame.SRCALPHA)
        s.fill((0, 0, 0, 175))
        self.screen.blit(s, (BOARD_X, BOARD_Y))
        cx = BOARD_X + COLS * BLOCK // 2
        cy = BOARD_Y + ROWS * BLOCK // 2

        font_big = pygame.font.SysFont('monospace', 28, bold=True)
        font_sm  = pygame.font.SysFont('monospace', 14)
        img  = font_big.render(title, True, WHITE)
        img2 = font_sm.render(subtitle, True, GRAY)
        self.screen.blit(img,  img.get_rect(center=(cx, cy - 20)))
        self.screen.blit(img2, img2.get_rect(center=(cx, cy + 18)))

# ---------------------------------------------------------------------------
# Main loop
# ---------------------------------------------------------------------------
def main():
    pygame.init()
    pygame.display.set_caption('Tetris')
    screen = pygame.display.set_mode((SCREEN_W, SCREEN_H))
    clock  = pygame.time.Clock()

    game     = Game()
    renderer = Renderer(screen)

    # Key-repeat for held keys (move/soft-drop)
    pygame.key.set_repeat(170, 50)

    while True:
        dt = clock.tick(FPS) / 1000.0

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

            if event.type == pygame.KEYDOWN:
                k = event.key
                mod = event.mod

                if k == pygame.K_ESCAPE:
                    pygame.quit()
                    sys.exit()

                if k == pygame.K_r and game.game_over:
                    game.reset()
                    continue

                if k == pygame.K_p:
                    game.paused = not game.paused
                    continue

                if game.game_over or game.paused:
                    continue

                if k == pygame.K_LEFT:
                    game.move(-1)
                elif k == pygame.K_RIGHT:
                    game.move(1)
                elif k == pygame.K_UP or k == pygame.K_x:
                    game.rotate(1)
                elif k == pygame.K_z or k in (pygame.K_LCTRL, pygame.K_RCTRL):
                    game.rotate(-1)
                elif k == pygame.K_DOWN:
                    game.soft_drop()
                elif k == pygame.K_SPACE:
                    game.hard_drop()
                elif k in (pygame.K_c, pygame.K_LSHIFT, pygame.K_RSHIFT):
                    game.do_hold()

        game.update(dt)
        renderer.draw(game)
        pygame.display.flip()

if __name__ == '__main__':
    main()
