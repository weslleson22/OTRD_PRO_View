import React, { ReactNode } from 'react';
import styles from './../styles/Card.module.css';

interface CardProps {
  children?: ReactNode; // Tornando 'children' opcional
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={styles.Card}>
      {children}
    </div>
  );
};

export default Card;
