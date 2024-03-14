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
            
              <ProjectCard
                id='charttoppers'
                photo={charttoppersImg}
                title={'Chart Toppers'}
                description={'A Billboard Top 100 Music Quiz'}
              />
              <ProjectCard
                id='lynnslist'
                photo={lynnslistImg}
                title={`Lynn's List`}
                description={'Discovering Denver Restaurants'}
              />
              <ProjectCard
                id='rancidtomatillos'
                photo={rancidtomatillosImg}
                title={'Rancid Tomatillos'}
                description={'Movie Reviews & Ratings'}
              />
              <ProjectCard
                id='overlookhotel'
                photo={overlookhotelImg}
                title={'Overlook Hotel'}
                description={'Hotel Management with Vanilla JS'}
              />
           
          </div>
      </div>
    </Layout>
  )
}