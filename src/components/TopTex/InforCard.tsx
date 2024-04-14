// InfoCard.tsx
import React from 'react';
import StylesComponents from '../../components/styles/StylesComponents.module.css';

interface InfoCardProps {
  text?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text = 'Personal Information' }) => {
  return (
    <div className={StylesComponents.InforCard}>
      {text}
    </div>
  );
};

export default InfoCard;
