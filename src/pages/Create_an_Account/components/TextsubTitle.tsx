import React, { FC } from 'react';
import './TextsubTitle.css'; // Importe o arquivo CSS aqui

interface TextsubTitleProps {
  TextsubTitle?: string;
}

const defaultProps: TextsubTitleProps = {
  TextsubTitle: 'Quick, simple, and secure process.',
};

const TextsubTitle: FC<TextsubTitleProps> = ({ TextsubTitle }) => {
  return (
    <div className="TextsubTitle">
      {TextsubTitle ?? defaultProps.TextsubTitle}
    </div>
  );
};

export default TextsubTitle;
