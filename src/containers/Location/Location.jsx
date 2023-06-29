import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import data from '../../data.json';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Location.module.css";
import ReactStars from "react-rating-stars-component";
import Collapse from "../../components/Collapse/Collapse";

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

    return (
        <>
            <Header/>
            <div className={styles.container}>
                {apartment && (
                    <>
                        <div className={styles.imageContainer}>
                            <img className={styles.apartmentImage} src={apartment.pictures[currentImage]} alt="apartment"/>
                            <button className={styles.previousButton} onClick={handlePrevious}>Previous</button>
                            <button className={styles.nextButton} onClick={handleNext}>Next</button>
                        </div>
                        <div className={styles.titleBlock}>
                            <div>
                                <h1>{apartment.title}</h1>
                                <h2>{apartment.location}</h2>
                                <div className={styles.tags}>
                                    {apartment.tags.map((tag, index) => (
                                        <span key={index} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.hostInfo}>
                                <img src={apartment.host.picture} alt={apartment.host.name}/>
                                <h3>{apartment.host.name}</h3>
                                <ReactStars
                                    count={5}
                                    value={apartment.rating}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div className={styles.descriptionAndEquipments}>
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
