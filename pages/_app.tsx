import "@/styles/app.css";
import type { AppProps } from "next/app";
import { useEffect, useState, createContext, useContext } from "react";
import Layout from "./components/Layout"; // Navbar and page structure
import Countdown from "./components/Countdown"; // Countdown component

// Create a Countdown Context
const CountdownContext = createContext<{ showContent: boolean }>({ showContent: false });

export const useCountdown = () => useContext(CountdownContext);

export default function App({ Component, pageProps }: AppProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2024-11-14T10:00:00+08:00").getTime();

    const checkCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setShowContent(true);
      }
    };

    checkCountdown();

    const timer = setInterval(() => {
      checkCountdown();
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, []);

  return (
    <CountdownContext.Provider value={{ showContent }}>
      {showContent ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Countdown />
      )}
    </CountdownContext.Provider>
  );
}
