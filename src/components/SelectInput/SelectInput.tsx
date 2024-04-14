// SelectField.tsx
import React from 'react';
import styles from './SelectField.module.css';

interface SelectFieldProps {
  options: string[]; // Array de opções para o campo de seleção
}

const SelectField: React.FC<SelectFieldProps> = ({ options }) => {
  return (
    <div className={styles.SelectContainer}>
      <select className={styles.Select}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
