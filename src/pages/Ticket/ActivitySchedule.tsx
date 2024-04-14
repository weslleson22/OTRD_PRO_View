//Agendas das atividade 

import React from "react";
import TextTitle from "../../components/TopTex/TextTitle";
import SubTitle from "../../components/TopTex/SubTitle";
import InfoCard from "../../components/TopTex/InforCard";
import DescriptionCard from "../../components/RegistrationsForm/DescriptionCard";
import SelectField from "../../components/SelectInput/SelectInput";
import CalendarComponent from "./components/CalendarComponent";
import InputNotas from "../../components/Input/InputNotas";
import { Link } from "react-router-dom";

import StylesComponents from '../../components/styles/StylesComponents.module.css';
import ButtonForms from "../../components/Button/ButtonForms";

function ActivitySchedule(){
    const options = ['Pós-Falha', 'Preventiva'];
    const options_trecho = ['São Luis - Bacabeira', 'Bacabeira - Entroncamento'];
    return(
        <div>
            <TextTitle text="Activity Schedule"/>
            <SubTitle text="Quick, simple, and secure process."/>
            <InfoCard text="Ticket#20243456"></InfoCard>

            <DescriptionCard text="Nome Cabo"></DescriptionCard>
            
            
            <SelectField options={options_trecho}/>
            
            <DescriptionCard text="Tipo de Manuteção"></DescriptionCard> 
            <SelectField options={options}/>
           
           
            <DescriptionCard text="Agendamento"></DescriptionCard>
            <CalendarComponent></CalendarComponent>

            
            <DescriptionCard text="Lembrete"></DescriptionCard> 
            
            <DescriptionCard text="Convidados"></DescriptionCard> 

            
            <DescriptionCard text="Notas"></DescriptionCard> 
            <InputNotas></InputNotas>

            
        <div className={StylesComponents.ButtonFormsContainer}>
        <Link to="/">
          <ButtonForms></ButtonForms>
        </Link>
        </div>
        </div>
    )
}

export default ActivitySchedule;