//função que retorna o iconi do facebook para a pagina de login com o mesmo

import React from 'react'

import { FaFacebook } from 'react-icons/fa'

import './style.css'


// função que retorna o HTML do iconi + animações
function Log_facebook() {
    return (
        
        <div className='facebook_area'>
            <FaFacebook size='80' className='facebook_icon' color='#3b5998'/>
        </div>
    )
}

export default Log_facebook;