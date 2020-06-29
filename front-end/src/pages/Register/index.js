import React from 'react'

import imgGirl from '../../assets/imgGirlRegisterPG.svg';
import paperLogo from '../../assets/imgregisterPG.svg';

import './style.css'

function Register() {
    return (
        
        <div >
           <div className="container">
               <div className="register">
                   <img src={paperLogo} alt="paperlogo" className="paper"/>
                   <img src="" alt="" className="icon"/>
                   <span className="register">REGISTER</span>
                   <span className="user">Nome:</span>
                   <input type="text" name="user" id="user" className="username"/>
                   <span className="email">Email:</span>
                   <input type="email" className="email"/>
                   <span className="senha">Senha:</span>
                   <input type="password" name="password" id="password" className="password"/>

                   <button type="submit" className>REGISTRAR</button>
               </div>
                <img src={imgGirl} alt="imgRegisterPage" className="girl"/>
           </div>
        </div>


    )
}

export default Register;