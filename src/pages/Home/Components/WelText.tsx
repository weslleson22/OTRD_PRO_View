import React from 'react';
import styles from './WelText.module.css';

interface WelTextProps {
  text?: string;
}

const defaultProps: WelTextProps = {
  text: 'Proactive OTDR',
};

const WelText: React.FC<WelTextProps> = ({ text }) => {
  return (
    <div className={styles.Text}>
      {text ?? defaultProps.text}
    </div>
  );
};

export default WelText;
