import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';
import { PrimeIcons } from 'primereact/api';
import StylesComponents from '../../components/styles/StylesComponents.module.css';

const MenuBottom: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: 'Home', icon: PrimeIcons.PLUS },
    { label: 'Calendar', icon: 'pi pi-calendar' },
    { label: 'Edit', icon: 'pi pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-file' },
    { label: 'Settings', icon: 'pi pi-cog' }
  ];

  return (
    <div className={StylesComponents.bottomMenu2}>
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
    </div>
  );
}

export default MenuBottom;
