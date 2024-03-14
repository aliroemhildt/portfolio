import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ProjectButton from '../common/ProjectButton';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ChartToppersProject.module.scss';
import charttoppersImg from '../../assets/charttoppers.png';

export default function ChartToppersProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>Chart Toppers</h1>
        <div className={styles['content-container']}>
          <div className={styles['button-container']}>
            <ProjectButton text='Deployed App' link='https://charttoppers.netlify.app/' target='_blank' />
            <ProjectButton text='App Source Code' link='https://github.com/aliroemhildt/chart-toppers' target='_blank' />
            <ProjectButton text='API Source Code' link='https://github.com/aliroemhildt/chart-toppers-api' target='_blank' />
            <ProjectButton text='Deployed API' link='https://chart-toppers-api.netlify.app/.netlify/functions/api' target='_blank' />
          </div>
          <div className={styles['tech-stack-container']}>
            <p className={styles['project-subheading']}>Tech Stack:</p>
            <p className={styles.body}>
              React, React Router, SCSS, Cypress/Mocha/Chai, Express, Node.js, REST API
            </p>
          </div>
          <div className={styles['overview-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>Overview:</p>
            <p className={styles.body}>
              Chart Toppers is a multi-page game where players are quizzed on the Billboard chart-topping songs from the 1980's to the 2020's.
            </p>
            <p className={styles.body}>
              This was a solo project completed during my time at Turing School of Software & Design, completed over the course of one week.
            </p>
            <p className={styles.body}>
              The goal of this project was to gain experience with React React Router, build my own express server, work with async JavaScript, and create a responsive application.
            </p>
          </div>
          
          <div className={styles['image-container']}>
            <img className={styles['project-image']} src={charttoppersImg} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

