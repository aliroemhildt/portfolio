import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className={styles['nav-container']}>
      <NavLink to='/' reloadDocument>
        <img className={styles.logo} src={logo} alt='logo' />
      </NavLink>
      <ul className={styles['nav-list']}>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? `${styles.active}` : ''}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/work'
            className={({isActive}) => isActive ? `${styles.active}` : ''}
          >
              Work
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/resume'
            className={({ isActive }) => isActive ? `${styles.active}` : ''}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/contact'
            className={({ isActive }) => isActive ? `${styles.active}` : ''}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}