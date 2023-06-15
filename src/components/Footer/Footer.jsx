import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <img src="logoUrl" alt="Logo" className={styles.logo} />
    <p>2020 Kasa. Tous droits réservés.</p>
  </footer>
);

export default Footer;