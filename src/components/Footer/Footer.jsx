import React from 'react';
import styles from './Footer.module.css';
import Logo from "../../assets/icons/Logo";

const Footer = () => (
    <footer className={styles.footer}>
        <Logo color={'white'}/>
        <p>2020 Kasa. Tous droits réservés.</p>
    </footer>
);

export default Footer;