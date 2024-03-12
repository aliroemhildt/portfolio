import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import ProjectCard from '../common/ProjectCard';
// import { scrollTo } from '../../utils';
import arrow from '../../assets/arrow.svg'
import photo from '../../assets/photo2.jpg'; //replace
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
              photo={photo}
              title={'Portfolio'}
              description={'How I made this portfolio website'}
            />
            <ProjectCard
              id='charttoppers'
              photo={photo}
              title={'Chart Toppers'}
              description={'A billboard top 100 quiz'}
            />
            <ProjectCard
              id='tomatillos'
              photo={photo}
              title={'Rancid Tomatillos'}
              description={'Reviewing movies with React'}
            />
            <ProjectCard
              id='overlook'
              photo={photo}
              title={'Overlook Hotel'}
              description={'Hotel Management with vanilla JS'}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}