import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";

const Location = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);

    useEffect(() => {
        const item = data.find(item => item.id === id);
        setApartment(item);
    }, [id]);

    return (
        <>
            <Header />
            <div className={styles.container}>
                {apartment && (
                    <>
                        <img src={apartment.picture} alt="apartment" />
                        <h1>{apartment.title}</h1>
                        <p>{apartment.description}</p>
                        <h2>{apartment.host.name}</h2>
                        <img src={apartment.host.picture} alt="host" />
                        {/* Remplacez "placeholder-rating" par la logique de rendu de votre note */}
                        <p>Rating: placeholder-rating</p>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Location;
