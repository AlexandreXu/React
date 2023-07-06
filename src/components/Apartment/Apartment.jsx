import React from 'react';
import styles from './Apartment.module.css';
import { useNavigate } from "react-router-dom";

const Apartment = ({ item }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/location/${item.id}`);
  }

  return (
    <div onClick={handleClick} 
         className={styles.apartment} 
         style={{backgroundImage: `url(${item.cover})`}}
    >
      <h2 className={styles.title}>{item.title}</h2>
    </div>
  );
}

export default Apartment;
