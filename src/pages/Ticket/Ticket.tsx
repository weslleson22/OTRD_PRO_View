import React, { useState } from "react";
import TextTitle from "../../components/TopTex/TextTitle";
import SubTitle from "../../components/TopTex/SubTitle";
import InfoCard from "../../components/TopTex/InforCard";
import InputsCamp from "../../components/Input/InputsCamp";
import DescriptionCard from "../../components/RegistrationsForm/DescriptionCard";
import ButtonForms from "../../components/Button/ButtonForms";
import StylesComponents from '../../components/styles/StylesComponents.module.css';
import { Link } from "react-router-dom";
import FormsTicket from "./components/FormsTicket";
import { Calendar } from 'primereact/calendar';

import { Tag } from 'primereact/tag';
import MenuBottom from "../../components/Button/MenuButton";


import { Accordion, AccordionTab } from 'primereact/accordion';

function Ticket (){
    const [date, setDate] = useState(null);      

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
            <div className="card flex justify-content-center">
            <Calendar value={date} showIcon />
            </div>
            <DescriptionCard text="Tags:"></DescriptionCard>
            
            <div className={StylesComponents.card}>
                <Tag value="Agendado"></Tag>
                <Tag severity="success" value="Resolvido"></Tag>
                <Tag severity="info" value="Aviso"></Tag>
                <Tag severity="warning" value="Atenuação"></Tag>
                <Tag severity="danger" value="Rompimento"></Tag>
            
        </div> 
        

            <InfoCard text="Notas:"></InfoCard>
            

        
            <div className="card">
      <Accordion activeIndex={0}>
        <AccordionTab header="Nota I">
          {/* Aplica a classe CSS para justificar e usar a fonte Roboto */}
          <p className={`m-0 ${StylesComponents.justifiedText}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </AccordionTab>
        <AccordionTab header="Nota II">
          {/* Aplica a classe CSS para justificar e usar a fonte Roboto */}
          <p className={`m-0 ${StylesComponents.justifiedText}`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </AccordionTab>
        <AccordionTab header="Nota III">
          {/* Aplica a classe CSS para justificar e usar a fonte Roboto */}
          <p className={`m-0 ${StylesComponents.justifiedText}`}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </AccordionTab>
      </Accordion>
    </div>
       

            <InfoCard text="Agendar Teste de Verificação"></InfoCard>
        
            <div className={StylesComponents.ButtonFormsContainer}>
                <Link to="/Activity-Schedule">
                <ButtonForms></ButtonForms>
                </Link>


            
           </div>

        <MenuBottom></MenuBottom>
        
        </div>
    )
}

export default Ticket;

