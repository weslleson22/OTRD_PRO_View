// ButtonForms.tsx

import React from 'react';
import styles from './../styles/StylesComponents.module.css'; // Importa o arquivo de estilo de módulo

interface ButtonProps {
  label?: string;
}

const ButtonForms: React.FC<ButtonProps> = ({ label = 'Submit' }) => {
  return (
    <button className={styles.ButtonForms}> {/* Usa a classe do módulo CSS */}
      {label}
    </button>
  );
};

export default ButtonForms;
