import React from 'react';
import Layout from '../layout/Layout';
import styles from './About.module.scss';

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        About Page
      </div>
    </Layout>
  );
}