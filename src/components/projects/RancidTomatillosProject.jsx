import React, { useEffect, useState } from 'react';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import Img from '../../assets/rancid-tomatillos.jpg';
import ImgSmall from '../../assets/rancidtomatillos-small.png';

export default function RancidTomatillosProject() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Img;
    img.onload = () => {
      setImageLoaded(true);
    }
  },[Img])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>Rancid Tomatillos</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.header}>
            <div className={styles['link-container']}>
              <a href='https://rancidtomatillos-client.netlify.app/' target='_blank'>
                Deployed App
              </a>
              <a href='https://github.com/aliroemhildt/rancidtomatillos' target='_blank'>
                App Source Code
              </a>
              <a href='https://rancidtomatillos-api.netlify.app/.netlify/functions/api/v1/ratings' target='_blank'>
                Deployed API
              </a>
              <a href='https://github.com/aliroemhildt/rancidtomatillos-api' target='_blank'>
                API Source Code
              </a>
            </div>
            <div className={styles['tech-stack-container']}>
              <div className={styles['tech-list']}>
                <LabelCard className={styles.card} text='React' id='1' />
                <LabelCard className={styles.card} text='React Router' id='2' />
                <LabelCard className={styles.card} text='Sass' id='3' />
                <LabelCard className={styles.card} text='Cypress' id='4' />
                <LabelCard className={styles.card} text='Mocha/Chai' id='5' />
                <LabelCard className={styles.card} text='Express' id='6' />
                <LabelCard className={styles.card} text='Node.js' id='7' />
                <LabelCard className={styles.card} text='REST' id='8' />
              </div>
            </div>
          </div>
          <div className={styles['image-container']}>
              {
                !imageLoaded &&
                <img className={styles['project-image']} src={ImgSmall} />
              }
              {
                imageLoaded &&
                <img className={styles['project-image']} src={Img} alt='screenshot of the Rancid Tomatillos application' />
              }
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            This is a web app that provides a list of movies, their Rancid Tomatillo rating, and details about the movie's runtime, synopsis, genre, budget, and revenue. Keep track of your opinion on each movie by logging in and leaving your own rating.
          </p>
          <br />
          <p className={styles.body}>
            This was a pair project completed during my time at Turing School of Software and Design. Built alongside one other student over the course of two weeks.
          </p>
          <br />
          <p className={styles.body}>
            Check out the source code for a full walk through and visit the deployed app to try it out yourself.
          </p>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Goals
            </p>
          </div>
          <p className={styles.body}>
            <ul className={styles.goals}>
              <li>Gain competency with React fundamentals and asynchronous JavaScript</li>
              <li>Practice refactoring</li>
              <li>Create a multi-page UI using Router</li>
              <li>Build and deploy an API using Express</li>
              <li>Learn and implement Cypress end to end testing</li>
              <li>Data cleaning & error handling</li>
            </ul>
          </p>
          {/* <p className={styles.body}>
            The goals of this project were to gain competency with React fundamentals and async JavaScript, get practice with data cleaning and error handling, as well as implementing several new technologies. This project was my first time working with React Router, Cypress end-to-end testing, Express, and deploying to heroku (deployments have since been moved to Netlify). I also went through the intentional process of building out this application with conditional rendering, then refactoring to replace the conditional rendering with React Router. Although time-consuming, this process gave me a much deeper understanding of how React Router works under the hood.
          </p> */}
        </div>
      </div>
    </Layout>
  )
}