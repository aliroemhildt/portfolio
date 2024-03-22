import React, { useEffect, useState } from 'react';
import LabelCard from '../common/LabelCard';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './ProjectStyles.module.scss';
import Img from '../../assets/overlook-hotel.jpg';
import ImgSmall from '../../assets/overlookhotel-small.png';

export default function OverLookHotelProject() {
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
          <div className={styles['image-container']}>
            {
              !imageLoaded &&
              <img className={styles['project-image']} src={ImgSmall} />
            }
            {
              imageLoaded &&
              <img className={styles['project-image']} src={Img} alt='screenshot of the Overlook Hotel application' />
            }
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Overview
            </p>
          </div>
          <p className={styles.body}>
            A hotel management tool for customers to create and view their bookings. The app includes a login page, a dashboard for a user's bookings and total bill, and a booking page to explore available rooms.
          </p>
          <br />
          <p className={styles.body}>
            This was a solo project completed during my time at Turing School of Software and Design, completed over the course of one week.
          </p>
          <br />
          <p className={styles.body}>
            Check out the source code for a full walk through and to try out this app yourself.
          </p>
         <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Goals
            </p>
          </div>
          <p className={styles.body}>
            <ul className={styles.goals}>
              <li>use OOP to drive code design</li>
              <li>test driven development</li>
              <li>error handling</li>
              <li>styling with Sass</li>
              <li>fetching from and posting to a REST API</li>
            </ul>
          </p>
          {/* <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Object Oriented Programming
            </p>
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Test Driven Development
            </p>
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Error Handling
            </p>
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Styling with Sass
            </p>
          </div>
          <div className={styles['subheading-container']}>
            <p className={`${styles['project-subheading']} ${styles.overview}`}>
              Fetch API
            </p>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}