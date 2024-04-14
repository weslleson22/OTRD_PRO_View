import React from "react";
import logoImg from '../../assets/logo_otrd2.svg'
import {FiArrowRight} from "react-icons/fi"
//import '../../styles/global.css'
//import '../../styles/pages/landing.css'
import { Link } from "react-router-dom";
import ButtonForms from "../../components/Button/ButtonForms";
//import LogoImg from  '../../assets/logo_otrd2.svg';


function Register_Home(){
    return(
        <div >
            <div >
                <img   src={logoImg} alt="logo"/>  

                <main>
                    <h1>ProJeto OTDR</h1>
                    
                <Link to="/Ticket">
                
                <ButtonForms></ButtonForms>
                </Link>
                    <p>Faça o seu cadastro</p>
                </main>


                
                <Link to="/Register" className="enter-app">
                    <FiArrowRight size={26} color="rgba(8, 8, 0, 8.6)"/>
                </Link>
            </div>   
        </div>
    )
}


export default Register_Home;