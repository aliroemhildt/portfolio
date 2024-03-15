import React from 'react';
import Layout from '../layout/Layout';
import ResumeButton from '../common/ResumeButton';
import Tabs from '../common/Tabs';
import styles from './Resume.module.scss';
import layout from '../layout/Layout.module.scss';

export default function Resume() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>My Experience</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['button-container']}>
            <ResumeButton />
          </div>
          <div className={styles['tabs-container']}>
            <Tabs>
              <div tabName='Slalom'>
                <h2>Slalom</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eligendi laborum inventore deserunt, odit voluptate quaerat magnam id eius et dignissimos accusamus sequi ad explicabo dolor placeat dolorem ex consequuntur.</p>
              </div>
              <div tabName='Turing'>
                <h2>Turing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eligendi laborum inventore deserunt, odit voluptate quaerat magnam id eius et dignissimos accusamus sequi ad explicabo dolor placeat dolorem ex consequuntur.</p>
              </div>
              <div tabName='Green Sprouts'>
                <h2>Green Sprouts</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eligendi laborum inventore deserunt, odit voluptate quaerat magnam id eius et dignissimos accusamus sequi ad explicabo dolor placeat dolorem ex consequuntur.</p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}