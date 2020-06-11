// Teste de componente que mostra uma task sendo listada
import React, {useState} from 'react'

// icons usados
import { IoMdArrowDropdown, IoIosAdd } from 'react-icons/io'

import './style.css'


//função que retorna a task
function Task_listed(props) {
    const { data } = props;
        
    return (
        <div className="container-tasks">

            <div className="header-tasks">
                <button type="button" className="btn-filter">
                    Filtrar 
                    <IoMdArrowDropdown className="icon-filter" size="30" />
                </button>
                <button type="button" className="btn-new-task">
                    Nova Meta
                    <IoIosAdd className="icon-new-task" size="30" />
                </button>
            </div>

            <section className="body-tasks">
                {data.map((task, i)=>{
                    <h1>{task.title}</h1>
                })}
                <div className='content-task'>
                    <h1>{data[0].title}</h1>
                    <div className="content-bar">
                        <div className="bar-full">
                            <div className="bar-progress movie" style={{ width: data[0].percentCompleted}}></div>
                        </div>
                        <p>50%</p>
                    </div>
                    <form className="content-phases" action="" method="POST">
                        <ul>
                            <li id="phase-1">
                                <input className="inp-cbx" id="cbx" type="checkbox" />
                                <label className="cbx" for="cbx">
                                    <span>
                                        <svg width="12px" height="10px" viewbox="0 0 12 10">
                                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                        </svg>
                                    </span>
                                    <span className="title-phase">1 Filme</span>
                                </label>
                            </li>
                        </ul>
                    </form>
                </div>

            </section>

        </div>
        


    )
}

// exportação da função
export default Task_listed;