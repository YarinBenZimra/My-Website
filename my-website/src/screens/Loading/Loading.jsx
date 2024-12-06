import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LottieAnimation from "./Lottie.json";
import styles from "./Loading.module.css";
export default function Loading() {
  const [dots, setDots] = useState("");
  useEffect(() => {
    let interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.loadingContainer}>
      <Player
        autoplay
        loop
        src={LottieAnimation}
        style={{ height: "12.5rem", width: "12.5rem" }}
      />
      <p className={styles.loadingText}>{`Loading${dots}`}</p>
    </div>
  );
}
