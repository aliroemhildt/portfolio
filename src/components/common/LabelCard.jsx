import React from 'react';
import styles from './LabelCard.module.scss';

export default function LabelCard({ text, key }) {
  return (
    <div className={styles['label-card']} key={key}>
      <p className={styles['label-text']}>{text}</p>
    </div>
  )
}