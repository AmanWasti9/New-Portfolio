import styles from "../styles/page.module.css";
import { useState } from "react";

export default function GeometricAnimations() {
  const [activeShape, setActiveShape] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Geometric Harmony</h1>
      <div className={styles.shapesContainer}>
        <svg
          className={`${styles.shape} ${styles.octagon} ${
            activeShape === "octagon" ? styles.active : ""
          }`}
          viewBox="0 0 100 100"
          onClick={() =>
            setActiveShape(activeShape === "octagon" ? null : "octagon")
          }
        >
          <line x1="30" y1="0" x2="70" y2="0" />
          <line x1="70" y1="0" x2="100" y2="30" />
          <line x1="100" y1="30" x2="100" y2="70" />
          <line x1="100" y1="70" x2="70" y2="100" />
          <line x1="70" y1="100" x2="30" y2="100" />
          <line x1="30" y1="100" x2="0" y2="70" />
          <line x1="0" y1="70" x2="0" y2="30" />
          <line x1="0" y1="30" x2="30" y2="0" />
          <line x1="30" y1="0" x2="70" y2="100" />
          <line x1="70" y1="0" x2="30" y2="100" />
          <line x1="0" y1="30" x2="100" y2="70" />
          <line x1="0" y1="70" x2="100" y2="30" />
        </svg>

        <svg
          className={`${styles.shape} ${styles.square} ${
            activeShape === "square" ? styles.active : ""
          }`}
          viewBox="0 0 100 100"
          onClick={() =>
            setActiveShape(activeShape === "square" ? null : "square")
          }
        >
          <line x1="0" y1="0" x2="100" y2="0" />
          <line x1="100" y1="0" x2="100" y2="100" />
          <line x1="100" y1="100" x2="0" y2="100" />
          <line x1="0" y1="100" x2="0" y2="0" />
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
          <line x1="50" y1="0" x2="50" y2="100" />
          <line x1="0" y1="50" x2="100" y2="50" />
        </svg>

        <svg
          className={`${styles.shape} ${styles.star} ${
            activeShape === "star" ? styles.active : ""
          }`}
          viewBox="0 0 100 100"
          onClick={() => setActiveShape(activeShape === "star" ? null : "star")}
        >
          <line x1="50" y1="0" x2="61" y2="35" />
          <line x1="61" y1="35" x2="98" y2="35" />
          <line x1="98" y1="35" x2="68" y2="57" />
          <line x1="68" y1="57" x2="79" y2="91" />
          <line x1="79" y1="91" x2="50" y2="70" />
          <line x1="50" y1="70" x2="21" y2="91" />
          <line x1="21" y1="91" x2="32" y2="57" />
          <line x1="32" y1="57" x2="2" y2="35" />
          <line x1="2" y1="35" x2="39" y2="35" />
          <line x1="39" y1="35" x2="50" y2="0" />
          <line x1="50" y1="0" x2="50" y2="70" />
          <line x1="2" y1="35" x2="98" y2="35" />
          <line x1="21" y1="91" x2="79" y2="91" />
          <line x1="32" y1="57" x2="68" y2="57" />
        </svg>
      </div>
    </div>
  );
}

