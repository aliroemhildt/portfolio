import React from 'react';
import Layout from '../layout/Layout';
import styles from './Resume.module.scss';

export default function Resume() {
  return (
    <Layout>
      <div className={styles.resume}>
        Resume Page
      </div>
    </Layout>
  )
}