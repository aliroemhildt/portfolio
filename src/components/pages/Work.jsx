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
              />
              <ProjectCard
                id='lynnslist'
                title={`Lynn's List`}
                description={'Discovering Denver Restaurants'}
              />
              <ProjectCard
                id='rancidtomatillos'

                title={'Rancid Tomatillos'}
                description={'Movie Reviews & Ratings'}
              />
              <ProjectCard
                id='overlookhotel'
                title={'Overlook Hotel'}
                description={'Hotel Management with Vanilla JS'}
              />
          </div>
      </div>
    </Layout>
  )
}