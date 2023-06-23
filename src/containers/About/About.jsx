import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../Accordion/Accordion';
import styles from './About.module.css';

const About = () => {
  const sections = [
    { title: "Fiabilité", content: "Contenu fiabilité..." },
    { title: "Respect", content: "Contenu respect..." },
    { title: "Service", content: "Contenu service..." },
    { title: "Sécurité", content: "Contenu sécurité..." }
  ];

  return (
    <div className={styles.about}>
      <Header />

      <div className={styles.imageContainer}>
        {/* Mettez votre image de background ici */}
      </div>

      {sections.map((section, index) => (
        <Accordion key={index} title={section.title} content={section.content} />
      ))}

      <Footer />
    </div>
  );
};

export default About;
