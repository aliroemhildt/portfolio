import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import ProjectCard from '../common/ProjectCard';
import arrow from '../../assets/arrow.svg'
import portfolioImg from '../../assets/portfolio.png';
import charttoppersImg from '../../assets/charttoppers.png';
import lynnslistImg from '../../assets/lynnslist.png';
import rancidtomatillosImg from '../../assets/rancidtomatillos.png';
import overlookhotelImg from '../../assets/overlookhotel.png';
import styles from './Work.module.scss'
import layout from '../layout/Layout.module.scss';

export default function Work() {

  const projectSection = useRef(null);

  const scrollTo = () => {
    window.scrollTo({ top: projectSection.current.offsetTop, behavior: 'smooth'})
  }

  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={styles['intro-container']}>
          <h1 className={styles.name}>Ali Roemhildt</h1>
          <p className={styles.bio}>I'm a software engineer specializing in frontend development</p>
          <button onClick={scrollTo}>
            <p className={styles['sub-title']}>things I've made</p>
          <img className={styles.arrow} src={arrow} />
          </button>
        </div>
        <div className={styles['project-container']} ref={projectSection}>
          <h1 className={layout['page-title']}>Projects</h1>
          <div className={styles['card-container']}>
            <ProjectCard
              id='portfolio'
              photo={portfolioImg}
              title={'Portfolio'}
              description={'How I made this portfolio website'}
            />
            <ProjectCard
              id='charttoppers'
              photo={charttoppersImg}
              title={'Chart Toppers'}
              description={'A music quiz of Billboard chart toppers over the decades'}
            />
            <ProjectCard 
              id='lynnslist'
              photo={lynnslistImg}
              title={`Lynn's List`}
              description={''}
            />
            <ProjectCard
              id='tomatillos'
              photo={rancidtomatillosImg}
              title={'Rancid Tomatillos'}
              description={'A multi-page movie review app made with React'}
            />
            <ProjectCard
              id='overlook'
              photo={overlookhotelImg}
              title={'Overlook Hotel'}
              description={'A hotel booking app made with Vanilla JS'}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}