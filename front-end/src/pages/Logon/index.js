import React from 'react'
import ButtonFB from '../../Components/ButtonLogon/Facebook/index';
import ButtonGS from '../../Components/ButtonLogon/Google/index';
import './style.css';

function Logon() {
    return (

        <div id='container' className='container'>
            <div id='logon'>
                <div className="inputgroup">
                    <h1>Logon</h1>
                    <span>Email:</span>
                    <input type="email" name="email" id="email" />
                    <span>Senha:</span>
                    <input type="text" name="password" id="password" />

                    <button type="submit">Logar</button>
                </div>
            </div>

            <div className="social-loguin">
                <ButtonFB/>
                <ButtonGS/>
            </div>
        </div>


    )
}

export default Logon;