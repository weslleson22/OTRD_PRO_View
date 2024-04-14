import React from "react";
import TextTitle from "../../components/TopTex/TextTitle";
import SubTitle from "../../components/TopTex/SubTitle";
import InfoCard from "../../components/TopTex/InforCard";
import InputsCamp from "../../components/Input/InputsCamp";
import DescriptionCard from "../../components/RegistrationsForm/DescriptionCard";
import ButtonForms from "../../components/Button/ButtonForms";
import StylesComponents from '../../components/styles/StylesComponents.module.css';
import { Link } from "react-router-dom";
import FormsTicket from "./components/FormsTicket";

import { Tag } from 'primereact/tag';
        

function Ticket (){
    return(

        <div>
            <TextTitle text="Ticket Information"></TextTitle>
            <SubTitle text="Quick, Simple, and secure process."></SubTitle>
            <InfoCard text="Ticket #1234"></InfoCard>
            <DescriptionCard text="Nome do Cabo"></DescriptionCard>
            <InputsCamp text="Backbone SP-RJ"></InputsCamp>
            
            <DescriptionCard text="Tipo de Manutenção"></DescriptionCard>
            <InputsCamp text="Pós-Falha ou Preventiva"></InputsCamp>
            
            <DescriptionCard text="Criado Por:"></DescriptionCard>
            <InputsCamp text="Yan Tavares"></InputsCamp>

            <InfoCard text="Ticket Status"></InfoCard>
            <DescriptionCard text="Estado do Chamado"></DescriptionCard>
            <InputsCamp text="Novo/Aberto/Fechado"></InputsCamp>
            
            <FormsTicket
                label1="Idade"
                placeholder1="8 horas"
                label2="Criado"
                placeholder2="29/03/2024 22:43"
                />

            
            <InfoCard text="Acordo de nivel de Serviço (SLA)"></InfoCard>

            
            <FormsTicket
                label1="Recuperação"
                placeholder1="8 horas"
                label2="Criado"
                placeholder2="-10 d 17h 31m"
                />
            <DescriptionCard text="Criticidade"></DescriptionCard>
            <InputsCamp text="Muito Baixo"></InputsCamp>
            <InfoCard text="Problema (Evento)"></InfoCard>

            <FormsTicket
                label1="Evento"
                placeholder1="3"
                label2="Distância"
                placeholder2="20 km"
                />
            
            <FormsTicket
                label1="Perda"
                placeholder1="1.2 dbm"
                label2="Refletância"
                placeholder2="-0,41"
                />

            <InfoCard text="Evento do Mapa"></InfoCard>
           
            <InfoCard text="Solução"></InfoCard>
            <DescriptionCard text="Tags:"></DescriptionCard>
            
            <div className={StylesComponents.card}>
                <Tag value="Agendado"></Tag>
                <Tag severity="success" value="Resolvido"></Tag>
                <Tag severity="info" value="Aviso"></Tag>
                <Tag severity="warning" value="Atenuação"></Tag>
                <Tag severity="danger" value="Rompimento"></Tag>
            
        </div> 
        

            <InfoCard text="Notas:"></InfoCard>

            <InfoCard text="Agendar Teste de Verificação"></InfoCard>
        
            <div className={StylesComponents.ButtonFormsContainer}>
                <Link to="/Activity-Schedule">
                <ButtonForms></ButtonForms>
                </Link>
           </div>


        
        </div>
    )
}

export default Ticket;

