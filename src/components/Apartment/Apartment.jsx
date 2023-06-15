import React from 'react';
import styles from './Apartment.module.css';
import { useNavigate } from "react-router-dom";

const Apartment = ({ item }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/location/${item.id}`);
  }

  return (
    <div onClick={handleClick} className={styles.apartment}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default Apartment;
