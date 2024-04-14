import React, { FC, ReactNode } from 'react';
import './CardsForms.css'; // Importa o arquivo CSS

interface CardsFormsProps {
  children?: ReactNode;
}

const CardsForms: FC<CardsFormsProps> = ({ children }) => {
  return (
    <div className="CardsForms">
      {children}
    </div>
  );
};

export default CardsForms;
