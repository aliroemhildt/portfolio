import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ResumeButton.module.scss';

export default function ResumeButton() {
  return (
    <NavLink to='/resume.pdf' target='_blank'>
      <button className={styles['resume-button']}>My Resume</button>
    </NavLink>
  )
}