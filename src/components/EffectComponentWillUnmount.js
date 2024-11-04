import { useEffect } from "react";
import styles from "./EffectComponentWillUnmount.module.css";

const EffectComponentWillUnmount = () => {
  useEffect(() => {
    console.log("Компонент змонтовано!");

    return () => {
      console.log("Компонент демонтується!");
    };
  }, []);

  return (
    <div className={styles.card}>
      <h2>EffectComponentWillUnmount</h2>
      <p>Компонент з демонтажем.</p>
    </div>
  );
};

export default EffectComponentWillUnmount;
