// arquivo com o visual do botão

import React from 'react';

// usa o iconi de check
import {FaCheck} from 'react-icons/fa';
import './style.css'


//função que retorna seu visual
function Ok() {
    return(
        <div className='area_botao'>
            <FaCheck className='check' size='40px'/>
        </div>

    )
}

// exportanddo para ser usado nas paginas
export default Ok;