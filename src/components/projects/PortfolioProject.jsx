import React from 'react';
import portfolioImg from '../../assets/portfolio.png';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './PortfolioProject.module.scss';

export default function PortfolioProject() {
  return(
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>How I Made this Portfolio</h1>
        <div className={styles['content-container']}>
          <div className={styles['tech-stack-container']}>
            <p>Tech Stack:</p>
            <p></p>
          </div>
          <div className={styles['overview-container']}>
          </div>
          <div className={styles['image-container']}>
            <img className={styles['project-img']} src={portfolioImg} />
          </div>
        </div>
      </div>
    </Layout>
  )
}