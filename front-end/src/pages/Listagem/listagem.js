
import React from 'react'

import Header from '../../Components/Header/Header'
import Ok from '../../Components/buttom_ok/ok'

import Log_facebook from '../../Components/go_e_fa/faceboook/log_facebook'
import Log_google from '../../Components/go_e_fa/google/log_google'

import Task_listed from '../../Components/task_listed/task_listed'


function Listagem() {
    return (
        
        <div >
            <Header/>
            <Ok/>
            <Log_google/>
            <Log_facebook/>
            <Task_listed/>
        </div>


    )
}

export default Listagem;