import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import ProjectCard from '../common/ProjectCard';
import styles from './Work.module.scss'
import layout from '../layout/Layout.module.scss';

export default function Work() {
  return (
    <Layout>
      <div className={layout['page-container']}>
          <h1 className={layout['page-title']}>Projects</h1>
          <div className={styles['content-container']}>
              <ProjectCard
                id='charttoppers'
                title={'Chart Toppers'}
                description={'A Billboard Top 100 Music Quiz'}
                labels={['React', 'TypeScript', 'Express']}
              />
              <ProjectCard
                id='lynnslist'
                title={`Lynn's List`}
                description={'Discovering Denver Restaurants'}
                labels={['React', 'TypeScript', 'Yelp API']}
              />
              <ProjectCard
                id='rancidtomatillos'
                title={'Rancid Tomatillos'}
                description={'Movie Reviews & Ratings'}
                labels={['React', 'Data Cleaning', 'Express']}
              />
              <ProjectCard
                id='overlookhotel'
                title={'Overlook Hotel'}
                description={'Hotel Management and Booking'}
                labels={['Vanilla JS', 'Sass', 'OOP']}
              />
          </div>
      </div>
    </Layout>
  )
}