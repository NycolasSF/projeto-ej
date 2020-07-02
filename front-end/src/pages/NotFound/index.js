import React from 'react'
import {Link} from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa';

import './style.css'
import noFound from '../../assets/404.svg';

function Register() {


    return (
        
        <div className="div_nofound">
            <div className="content-title">
                <Link className="btn-goBack" to='/' >
                    <FaArrowLeft size={25} className="icon-arrowLeft" />
                </Link>
                <h1 className="nofound_title">Página não encontrada</h1>
            </div>
            <img src={noFound} alt="404"  className="nofound_image"/>
        </div>


    )
}

export default Register;