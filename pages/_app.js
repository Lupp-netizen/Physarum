import '../styles/globals.css';
import Head from 'next/head';
import { createContext, useState, useContext } from 'react';

// Theme context for toki pona mode
export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

function MyApp({ Component, pageProps }) {
  const [tokiPonaMode, setTokiPonaMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ tokiPonaMode, setTokiPonaMode }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Courier+Prime:ital@0;1&family=VT323&family=Press+Start+2P&family=Special+Elite&family=Cutive+Mono&family=Share+Tech+Mono&family=Xanh+Mono:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
