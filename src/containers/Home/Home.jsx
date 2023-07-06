import React from 'react';
import data from '../../data.json';
import Apartment from '../../components/Apartment/Apartment';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

const Home = () => {
  const lastSixApartments = data.slice(Math.max(data.length - 6, 0));

  return (
    <>

      <Banner />

      <div className={styles.container}>
        {lastSixApartments.map((apartment) => (
          <Apartment key={apartment.id} item={apartment}/>
        ))}
      </div>
    </>
  );
}

export default Home;
