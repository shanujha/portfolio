import './App.css';
import TypeWriter from './shared/components/TypeWriter';
import styles from "./Main.module.css";
import React, { useEffect, useState } from 'react';
const helloWorld = '# Hello World';
const name = `$name = 'Shanu Jha';`;

const App = () => {

  const [nameVisible, setNameVisible] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  React.useEffect(() => {
    const t = setTimeout(() => setNameVisible(true), 5000);
    return () => clearTimeout(t);
  }, [])

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <div className={styles.sectionTypedText}>
      <TypeWriter style={styles.typedText} content={helloWorld} />
      <br />
      <br />
      {nameVisible &&
        <TypeWriter style={styles.typedTextName} content={name} />
      }
    </div>
  )
}

export default App
