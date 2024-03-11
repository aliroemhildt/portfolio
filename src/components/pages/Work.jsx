import React from 'react';
import Layout from '../layout/Layout';
import arrow from '../../assets/arrow.svg'
import styles from './Work.module.scss'
import layout from '../layout/Layout.module.scss';

export default function Work() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={styles['intro-container']}>
          <h1 className={styles.name}>Ali Roemhildt</h1>
          <p className={styles.bio}>I'm a software engineer specializing in frontend development.</p>
          <p className={styles['sub-title']}>things I've made</p>
          <img className={styles.arrow} src={arrow} />
        </div>
        <div className={styles['project-container']}>
          <h1 className={layout['page-title']}>Projects</h1>
          {/* project cards will go here */}
        </div>
      </div>
    </Layout>
  )
}