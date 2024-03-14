import React, { useEffect } from 'react';
import ProjectButton from '../common/ProjectButton';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import rancidtomatillosImg from '../../assets/rancidtomatillos.png';

export default function RancidTomatillosProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={styles['page-container']}>
        <h1 className={styles['page-title']}>Rancid Tomatillos</h1>
        <div className={styles.header}>
          <div className={styles['button-container']}>
            <ProjectButton text='Deployed App' link='https://rancidtomatillos-client.netlify.app/' target='_blank' />
            <ProjectButton text='App Source Code' link='https://github.com/aliroemhildt/rancidtomatillos' target='_blank' />
            <ProjectButton text='Deployed API' link='https://rancidtomatillos-api.netlify.app/.netlify/functions/api/v1/ratings' target='_blank' />
            <ProjectButton text='API Source Code' link='https://github.com/aliroemhildt/rancidtomatillos-api' target='_blank' />
          </div>
          <div className={styles['tech-stack-container']}>
            <div className={styles['tech-list']}>
              <LabelCard className={styles.card} text='React' />
              <LabelCard className={styles.card} text='React Router' />
              <LabelCard className={styles.card} text='Sass' />
              <LabelCard className={styles.card} text='Cypress' />
              <LabelCard className={styles.card} text='Mocha/Chai' />
              <LabelCard className={styles.card} text='Express' />
              <LabelCard className={styles.card} text='Node.js' />
              <LabelCard className={styles.card} text='REST' />
            </div>
          </div>
        </div>
        <div className={styles['content-container']}>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Overview
          </p>
          <p className={styles.body}>
            A multi-page movie review app that allows users to view movie details and leave their own rating
          </p>
          <p className={styles.body}>
            This was a pair project completed during my time at Turing School of Software and Design. Built alongside one other student over the course of two weeks.
          </p>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Goals
          </p>
          <p className={styles.body}>
            The goals of this project were to gain competency with React fundamentals and async JavaScript, get practice with data cleaning and error handling, as well as implementing several new technologies. This project was my first time working with React Router, Cypress end-to-end testing, Express, and deploying to heroku (deployments have since been moved to Netlify). I also went through the intentional process of building out this application with conditional rendering, then refactoring to replace the conditional rendering with React Router. Although time-consuming, this process gave me a much deeper understanding of how React Router works under the hood.
          </p>
        </div>
        <div className={styles['image-container']}>
          <img className={styles['project-image']} src={rancidtomatillosImg} />
        </div>
      </div>
    </Layout>
  )
}