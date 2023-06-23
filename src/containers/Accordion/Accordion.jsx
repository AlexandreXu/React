import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }

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
        <div className={styles.accordion}>
            {data.map((item, i) => (
                <div className={styles.item} onClick={() => toggle(i)} key={i}>
                    <div className={selected === i ? styles.titleSelected : styles.title}>{item.title}</div>
                    <div className={selected === i ? styles.contentShow : styles.content}>{item.content}</div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
