import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
