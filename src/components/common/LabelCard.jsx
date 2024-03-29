import React from 'react';
import styles from './LabelCard.module.scss';

export default function LabelCard({ text, id }) {
  return (
    <div className={styles['label-card']} key={id}>
      <p className={styles['label-text']}>{text}</p>
    </div>
  )
}