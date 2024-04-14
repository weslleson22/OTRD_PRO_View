// CalendarComponent.tsx

import React from 'react';
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Importe o tema
import 'primereact/resources/primereact.min.css'; // Importe o core CSS

import styles from './CalendarComponent.module.css'; // Importe o seu arquivo module.css

const CalendarComponent: React.FC = () => {
  return (
    <div className={styles.calendarContainer}>
      
      <div>
      
      <Calendar
      
      inline // Exiba o calendário inline
      value={new Date()} // Defina a data inicial
      onChange={(e) => console.log(e.value)} // Ação ao alterar a data
      showIcon // Exiba o ícone do calendário
    />
      </div>
    </div>
  );
};

export default CalendarComponent;
