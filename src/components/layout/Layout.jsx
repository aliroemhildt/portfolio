import React from 'react';
import Navbar from './Navbar';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return(
    <div className={styles['layout-container']}>
      <Navbar />
      <main className={styles['main-container']}>
          {children}
      </main>
    </div>
  );
}