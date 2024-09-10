import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterHome from './pages/Register/Register_Home'; // Certifique-se de que o nome do componente esteja em PascalCase
import Register_User_registrarion from './pages/Register/Register_User_Registration';
import Create_an_Acconunt from './pages/Create_an_Account/Create_an_Acconut';
import Ticket from './pages/Ticket/Ticket';
import ActivitySchedule from './pages/Ticket/ActivitySchedule';
import Welcome from './pages/Home/Welcome';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Welcome/>} />
        <Route path="/RegisterHome" element={<RegisterHome />} />
        <Route path="/Register" element={<Register_User_registrarion />} />
        <Route path="/Create-an-Account" element={<Create_an_Acconunt/>}/>
        <Route path="/Ticket" element={<Ticket/>}/>
        <Route path='Activity-Schedule' element={<ActivitySchedule/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
