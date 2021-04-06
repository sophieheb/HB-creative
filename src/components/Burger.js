import React from 'react';
import styles from '../styles/burger.module.css';

function Burger({ collapsed, setCollapsed }) {
  return (
    <button
      className={`${styles.bunButton} button shadow-none col-4 align-items-center`}
      onClick={() => { setCollapsed(); }}
    >
      <span
        className={`${collapsed ? styles.bun : styles.topBun} ${styles.allBuns} bg-primary`}
      />
      <span
        className={`${collapsed ? styles.bun : styles.bottomBun} ${styles.allBuns} bg-primary`}
      />
    </button>
  );
}

export default Burger;
