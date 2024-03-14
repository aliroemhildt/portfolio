import React, { useEffect } from 'react';
import ProjectButton from '../common/ProjectButton';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import overlookhotelImg from '../../assets/overlookhotel.png';

export default function OverLookHotelProject() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <div className={styles['page-container']}>
        <h1 className={styles['page-title']}>Overlook Hotel</h1>
        <div className={styles.header}>
          <div className={styles['button-container']}>
            <ProjectButton text='App Source Code' link='https://github.com/aliroemhildt/overlook-hotel ' target='_blank' />
          </div>
          <div className={styles['tech-stack-container']}>
            <div className={styles['tech-list']}>
              <LabelCard className={styles.card} text='JavaScript' />
              <LabelCard className={styles.card} text='HTML' />
              <LabelCard className={styles.card} text='Sass' />
              <LabelCard className={styles.card} text='Mocha/Chai' />
              <LabelCard className={styles.card} text='ESLint' />
              <LabelCard className={styles.card} text='REST' />
            </div>
          </div>
        </div>
        <div className={styles['content-container']}>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Overview
          </p>
          <p className={styles.body}>
            A hotel management app for customers to view their current bookings, bill, and create new bookings
          </p>
          <p className={styles.body}>
            This was a solo project completed during my time at Turing School of Software and Design, completed over the course of one week.
          </p>
          <p className={`${styles['project-subheading']} ${styles.overview}`}>
            Goals
          </p>
          <p className={styles.body}>
            The goals of this project were to learn OOP fundamentals with Vanilla JS classes, unit testing and TDD, learning SCSS, accessibility, fetching from a REST API
          </p>
        </div>
        <div className={styles['image-container']}>
          <img className={styles['project-image']} src={overlookhotelImg} />
        </div>
      </div>
    </Layout>
  )
}