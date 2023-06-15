import React, { useEffect, useState } from 'react';
import data from '../../data.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './ApartmentPage.module.css';

const ApartmentPage = ({ match }) => {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const apt = data.find((a) => a.id === match.params.id);
    setApartment(apt);
  }, [match.params.id]);

  return (
    <>
      <Header />
      {apartment && (
        <div className={styles.apartmentPage}>
          <img src={apartment.cover} alt={apartment.title} />
          <h1>{apartment.title}</h1>
          <p>{apartment.description}</p>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ApartmentPage;
