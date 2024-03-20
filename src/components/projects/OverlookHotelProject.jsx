import React, { useEffect } from 'react';
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
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>Overlook Hotel</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.header}>
            <div className={styles['link-container']}>
              <a href='https://github.com/aliroemhildt/overlook-hotel' target='_blank'>
                App Source Code
              </a>
            </div>
            <div className={styles['tech-stack-container']}>
              <div className={styles['tech-list']}>
                <LabelCard className={styles.card} text='JavaScript' id='1' />
                <LabelCard className={styles.card} text='HTML' id='2' />
                <LabelCard className={styles.card} text='Sass' id='3' />
                <LabelCard className={styles.card} text='Mocha/Chai' id='4' />
                <LabelCard className={styles.card} text='ESLint' id='5' />
                <LabelCard className={styles.card} text='REST' id='6' />
              </div>
            </div>
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            A hotel management app for customers to view their current bookings, bill, and create new bookings
          </p>
          <p className={styles.body}>
            This was a solo project completed during my time at Turing School of Software and Design, completed over the course of one week.
          </p>
         <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Goals
            </p>
          </div>
          <p className={styles.body}>
            The goals of this project were to learn OOP fundamentals with Vanilla JS classes, unit testing and TDD, learning SCSS, accessibility, fetching from a REST API
          </p>
          <div className={styles['image-container']}>
            <img className={styles['project-image']} src={overlookhotelImg} alt='screenshot of the Overlook Hotel application' />
          </div>
        </div>
      </div>
    </Layout>
  )
}