import React from 'react';
import styles from './../styles/Card.module.css';

interface InputFieldProps {
  text?: string;
}

const defaultProps: InputFieldProps = {
  text: 'CPF',
};

const InputField: React.FC<InputFieldProps> = ({ text }) => {
  return (
    <div className={styles.Container}>
      <input className={styles.InputCamp} placeholder={text ?? defaultProps.text} />
    </div>
  );
};

export default InputField;
