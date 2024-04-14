import React, { FC } from 'react';
import './DescriptionCard.css'; // Importa o arquivo CSS

interface DescriptionCardProps {
  text?: string; // Renomeia para 'text'
}

const DescriptionCard: FC<DescriptionCardProps> = ({ text = 'Organization Name *' }) => { // Renomeia para 'text'
  return (
    <div className="DescriptionCard"> {/* Adiciona a classe CSS 'text' */}
      {text}
    </div>
  );
};

export default DescriptionCard;
