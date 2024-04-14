// Register_User_registrarion.tsx
import React from "react";
import TextTitle from "../../components/TopTex/TextTitle";
import ReturnArrow from "../../components/Button/ReturnArrow";
import StylesComponents from '../../components/styles/StylesComponents.module.css';
import SubTitle from "../../components/TopTex/SubTitle";

import InfoCard from "../../components/TopTex/InforCard";
import ButtonForms from "../../components/Button/ButtonForms";
import Card from "./components/Card";
import NameSurnameCard from "./components/NameSurnameCard";
import InputField from "./components/InputField";
import CardsForms from "../../components/RegistrationsForm/CardsForms";
import { Link } from "react-router-dom";




function Register_User_registrarion() {
  return (
    <div >
      
      <div className={StylesComponents.Container}>
        
          <Link to="/">
                <ReturnArrow/>
          </Link>
        
        <TextTitle text="User Registration"/>        
      </div>


      <div>
      <SubTitle text="Quick, simple, and secure process."/> 
       <InfoCard text="Personal Information *"/>    
       <Card>
        <NameSurnameCard/>
        <InputField text="CPF"/>
        <InputField text="Date Of Birth"/>
        <InputField text="Gender"/>
       </Card>
        
        <InfoCard text="Contacts *"/>  
        
        <CardsForms>
        <InputField text="E-Mail "/>
        <InputField text="Telefone/Whatsapp"/>


        </CardsForms>
        <InfoCard text="Address *"/>          
        <Card>
        
        <InputField text="Address Line 1"/>
        <InputField text="Zip Code"/>
        <InputField text="City"/>
        <InputField text="State"/>
        <InputField text="Country/Region"/>
        
       </Card>

        <div className={StylesComponents.ButtonFormsContainer}>
        <Link to="/Create-an-Account">
          <ButtonForms></ButtonForms>
        </Link>
        </div>
      </div>
      
    </div>
  );
}

export default Register_User_registrarion;
