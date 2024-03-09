import React from 'react';
import Layout from '../layout/Layout';
import styles from './Work.module.scss'

export default function Work() {
  return (
    <Layout>
      <div className={styles.work}>
        <h1 className={styles.title}>Ali Roemhildt</h1>
      </div>
    </Layout>
  )
}