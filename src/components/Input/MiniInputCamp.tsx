import React from 'react';
import './MiniInputCamp.css'; // Importe o arquivo CSS

interface MiniInputCampProps {
  description?: string; // Propriedade para a descrição do input
  inline?: boolean; // Propriedade para definir se os inputs devem ficar em linha
}

const MiniInputCamp: React.FC<MiniInputCampProps> = ({ description, inline }) => {
  return (
    <div className={`MiniInputCampContainer${inline ? ' inline' : ''}`}>
      {description && <div className="MiniInputCampDescription">{description}</div>}
      <input className={`MiniInputCamp${inline ? ' inline' : ''}`} />
    </div>
  );
};

export default MiniInputCamp;
