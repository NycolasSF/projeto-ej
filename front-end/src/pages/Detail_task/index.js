import React, {Image} from 'react';
import {useParams, useHistory, useLocation , Link} from 'react-router-dom';

// icons usados
import { FaArrowLeft, FaPen, FaTimes, FaRegCalendarCheck, FaTrash } from 'react-icons/fa';


import dataFake from '../Dashboard/dataFake'
import './style.css';

export default function Detail_task() {

    let history = useHistory();
    let location = useLocation()
    let { id } = useParams();

    let data = dataFake[id - 1];

    let back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className="container-modal"> 
            <div className="content-modal">
                <div className="content-m-header" >
                    <div className="modal-actions">
                        <button type="button" className="btn-goBack" onClick={back}>
                            <FaArrowLeft size={25} className="icon-arrowLeft" />
                        </button>
                        <Link to={{
                                    pathname: `/task/edit/${data.taskId}`,
                                    state: { background: location }
                                }}  
                            className="btn-editTask" 
                        >
                            <FaPen size={25} className="icon-pen" />
                        </Link>
                    </div>
                    <div className="modal-background">
                        <div className={"filter-image " + data.type}></div>
                        <img src={data.image} className="modal-image" />
                    </div>
                </div>
                <div className="content-m-body">
                    <h2 className="modal-title">{data.title}</h2>
                    <div className="content-bar">
                        <div className="bar-full">
                            <div className={"bar-progress " + data.type} style={{ width: data.percentCompleted }}></div>
                        </div>
                        <p>{data.percentCompleted}</p>
                    </div>
                    <form className="content-phases" action="" method="POST">
                        <ul>
                            {data.phases.map((phase, phaseIndex) => {
                                let finished = phase.on_off === "on" ? true : false;

                                return (
                                    <li id={'phase-' + data.taskId + '-' + phaseIndex} key={'phase-' + data.taskId + '-' + phaseIndex}>
                                        <div className="input-check">
                                            <input className="inp-cbx" id={'phaseInput-' + data.taskId + '-' + phaseIndex} type="checkbox" defaultChecked={finished} disabled />
                                            <label className="cbx" htmlFor={'phaseInput-' + data.taskId + '-' + phaseIndex}>
                                                <span>
                                                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                                                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                                    </svg>
                                                </span>
                                                <span className="title-phase">{phase.title}</span>
                                            </label>
                                        </div>
                                        <button type="submit" id={"btn-delete-" + phaseIndex} className="btn-delete-phase">
                                            <FaTimes size={15} className="icon-delete" />
                                        </button>
                                    </li>

                                )
                            })}

                        </ul>
                    </form>
                    <button type="button" id="btn-add-phase" className="btn-add-phase">Clique para adicionar uma meta</button>
                </div>
                <div className="content-m-footer">
                    <div className="footer-data">
                        <FaRegCalendarCheck size={25} className="icon-calendar" />
                        <p>{data.endData}</p>
                    </div>
                    <button type="submit" id="btn-delete-task" className="btn-delete-task">
                        <FaTrash size={25} className="icon-delete-task" />
                    </button>
                </div>
            </div>
            <div className="close-modal" onClick={back}></div>
        </div>
    )
}