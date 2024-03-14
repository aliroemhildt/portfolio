// come back to this 
// use this as a dynamic page for each project with projectData.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import layout from '../layout/Layout.module.scss';
import styles from './Project.module.scss';

export default function Project({ children }) {
  const { id } = useParams();

  return (
    <Layout>
    </Layout>
  )
}