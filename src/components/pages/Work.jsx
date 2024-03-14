import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import ProjectCard from '../common/ProjectCard';
// import arrow from '../../assets/arrow.svg'
// import portfolioImg from '../../assets/portfolio.png';
import charttoppersImg from '../../assets/charttoppers.png';
import lynnslistImg from '../../assets/lynnslist.png';
import rancidtomatillosImg from '../../assets/rancidtomatillos.png';
import overlookhotelImg from '../../assets/overlookhotel.png';
import styles from './Work.module.scss'
import layout from '../layout/Layout.module.scss';

export default function Work() {

  // const projectSection = useRef(null);

  // const scrollTo = () => {
  //   window.scrollTo({ top: projectSection.current.offsetTop, behavior: 'smooth'})
  // }

  return (
    <Layout>
      <div className={layout['page-container']}>
          <h1 className={layout['page-title']}>Projects</h1>
          <div className={styles['content-container']}>
            <div className={styles['card-container']}>
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
                description={'A restaurant review app made with React'}
              />
              <ProjectCard
                id='rancidtomatillos'
                photo={rancidtomatillosImg}
                title={'Rancid Tomatillos'}
                description={'A multi-page movie review app made with React'}
              />
              <ProjectCard
                id='overlookhotel'
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