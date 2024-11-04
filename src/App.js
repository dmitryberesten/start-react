import React from "react";
import EffectComponentDidMount from "./components/EffectComponentDidMount";
import EffectComponentDidUpdate from "./components/EffectComponentDidUpdate";
import EffectComponentWillUnmount from "./components/EffectComponentWillUnmount";
import MultipleEffects from "./components/MultipleEffects";
import styles from "./App.css";

const App = () => {
  return (
    <div className={styles.container}>
      <h1>React useEffect Examples</h1>
      <EffectComponentDidMount />
      <EffectComponentDidUpdate />
      <EffectComponentWillUnmount />
      <MultipleEffects />
    </div>
  );
};

export default App;
