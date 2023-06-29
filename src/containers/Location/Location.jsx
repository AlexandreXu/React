import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../../data.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";
import ReactStars from "react-rating-stars-component";
import Collapse from "../../components/Collapse/Collapse";

const Location = () => {
    const { id } = useParams();
    const [apartment, setApartment] = useState(null);
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        const item = data.find(item => item.id === id);
        setApartment(item);
    }, [id]);

    const nextImage = () => {
        setCurrentImg((prev) => prev === apartment.pictures.length - 1 ? 0 : prev + 1);
    };

    const prevImage = () => {
        setCurrentImg((prev) => prev === 0 ? apartment.pictures.length - 1 : prev - 1);
    };

    return (
        <>
            <Header/>
            <div className={styles.container}>
                {apartment && (
                    <>
                        <div className={styles.imageContainer}>
                            <button className={styles.buttonPrev} onClick={prevImage}>&#10094;</button>
                            <img className={styles.apartmentImage} src={apartment.pictures[currentImg]} alt="apartment"/>
                            <button className={styles.buttonNext} onClick={nextImage}>&#10095;</button>
                        </div>
                        <div className={styles.titleBlock}>
                            <h1>{apartment.title}</h1>
                            <h2>{apartment.location}</h2>
                        </div>
                        <div className={styles.tags}>
                            {apartment.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                        <div className={styles.hostInfo}>
                            <img className={styles.hostImage} src={apartment.host.picture} alt={apartment.host.name} />
                            <h3 className={styles.hostName}>{apartment.host.name}</h3>
                        </div>
                        <div className={styles.rating}>
                            <ReactStars
                                count={5}
                                value={apartment.rating}
                                size={24}
                                color1={"#E3E3E3"}
                                color2={"#FF6060"}
                                edit={false}
                            />
                        </div>
                        <div className={styles.collapseContainer}>
                            <Collapse item={{title: 'Description', content: apartment.description}}/>
                            <Collapse item={{title: 'Equipements', content: apartment.equipments}}/>
                        </div>
                    </>
                )}
            </div>
            <Footer/>
        </>
    );
};

export default Location;
