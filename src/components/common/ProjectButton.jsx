import React from 'react';
import styles from './ProjectButton.module.scss';

export default function ProjectButton({ text, link }) {
  return (
    <div className={styles['container']}>
      <a href={link} target='_blank'>
        <button className={styles['project-button']}>
          {text}
        </button>
      </a>
    </div>
    
  )
}