import React from 'react';
import styles from './ImageLogo.module.css';
import logoImage from '../../../assets/logo_otrd2.svg'; // Importe a imagem aqui

const ImageLogo: React.FC = () => {
  return (
    <div className={styles.ImageContainer}>
      <img src={logoImage} alt="Logo" className={styles.LogoImage} />
    </div>
  );
};

export default ImageLogo;
