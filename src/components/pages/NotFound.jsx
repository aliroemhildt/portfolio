import React from 'react';
import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <Layout>
      <div className={styles.notfound}>
        <h1>Page Not Found</h1>
        <Link to='/'>Back to Home Page</Link>
      </div>
    </Layout>
    
  )
}