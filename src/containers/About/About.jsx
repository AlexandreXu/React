import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './About.module.css';
import Collapse from "../../components/Collapse/Collapse";

const About = () => {

    const data = [
        {
            title: 'Fiabilité',
            content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
            title: 'Respect',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        },
        {
            title: 'Service',
            content: 'Notre service client a reçu plusieurs prix pour sa réactivité et pour la résolution des problèmes. Il est disponible 24h/24 et 7j/7.'
        },
        {
            title: 'Sécurité',
            content: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
        }
    ];

    return (
        <div className={styles.about}>
            <Header />

            <div className={styles.backgroundImage}>
                {/* Cette div sera remplie avec l'image de fond définie dans le CSS */}
            </div>

            <div className={styles.accordion}>
                {data.map((item, i) => (
                    <Collapse item={item} key={i}/>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default About;
