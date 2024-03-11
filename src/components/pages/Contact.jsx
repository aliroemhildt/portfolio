import React from 'react';
import Layout from '../layout/Layout';
import styles from './Contact.module.scss';
import layout from '../layout/Layout.module.scss';

export default function Contact() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1>Get in Touch</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['text-container']}>
            <p className={styles['body-text']}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit non consequatur minima aliquam temporibus!
            </p>
            <div className={styles['link-container']}>
              <p className={styles['link-label']}>Email:</p>
              {/* replace with email link */}
              <p className={styles['text']}>
                <a href='mailto:aliroemhildt@gmail.com'>
                  aliroemhildt@gmail.com
                </a>
              </p>
            </div>
            <div className={styles['link-container']}>
              <p className={styles['link-label']}>On the Internet:</p>
              {/* replace with links */}
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
    </Layout>
  )
}