// Teste de componente que mostra uma task sendo listada
import React from 'react'

// icons usados
import {  GrCheckbox,GrCheckboxSelected} from 'react-icons/gr'

import './style.css'


//função que retorna a task
function Task_listed() {
    return (
        
        <div className='task_l'>

            <h1 className='task_name'>Nome da Task</h1>

            <h4 className='name_e'>
                <GrCheckboxSelected className='check' color='#2d2d2d'/> Etapa completa 
            </h4>

            <h4 className='name_e'>
                <GrCheckbox  className='check' color='#2d2d2d'/> a completar  
            </h4 >

            <h4 className='name_e'>
                <GrCheckbox  className='check' color='#2d2d2d'/> Etapa a completar
            </h4>
           
            
        </div>


    )
}

// exportação da função
export default Task_listed;