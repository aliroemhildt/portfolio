import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './Project.module.scss';

export default function Project() {
  const { id } = useParams();

  return (
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>{ id }</h1>
        <p>description...</p>
      </div>
    </Layout>
  )
}