import React from 'react';
import Layout from '../layout/Layout';
import LabelCard from '../common/LabelCard';
import styles from './About.module.scss';
import layout from '../layout/Layout.module.scss';
import headshot from '../../assets/headshot.jpg';

export default function About() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>My Skills</h1>
        <div className={styles['content-container']}>
          <div className={styles['photo-container']}>
            <img className={styles.photo} src={headshot} alt='headshot of Ali Roemhildt'/>
          </div>
          <div className={styles['text-container']}>
            <div className={styles['label-card-container']}>
              <LabelCard text='JavaScript' />
              <LabelCard text='TypeScript' />
              <LabelCard text='React' />
              <LabelCard text='HTML' />
              <LabelCard text='CSS' />
              <LabelCard text='GraphQL' />
              <LabelCard text='REST' />
              <LabelCard text='Accessibility' />
              <LabelCard text='Testing' />
              <LabelCard text='Git' />
            </div>
            <p className={styles['body-text']}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus officia ut suscipit neque eius accusamus a voluptatibus molestiae cumque minus, ab debitis cupiditate repudiandae iure unde enim modi, eum voluptas?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}