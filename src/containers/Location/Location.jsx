import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";
import Accordion from "../Accordion/Accordion";
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
                        <div className={styles.titleBlock}>
                            <h1>{apartment.title}</h1>
                            <h2>{apartment.location}</h2>
                            <div className={styles.hostInfo}>
                                <h3>{apartment.host.name}</h3>
                                <ReactStars
                                    count={5}
                                    value={apartment.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <Accordion title="Description">
                                <p>{apartment.description}</p>
                            </Accordion>
                            <Accordion title="Équipement">
                            </Accordion>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};
export default Location;
