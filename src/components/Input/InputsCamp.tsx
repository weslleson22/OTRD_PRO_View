// InputsCamp.tsx
import React from 'react';
import './InputsCampStyles.css';

interface InputsCampProps {
  text?: string;
}

const InputsCamp: React.FC<InputsCampProps> = (props) => {
  return (
    <div className="input-container">
      <input className="input" placeholder={props.text ?? 'ABC Company'} />
    </div>
  );
};

export default InputsCamp;
