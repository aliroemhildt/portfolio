import React from 'react';
import { NavLink } from 'react-router-dom';
import LabelCard from './LabelCard';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ id, title, description, labels }) {
  let labelsList = labels.map((label, index) => {
    return <LabelCard text={label} id={index} key={index}/>
  })

  return (
    <NavLink to={`./${id}`} className={styles['grid-item']}>
      <div className={`${styles['card-container']} ${styles[id]}`} key={id}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles['label-container']}>
          {labelsList}
        </div>
      </div>
    </NavLink>
  )
}