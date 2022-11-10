import React from 'react';
import Sharing from './components/sharing/sharing';
import styles from './app.module.css';

function App() {
  return (
    <main className={styles.app}>
      <h1>Чтобы выиграть</h1>
      <Sharing />
    </main>
  );
}

export default App;
