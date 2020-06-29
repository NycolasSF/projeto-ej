import React from 'react'
import ButtonFB from '../../Components/ButtonLogon/Facebook/index';
import ButtonGS from '../../Components/ButtonLogon/Google/index';

import './style.css';
import logo from '../../assets/logoSVG.svg';
import esfera from '..//../assets/Circle-BG.svg';
import imgfrontpage from '../../assets/img_login.svg'


function Logon() {
    return (
       
        <div id='container' className='container'>
            <div className="left-side">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <span>LOGON</span>
                </div>
                <div className="logonform">
                    <span className="email">Email:</span>
                    <input type="email" className="user" />
                    <span className="senha">Senha:</span>
                    <input type="password" name="password" id="password" className="password" />
                    <button type="submit">LOGAR</button>
                </div>

                
            </div>

            <div>
                <img className="esfera" src={esfera} alt="Esfera" />
            </div>

            <div className="right-side">
                <div className="textbox">
                    <span className='sobrenos'>SOBRE NÓS</span>
                    <p>
                        Olá, bem-vindo(a) ao seu organizador de séries e filmes favoritos! 
                        Tudo de forma rápida e fácil, com o que se tem de mais avançado em recursos tecnológicos. 
                        Uma equipe de desenvolvedores dedicada 24 horas para encontrar a melhor 
                        forma de você se manter organizado durante a pandemia. Tudo isso de forma gratuita! Venha ser organizado com a gente.
                    </p>
                    <div className="img-front-page">
                        <img src={imgfrontpage} alt="FrontPage" />
                    </div>
                </div>
            </div>
        
    </div>

    

    )
};

export default Logon