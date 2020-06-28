import React from 'react'
import ButtonFB from '../../Components/ButtonLogon/Facebook/index';
import ButtonGS from '../../Components/ButtonLogon/Google/index';
import './style.css';
import logon from '../../assets/logoSVG.svg';
import esfera from '..//../assets/Circle-BG.svg';


function Logon() {
    return (

        <div id='container' className='container'>
            <img src={esfera} alt="MarcaEsfera" className='esfera' />
            <div id='logon'>
                <div className="inputgroup">
                    <div className='headerlogon'>
                    <img src={logon} alt="IMG Logo" width="145.85" height="138.04" />
                    <h1>Logon</h1>
                    </div>
                    <span>Email:</span>
                    <input type="email" name="email" id="email" />
                    <span>Senha:</span>
                    <input type="text" name="password" id="password" />

                    <button type="submit">Logar</button>
                        <span>Logar com:</span>
                    <div className="social-loguin">
                        <ButtonFB />
                        <ButtonGS />
                    </div>
                    <span>NÃO POSSUO CONTA, <strong>REGISTRAR-SE</strong>.</span>
                </div>
            </div>

        </div>


    )
}

export default Logon;