import React from 'react'
import socialFb from '../../Components/ButtonLogon/Facebook/index';
import socialGs from '../../Components/ButtonLogon/Google/index';
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
                <socialFb></socialFb>
                <socialGs></socialGs>
            </div>
        </div>


    )
}

export default Logon;