import React from 'react';
import Navbar from './Navbar';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return(
    <div className={styles.layout}>
      <Navbar />
      <main>
          {children}
      </main>
    </div>
  );
}