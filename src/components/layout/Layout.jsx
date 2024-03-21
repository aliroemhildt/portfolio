import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return(
    <div className={styles['layout-container']}>
      <Navbar />
      <main className={styles['main-container']}>
          {children}
        <Footer />
      </main>
    </div>
  );
}