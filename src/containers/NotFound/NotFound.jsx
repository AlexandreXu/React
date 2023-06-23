import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.errorCode}>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/home" className={styles.backHomeLink}>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    )
}

export default NotFound;
