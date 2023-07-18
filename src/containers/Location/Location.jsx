import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import data from '../../data.json';
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";
import Collapse from "../../components/Collapse/Collapse";
import Stars from "../../assets/icons/Stars";

const Location = () => {
    const {id} = useParams();
    const [apartment, setApartment] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const item = data.find(item => item.id === id);
        setApartment(item);
    }, [id]);

    const handleNext = () => {
        setCurrentImage(prev => (prev + 1) % apartment.pictures.length);
    }

    const handlePrevious = () => {
        setCurrentImage(prev => (prev - 1 + apartment.pictures.length) % apartment.pictures.length);
    }

    const displayStars = (rating) => {
        const arrayRatings = [];
        for (let i = 0; i < 5; i++) {
            arrayRatings.push(i + 1 <= rating ? <Stars className={styles.redStar}/> : <Stars className={styles.grayStar}/> )
        }
        return arrayRatings;
    }

    return (
        <>
            <div className={styles.container}>
                {apartment && (
                    <>
                        <div className={styles.imageContainer}>
                            <img className={styles.apartmentImage} src={apartment.pictures[currentImage]} alt="apartment"/>
                            {apartment.pictures.length > 1 && (
                                <>
                                    <button className={styles.previousButton} onClick={handlePrevious}><IoIosArrowBack /></button>
                                    <button className={styles.nextButton} onClick={handleNext}><IoIosArrowForward /></button>
                                    <p className={styles.imageNumber}>
                                        {currentImage + 1}/{apartment.pictures.length}
                                    </p>
                                </>
                            )}
                        </div>
                        <div className={styles.titleBlock}>
                            <h1>{apartment.title}</h1>
                            <div className={styles.hostInfo}>
                                <img src={apartment.host.picture} alt={apartment.host.name}/>
                                <h3>{apartment.host.name}</h3>
                            </div>
                        </div>
                        <h2>{apartment.location}</h2>
                        <div className={styles.tagsAndRating}>
                            <div className={styles.tags}>
                                {apartment.tags.map((tag, index) => (
                                    <span key={index} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div>
                                {displayStars(apartment.rating)}
                            </div>
                        </div>
                        <div className={styles.descriptionAndEquipments}>
                            <Collapse item={{title: 'Description', content: apartment.description}}/>
                            <Collapse item={{title: 'Equipements', content: apartment.equipments}}/>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Location;
