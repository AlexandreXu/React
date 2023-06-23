import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";
import ReactStars from "react-rating-stars-component";

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
                        <img className={styles.apartmentImage} src={apartment.picture} alt="apartment" />
                        <h1>{apartment.title}</h1>
                        <p>{apartment.description}</p>
                        <h2>{apartment.host.name}</h2>
                        <img className={styles.hostImage} src={apartment.host.picture} alt="host" />
                        <ReactStars
                            count={5}
                            value={apartment.rating} // Assurez-vous que la propriété "rating" existe dans vos données
                            size={24}
                            activeColor="#ffd700"
                        />
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Location;
