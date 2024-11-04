import { useState, useEffect } from "react";
import styles from "./EffectComponentDidUpdate.module.css";

const EffectComponentDidUpdate = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Значення лічильника: ${count}`);
  }, [count]);

  return (
    <div className={styles.card}>
      <h2>EffectComponentDidUpdate</h2>
      <p>Лічильник: {count}</p>
      <button onClick={() => setCount(count + 1)} className={styles.button}>
        Збільшити
      </button>
    </div>
  );
};

export default EffectComponentDidUpdate;
