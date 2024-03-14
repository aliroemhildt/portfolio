import React, { useEffect } from 'react';
import ProjectButton from '../common/ProjectButton';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import lynnslistImg from '../../assets/lynnslist.png';

export default function LynnsListProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={styles['page-container']}>
        <h1 className={styles['page-title']}>Lynn's List</h1>
        <div className={styles.header}>
          <div className={styles['button-container']}>
            <ProjectButton text='Deployed App' link='https://lynnslist.netlify.app/' target='_blank' />
            <ProjectButton text='App Source Code' link='https://github.com/aliroemhildt/lynns_list ' target='_blank' />
          </div> 
          <div className={styles['tech-stack-container']}>
            <div className={styles['tech-list']}>
              <LabelCard className={styles.card} text='React' />
              <LabelCard className={styles.card} text='TypeScript' />
              <LabelCard className={styles.card} text='React Router' />
              <LabelCard className={styles.card} text='Sass' />
              <LabelCard className={styles.card} text='Cypress' />
              <LabelCard className={styles.card} text='Mocha/Chai' />
              <LabelCard className={styles.card} text='Yelp API' />
            </div>
          </div>
        </div>
        <div className={styles['content-container']}>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Overview
          </p>
          <p className={styles.body}>
            A multi-page app where users can view restaurants in Denver and save them to personalized lists.
          </p>
          <p className={styles.body}>
            This was a group project completed during my time at Turing School of Software and Design. Built alongside 3 other students over the course of one week.
          </p>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Goals
          </p>
          <p className={styles.body}>
            The main goal of this project was to learn and implement a new technology on my own. I used TypeScript for the first time, learning as I went. This was also a great experience in working on a team of developers and following agile project management from ideation to execution.
          </p>
          <p className={styles.body}>
            This project helped me build my skills in React and TypeScript, as well as helping me learn how to learn. Going through the process of implementing a technology I had never used helped me recognize what type of learning process works well for me. I do well when I can dive into documentation, look at examples, and then learn through trial and error and asking a lot of questions. I also gained self-awareness for when I am struggling productively and when it’s time to ask for help.
          </p>
        </div>
        <div className={styles['image-container']}>
          <img className={styles['project-image']} src={lynnslistImg} />
        </div>
      </div>
    </Layout>
  )
}