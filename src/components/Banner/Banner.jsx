import React from 'react';
import styles from './Banner.module.css';

const Banner = () => (
  <div className={styles.banner} style={{backgroundImage: 'url(backgroundImageUrl)'}}>
    <h2>Chez vous, partout et ailleurs</h2>
  </div>
);

export default Banner;