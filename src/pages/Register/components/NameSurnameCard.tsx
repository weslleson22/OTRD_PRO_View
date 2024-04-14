import React from 'react';
import styles from './../styles/Card.module.css';

interface NameSurnameCardProps {
  nameText?: string;
  surnameText?: string;
}

const defaultProps: NameSurnameCardProps = {
  nameText: 'Name',
  surnameText: 'Surname',
};

const NameSurnameCard: React.FC<NameSurnameCardProps> = ({ nameText, surnameText }) => {
  return (
    <div className={styles.Container}>
      <input className={styles.Input} placeholder={nameText ?? defaultProps.nameText} />
      <input className={styles.Input} placeholder={surnameText ?? defaultProps.surnameText} />
    </div>
  );
};

export default NameSurnameCard;
