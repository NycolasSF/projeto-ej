import React from 'react'
import socialFb from '../../Components/ButtonLogon/Facebook';
import socialGs from '../../Components/ButtonLogon/Google';

function Logon() {
    return (
        
        <div id='container'>
            <div id='logon'>
            <h1>Logon</h1>
            <span>Email:</span>
            <input type="email" name="email" id="email"/>
            <span>Senha:</span>
            <input type="text" name="password" id="password"/>

            <button type="submit">Logar</button>
            </div>

            <div className="social-loguin">
                <socialFb></socialFb>
                <socialGs></socialGs>
            </div>
        </div>


    )
}

export default Logon;