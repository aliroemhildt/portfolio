import React from 'react';
import portfolioImg from '../../assets/portfolio.png';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './PortfolioProject.module.scss';

export default function PortfolioProject() {
  return(
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>How I Made this Portfolio</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.header}>
            <div className={styles['link-container']}>
              <a href='' target='_blank'>
                Deployed App
              </a>
            </div>
            <div className={styles['tech-stack-container']}>
              <div className={styles['tech-list']}>
                <LabelCard className={styles.card} text='React' id='1' />
                <LabelCard className={styles.card} text='React Router' id='2' />
                <LabelCard className={styles.card} text='Sass' id='3' />
                <LabelCard className={styles.card} text='Netlify' id='4' />
              </div>
            </div>
          </div>
          <div className={styles['subheading-container']}>
            <p className={styles['project-subheading']}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            description...
          </p>
          <div className={styles['subheading-container']}>
            <p className={styles['project-subheading']}>
              Goals
            </p>
          </div>
          <p className={styles.body}>
            description...
          </p>
          <div className={styles['image-container']}>
            <img className={styles['project-image']} src={portfolioImg} alt='' />
          </div>
        </div>
      </div>
    </Layout>
  )
}