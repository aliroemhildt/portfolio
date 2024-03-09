import React from 'react';
import styles from './LabelCard.module.scss';

export default function LabelCard({ text }) {
  return (
    <div className={styles['label-card']}>
      <p className={styles['label-text']}>{text}</p>
    </div>
  )
}