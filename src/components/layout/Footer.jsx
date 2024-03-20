import React from 'react';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles['footer-container']}>
      <p className={styles.text}>&copy; 2024 Ali Roemhildt</p>
    </div>
  )
}