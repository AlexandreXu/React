import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../Accordion/Accordion';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <Header />

            <div className={styles.backgroundImage}>
                {/* Cette div sera remplie avec l'image de fond définie dans le CSS */}
            </div>

            <Accordion />

            <Footer />
        </div>
    );
};

export default About;
