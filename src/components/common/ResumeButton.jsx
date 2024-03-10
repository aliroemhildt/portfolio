import React from 'react';
import styles from './ResumeButton.module.scss';

export default function ResumeButton() {
  // function to open file in new tab

  return (
    <button className={styles['resume-button']}>
      My Resume
    </button>
  )
}