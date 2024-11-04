import { useState } from "react";
import styles from "./MultipleEffects.module.css";

const MultipleEffects = () => {
  const [message, setMessage] = useState("Привіт!");

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>{message}</h2>
      <p>Натисніть кнопку для зміни тексту заголовка.</p>
      <button
        onClick={() => setMessage("Привіт, React!")}
        className={styles.button}
      >
        Змінити заголовок
      </button>
    </div>
  );
};

export default MultipleEffects;
