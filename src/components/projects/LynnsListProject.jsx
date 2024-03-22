import React, { useEffect, useState } from 'react';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import Img from '../../assets/lynns-list.jpg';
import ImgSmall from '../../assets/lynnslist-small.png';

export default function LynnsListProject() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Img;
    img.onload = () => {
      setImageLoaded(true);
    }
  }, [Img])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>Lynn's List</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.header}>
            <div className={styles['link-container']}>
              <a href='https://lynnslist.netlify.app/' target='_blank'>
                Deployed App
              </a>
              <a href='https://github.com/aliroemhildt/lynns_list' target='_blank'>
                App Source Code
              </a>
            </div>
            <div className={styles['tech-stack-container']}>
              <div className={styles['tech-list']}>
                <LabelCard className={styles.card} text='React' id='1' />
                <LabelCard className={styles.card} text='TypeScript' id='2' />
                <LabelCard className={styles.card} text='React Router' id='3' />
                <LabelCard className={styles.card} text='Sass' id='4' />
                <LabelCard className={styles.card} text='Cypress' id='5' />
                <LabelCard className={styles.card} text='Yelp API' id='6' />
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
              <img className={styles['project-image']} src={Img} alt='screenshot of the Lynns List application' />
            }
          </div>
          <div className={styles['subheading-container']}>
            <p className={styles['project-subheading']}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            An app for users to explore restaurants in Denver and keep track of what restaurants they have been to, want to visit, or create a  personalized list. This application utilizes the Yelp Fushion API to bring the latest information on restaurants in Denver.
          </p>
          <br />
          <p className={styles.body}>
            This was a group project completed during my time at Turing School of Software and Design. Built alongside 3 other students over the course of one week.
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
              <li>Learn and implement TypeScript for the first time</li>
              <li>Gain experience with React</li>
              <li>Accessibility audit with Lighthouse</li>
              <li>Gain experience working on a team of developers</li>
              <li>Project managament from ideation to execution</li>
            </ul>
          </p>
          {/* <p className={styles.body}>
            The main goal of this project was to learn and implement a new technology on my own. I used TypeScript for the first time, learning as I went. This was also a great experience in working on a team of developers and following agile project management from ideation to execution.
          </p>
          <br />
          <p className={styles.body}>
            This project helped me build my skills in React and TypeScript, as well as helping me learn how to learn. Going through the process of implementing a technology I had never used helped me recognize what type of learning process works well for me. I do well when I can dive into documentation, look at examples, and then learn through trial and error and asking a lot of questions. I also gained self-awareness for when I am struggling productively and when it’s time to ask for help.
          </p> */}
        </div>
      </div>
    </Layout>
  )
}