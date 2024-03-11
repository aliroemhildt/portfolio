import React from 'react';
import Layout from '../layout/Layout';
import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.scss';
import layout from '../layout/Layout.module.scss';

export default function NotFound() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>Oops!</h1>
        <div className={styles['content-container']}>
          <p className={styles['text']}>
            We couldn't find the page you're looking for. Let's try that again.
          </p>
          <div className={styles['button-container']}>
            <NavLink to='/'>
              <button className={styles['home-button']}>Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
    
  )
}