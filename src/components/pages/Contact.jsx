import React from 'react';
import Layout from '../layout/Layout';
import styles from './Contact.module.scss';
import layout from '../layout/Layout.module.scss';

export default function Contact() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <h1 className={layout['page-title']}>Get in Touch</h1>
        <div className={styles['content-container']}>
          <div className={styles['text-container']}>
            <p className={styles['body-text']}>
              The best way to reach me is by email, my inbox is always open!
            </p>
            <div className={styles['link-container']}>
              <div className={styles['sub-container']}>
                <p className={styles['link-label']}>Email:</p>
                <p className={styles['text']}>
                  <a href='mailto:aliroemhildt@gmail.com'>
                    aliroemhildt@gmail.com
                  </a>
                </p>
              </div>
              <div className={styles['sub-container']}>
                <p className={styles['link-label']}>On the Internet:</p>
                <p className={styles['text']}>
                  <a href='https://www.linkedin.com/in/aliroemhildt' target='_blank'>
                    LinkedIn
                  </a>
                </p>
                <span className={styles['text']}>/</span>
                <p className={styles['text']}>
                  <a href='https://github.com/aliroemhildt' target='_blank'>
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}