import React, { useEffect } from 'react';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import charttoppersImg from '../../assets/charttoppers.png';

export default function ChartToppersProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return(
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>Chart Toppers</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.header}>
            <div className={styles['link-container']}>
              <a href='https://charttoppers.netlify.app/' target='_blank'>
                Deployed App
              </a>
              <a href='https://github.com/aliroemhildt/chart-toppers' target='_blank'>
                App Source Code
              </a>
              <a href='https://chart-toppers-api.netlify.app/.netlify/functions/api' target='_blank'>
                Deployed API
              </a>
              <a href='https://github.com/aliroemhildt/chart-toppers-api' target='_blank'>
                API Source Code
              </a>
            </div>
            <div className={styles['tech-stack-container']}>
              <div className={styles['tech-list']}>
                <LabelCard className={styles.card} text='React' id='1' />
                <LabelCard className={styles.card} text='React Router' id='2' />
                <LabelCard className={styles.card} text='Sass' id='3' />
                <LabelCard className={styles.card} text='Cypress' id='4' />
                <LabelCard className={styles.card} text='Express' id='5' />
                <LabelCard className={styles.card} text='Node.js' id='6' />
                <LabelCard className={styles.card} text='REST' id='7' />
              </div>
            </div>
          </div>
          <div className={styles['image-container']}>
            <img className={styles['project-image']} src={charttoppersImg} alt='screenshot of the Chart Toppers application' />
          </div>
          <div className={styles['subheading-container']}>
            <p className={styles['project-subheading']}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            Put your musical knowledge to the test and see if you can guess which song was the Billboard #1 hit of the year. Chart Toppers is a multi-page game where players are quizzed on the Billboard chart-topping songs from the 1980's to the 2020's.
          </p>
          <br />
          <p className={styles.body}>
            This was a solo project completed during my time at Turing School of Software & Design, completed over the course of one week.
          </p>
          <br />
          <p className={styles.body}>
            Check out the source code for a full walk through and visit the deployed app to try it out yourself.
          </p>
          <div className={styles['subheading-container']}>
            <p className={styles['project-subheading']}>
              Goals
            </p>
          </div>
          <p className={styles.body}>
            <ul className={styles.goals}>
              <li>React fundamentals and implementing Hooks</li>
              <li>Dynamic routes with React Router v6</li>
              <li>Asynchronous JavaScript</li>
              <li>End to end testing with Cypress</li>
              <li>Project managment from ideation and user stories to execution and deployment</li>
              <li>Building and deploying an Express API</li>
            </ul>
          </p>
          {/* <p className={styles.body}>
            The goal of this project was to gain experience with React React Router, build my own express server, work with async JavaScript, and create a responsive application.
          </p> */}
          
        </div>
      </div>  
    </Layout>
  )
}