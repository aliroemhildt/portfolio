import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.svg';
import logoWhite from '../../assets/logo-white.svg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const hide = (e) => {
    console.log(e.target)
    // setMenuOpen(false);
  }

  useEffect (() => {
    window.addEventListener('click', (e) => hide(e))
  }, [])

  return (
    <nav className={styles['nav-container']}>
      <div className={styles['logo-container']}>
        <NavLink to='/' reloadDocument>
          <img className={`${styles.logo} ${styles.green}`} src={logo} alt='cursive letter A logo' />
        </NavLink>
        <NavLink to='/' reloadDocument>
          <img className={`${styles.logo} ${styles.white}`} src={logoWhite} alt='cursive letter A logo' />
        </NavLink>
      </div>
      <div className={styles['hamburger-menu']} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles['nav-list']} ${menuOpen ? `${styles.open}` : ''}`}>
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