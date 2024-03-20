import React, { useRef } from 'react';
import Layout from '../layout/Layout';
import ProjectCard from '../common/ProjectCard';
import styles from './Work.module.scss'
import layout from '../layout/Layout.module.scss';

export default function Work() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>Projects</h1>
        </div>
          <div className={styles['content-container']}>
              <ProjectCard
                id='charttoppers'
                // key='charttoppers'
                title={'Chart Toppers'}
                description={'A Billboard Top 100 Music Quiz'}
                labels={['React', 'TypeScript', 'Express']}
              />
              <ProjectCard
                id='lynnslist'
                // key='lynnslist'
                title={`Lynn's List`}
                description={'Discovering Denver Restaurants'}
                labels={['React', 'TypeScript', 'Yelp API']}
              />
              <ProjectCard
                id='rancidtomatillos'
                // key='rancidtomatillos'
                title={'Rancid Tomatillos'}
                description={'Movie Reviews & Ratings'}
                labels={['React', 'Clean Data', 'Express']}
              />
              <ProjectCard
                id='overlookhotel'
                // key='overlookhotel'
                title={'Overlook Hotel'}
                description={'Hotel Management and Booking'}
                labels={['Vanilla JS', 'Sass', 'OOP']}
              />
          </div>
      </div>
    </Layout>
  )
}