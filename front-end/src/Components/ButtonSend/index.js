// arquivo com o visual do botão

import React from 'react';

// usa o iconi de check
import {FaCheck} from 'react-icons/fa';
import './style.css'


//função que retorna seu visual
function ButtonSend() {
    return(
        <button type="submit" className='btn-send'>
            <FaCheck className='icon-check' size='30'/>
        </button>

    )
}

// exportanddo para ser usado nas paginas
export default ButtonSend;