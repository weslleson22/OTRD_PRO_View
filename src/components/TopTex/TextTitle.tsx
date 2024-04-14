// TextTitle.tsx
import React, { FC } from 'react';

import StylesComponents from '../../components/styles/StylesComponents.module.css';

interface TextProps {
  text?: string;
}

const TextTitle: FC<TextProps> = ({ text = 'Register your Organization' }) => {
  return (
    <div className={StylesComponents.TextTitle}>
      {text}
    </div>
  );
};

export default TextTitle;
