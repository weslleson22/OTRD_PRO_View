// InputNotas.tsx
import React from 'react';
import StylesComponents from '../../components/styles/StylesComponents.module.css';

interface InputNotasProps {
  text?: string;
}

const InputNotas: React.FC<InputNotasProps> = ({ text }) => {
  const defaultText = '';

  return (
    <div className={StylesComponents.ContainerNotas}>
      <textarea className={StylesComponents.InputNotas} placeholder={text ?? defaultText} />
    </div>
  );
};

export default InputNotas;
