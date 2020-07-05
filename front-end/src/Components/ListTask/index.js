// Teste de componente que mostra uma task sendo listada
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
// icons usados
import { IoMdArrowDropdown, IoIosAdd } from 'react-icons/io';

import './style.css';


//função que retorna a task
function Task_listed(props) {

    const { data } = props;
    let location = useLocation();

    const openFilter = () => {
        //    QUERY PARAMS --> https://reacttraining.com/react-router/web/example/query-parameters

        let elementDrop = document.getElementById('drop-filter');
        let elementButton = document.getElementById('buttonFilter');

        elementDrop.style.display = 'block';
        elementButton.style.borderRadius = '15px 15px 0 0';

        elementDrop.addEventListener("mouseleave", e => {
            e.preventDefault();
            setTimeout(() => {
                elementDrop.style.display = 'none';
                elementButton.style.borderRadius = '45px';
            }, 1000);
        });

    }

    return (
        <div className="container-tasks">

            <div className="header-tasks">
                <button type="button" id="buttonFilter" className="btn-filter" onClick={openFilter}>
                    Filtrar
                    <IoMdArrowDropdown className="icon-filter" size="30" />
                </button>
                <div id="drop-filter" className="dropdown-filter">
                    <ul>
                        <li>
                            <Link className="btns-filter" to="/dashboard?search=date">
                                Data Criação
                            </Link>
                        </li>
                        <li>
                            <Link className="btns-filter" to="/dashboard?search=inProgress">
                                Em Andamento
                            </Link>
                        </li>
                        <li>
                            <Link className="btns-filter" to="/dashboard?search=finished">
                                Finalizados
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn-new-task" to='/task/create' >
                    Nova Meta
                    <IoIosAdd className="icon-new-task" size="30" />
                </Link>
            </div>

            <section className="body-tasks">
                {data.map((task, i) => {
                    return (
                        <Link key={task.taskId} to={{
                            pathname: `/task/detail/${task.taskId}`,
                            state: { background: location }
                        }} >
                            <div className='content-task' key={task.taskId}>
                                <h1>{task.title}</h1>
                                <div className="content-bar">
                                    <div className="bar-full">
                                        <div className={"bar-progress " + task.type} style={{ width: task.percentCompleted }}></div>
                                    </div>
                                    <p>{task.percentCompleted}</p>
                                </div>
                                <form className="content-phases" action="" method="POST">
                                    <ul>
                                        {task.phases.map((phase, phaseIndex) => {
                                            let finished = phase.on_off === "on" ? true : false;

                                            return (
                                                <li id={'phase-' + task.taskId + '-' + phaseIndex} key={'phase-' + task.taskId + '-' + phaseIndex}>
                                                    <input className="inp-cbx" id={'phaseInput-' + task.taskId + '-' + phaseIndex} type="checkbox" defaultChecked={finished} disabled />
                                                    <label className="cbx" htmlFor={'phaseInput-' + task.taskId + '-' + phaseIndex}>
                                                        <span>
                                                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                            </svg>
                                                        </span>
                                                        <span className="title-phase">{phase.title}</span>
                                                    </label>
                                                </li>

                                            )
                                        })}

                                    </ul>
                                </form>
                            </div>
                        </Link>
                    )
                })}
            </section>

        </div>



    )
}

// exportação da função
export default Task_listed;