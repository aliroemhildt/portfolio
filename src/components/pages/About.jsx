import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import LabelCard from '../common/LabelCard';
import styles from './About.module.scss';
import layout from '../layout/Layout.module.scss';
import headshot from '../../assets/headshot.jpg';
import arrow from '../../assets/arrow.svg'

export default function About() {
  const aboutSection = useRef(null);

  const scrollTo = () => {
    window.scrollTo({ top: aboutSection.current.offsetTop, behavior: 'smooth' })
  }
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={styles['intro-container']}>
          <h1 className={styles.name}>Ali Roemhildt</h1>
          <p className={styles.bio}>
            I'm a <span className={styles.bold}>software engineer</span> with a passion for <span className={styles.bold}>frontend development</span> and creating thoughtful, engaging user experiences
          </p>
          <button className={styles['scroll-button']} onClick={scrollTo}>
            <p className={styles['sub-title']}>get to know me</p>
            <img className={styles.arrow} src={arrow} alt='arrow icon' />
          </button>
        </div>
        <div className={styles['content-container']} ref={aboutSection}>
          <div className={layout['title-container']}>
            <h1 className={layout['page-title']}>My Skills</h1>
          </div>
          <div className={styles['skills-container']}>
            <div className={styles['skills-sub-container']}>
              <div className={styles['top-container']}>
                <div className={styles['label-cards']}>
                  <LabelCard text='JavaScript' />
                  <LabelCard text='TypeScript' />
                  <LabelCard text='React' />
                  <LabelCard text='HTML' />
                  <LabelCard text='CSS' />
                  <LabelCard text='GraphQL' />
                  <LabelCard text='Git' />
                  <LabelCard text='REST' />
                  <LabelCard text='Accessibility' />
                  <LabelCard text='Testing' />
                </div>
              </div>
              <div className={styles['bottom-container']}>
                <img className={styles.image} src={headshot} alt='headshot of Ali Roemhildt' />
                <div className={styles['skills-text']}>
                  <p className={styles['intro-text']}>
                    Hello! I’m Ali.
                  </p>
                  <br />
                  <p className={styles['body-text']}>
                    I’m a software engineer with a passion for frontend development. After earning a degree in systems engineering and spending some time as a supply chain data analyst, my craving for more creativity led me into the world of software development and I’ve never looked back. Nothing excites me more than being at the crossroads of logical problem solving and designing a beautiful user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={layout['title-container']}>
            <h1 className={layout['page-title']}>My Background</h1>
          </div>
          <div className={styles['background-container']}>
                <p className={styles['body-text']}>
                  My development journey began in 2021 at Turing School of Software and Design, where I spent seven months fully immersed in learning the foundations of frontend development and coding best practices. Most recently, I worked as a fullstack developer in the consulting industry where I gained experience working all across the stack. My projects included things like migrating REST APIs to GraphQL, building a React frontend for an OpenAI-powered chatbot, and leading the quality engineering on a greenfield government portal.
                </p>
                <br />
                <p className={styles['body-text']}>
                  Currently, my focus is back on frontend development and I’m looking for my next opportunity to join a collaborative team where I can contribute to building beautiful, functional, and inclusive digital experiences. In the meantime, I’m spending my time expanding on my React skills, with goals to add Angular, accessibility, and mobile development to my toolbelt. I’m curious, driven, and always looking to learn something new.
                </p>
                <br/>
                <p className={styles['body-text']}>
                  I’m a native Minnesotan currently residing in Denver, Colorado. Outside of work, I enjoy exploring the city and the mountains around me, listening to live music, reading a good book, and picking up new creative hobbies.
                </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}