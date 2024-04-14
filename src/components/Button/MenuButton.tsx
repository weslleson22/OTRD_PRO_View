import React, { useState } from 'react';
import { TabMenu } from 'primereact/tabmenu';

const MenuBottom: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Defina o índice ativo inicial aqui

  const items = [
    { label: 'Home', icon: '' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' }
  ];

  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 999 }}>
      <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
    </div>
  );
}

export default MenuBottom;
