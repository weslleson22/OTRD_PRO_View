import React from 'react';
import styles from './WelButton.module.css';

interface WelButtonProps {
  label?: string;
}

const defaultProps: WelButtonProps = {
  label: 'Login',
};

const WelButton: React.FC<WelButtonProps> = ({ label }) => {
  return (
    <button className={styles.Button}>
      {label ?? defaultProps.label}
    </button>
  );
};

export default WelButton;
