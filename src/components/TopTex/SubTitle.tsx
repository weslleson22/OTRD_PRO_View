// SubTitle.tsx
import React, { FC } from 'react';
import StylesComponents from '../../components/styles/StylesComponents.module.css';

interface SubTitleProps {
  text?: string;
}

const SubTitle: FC<SubTitleProps> = ({ text = 'Quick, simple, and secure process.' }) => {
  return (
    <div className={StylesComponents.SubTitle}>
      {text}
    </div>
  );
};

export default SubTitle;
