import React from 'react'
import './style.css'
import noFound from '../../assets/404.svg'

function Register() {
    return (
        
        <div className="div_nofound">
            <h1 className="nofound_title">Página não encontrada</h1>
            <img src={noFound} alt="404"  className="nofound_image"/>
        </div>


    )
}

export default Register;