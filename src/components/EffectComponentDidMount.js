import { useEffect } from "react";
import styles from "./EffectComponentDidMount.module.css";

const EffectComponentDidMount = () => {
  useEffect(() => {
    console.log("Компонент змонтовано!");
  }, []);

  return (
    <div className={styles.card}>
      <h2>EffectComponentDidMount</h2>
      <p>Компонент змонтовано один раз.</p>
    </div>
  );
};

export default EffectComponentDidMount;
