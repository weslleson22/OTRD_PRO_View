import React from "react";

import TextTitle from "../../components/TopTex/TextTitle";
import SubText from "../../components/RegistrationsForm/SubTitle";
import DescriptionCard from "../../components/RegistrationsForm/DescriptionCard";
import InputsCamp from "../../components/Input/InputsCamp";
import CardsForms from "../../components/RegistrationsForm/CardsForms";
import StylesComponents from '../../components/styles/StylesComponents.module.css';

import CardAddress from "../../components/RegistrationsForm/CardAnddress";
import ButtonForms from "../../components/Button/ButtonForms";
import ReturnArrow from "../../components/Button/ReturnArrow";
import SubTitle from "../../components/TopTex/SubTitle";
import { Link } from "react-router-dom";


function Create_an_Acconunt(){
    return(
        <div>
            <div>
             <div className={StylesComponents.Container}>
                


        
                <Link to="/Register">
                <ReturnArrow/>
                </Link>
                
                
                <TextTitle text="Your Organization"/>        
            </div>
                
            <SubTitle text="Quick, simple, and secure process."/> 
                
                <SubText text="Company Data"/>
                <DescriptionCard text="Organization Name*"/>
                <InputsCamp text="ABC Company"/>
                
                
                <DescriptionCard text="CNPJ*"/>
                <InputsCamp text="12345678901234"/>
                <SubText text="Organization Address"/>
                <CardsForms>
                <DescriptionCard text="Anddress Line 1*"/>
                <InputsCamp text=""/>
                </CardsForms>
                
                
                <CardsForms>
                <DescriptionCard text="Anddress Line 2*"/>
                <InputsCamp text=""/>
                </CardsForms>

                <CardAddress></CardAddress>  

                <SubText text="Company Contacts"/>  
                <CardsForms>
                <DescriptionCard text="Corporate Email*"/>
                <InputsCamp text="E-mail"/>
                </CardsForms>
                
                <CardsForms>
                <DescriptionCard text="Corporate Phone*"/>
                <InputsCamp text="Phone"/>
                </CardsForms>

                <div className={StylesComponents.ButtonFormsContainer}>
                <Link to="/">
                <ButtonForms></ButtonForms>
                </Link>
        </div>
            </div>
        </div>
    );
}

export default Create_an_Acconunt;
