import React from 'react';
import StyleComponents from './StylesForms.module.css';

interface FormsTicketProps {
  label1: string;
  placeholder1: string;
  label2: string;
  placeholder2: string;
}

const FormsTicket: React.FC<FormsTicketProps> = ({ label1, placeholder1, label2, placeholder2 }) => {
  return (
    <div className={StyleComponents.formsContainer}>
      <div className={StyleComponents.inputRow}>
        <div className={StyleComponents.inputContainer}>
          <label className={StyleComponents.label}>{label1}</label>
          <input className={StyleComponents.input} placeholder={placeholder1} />
        </div>
        <div className={StyleComponents.inputContainer}>
          <label className={StyleComponents.label}>{label2}</label>
          <input className={StyleComponents.input} placeholder={placeholder2} />
        </div>
      </div>
    </div>
  );
};

export default FormsTicket;
