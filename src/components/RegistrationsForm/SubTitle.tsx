// SubText.tsx
import React, { FC } from 'react';
import './SubTitle.css'
interface SubTextProps {
  text?: string; // Aceita a propriedade "text"
}

const SubText: FC<SubTextProps> = ({ text }) => { // Utiliza a propriedade "text"
  return (
    <div className="SubText">
      {text} {/* Exibe o texto passado como propriedade */}
    </div>
  );
};

export default SubText;
