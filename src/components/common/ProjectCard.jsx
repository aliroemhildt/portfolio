import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProjectCard.module.scss';

export default function ProjectCard({ id, photo, title, description}) {
  return (
    <NavLink to={`./${id}`} className={styles['grid-item']}>
      <div className={`${styles['card-container']} ${styles[id]}`}>
        {/* <img className={styles['project-img']} src={photo} /> */}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </NavLink>
  )
}