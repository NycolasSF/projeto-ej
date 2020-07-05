import React from 'react';
import { useParams, useHistory, useLocation, Link } from "react-router-dom";
import ButtonSend from "../../Components/ButtonSend";
import ButtonCancel from "../../Components/ButtonCancel";
import Header from "../../Components/Header";
// icons usados
import { FaArrowLeft, FaTimes, FaPlus } from 'react-icons/fa';


import dataFake from "../Dashboard/dataFake";
import "./style.css";

export default function Edit_task() {
    let history = useHistory();
    let location = useLocation();
    let { id } = useParams();

    let data = dataFake[id - 1];

    let back = (e) => {
      e.stopPropagation();
      history.push("/dashboard");
    };

    const openFormPhase = () => {
      document.getElementById("btn-add-phase").classList.add("hidden");
      document.getElementById("form-add-phase").classList.remove("hidden");
    };
    const closeFormPhase = () => {
      document.getElementById("form-add-phase").classList.add("hidden");
      document.getElementById("btn-add-phase").classList.remove("hidden");
    };

    let count = 0;
    const addPhase = (_count) => {
      const input = document.getElementById("title-phase");
      let element = document.getElementById("list-phases");

      if (input.value) {
        element.classList = element.classList.value === 'hidden' ? element.classList.remove('hidden') : element.classList.add('show-' + _count);

        element.insertAdjacentHTML("beforeend", `
            <li id=${'phase-' + _count} key=${'phase-' + _count} >
                <div class="input-check" >
                    <input class="hidden" type="text" name="title-phase" value=${input.value} disabled />
                    <input class="inp-cbx" id=${'phaseInput-' + _count} type="checkbox" defaultChecked="false" disabled />
                    <label class="cbx" for=${'phaseInput-' + _count}>
                        <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                        </span>
                        <span class="title-phase">${input.value}</span>
                    </label>
                </div>
                <button type="button" id=${"btn-delete-added-" + _count} class="btn-delete-phase" >
                    <svg stroke="#66666" fill="#66666" stroke-width="0" viewBox="0 0 352 512" size="15" class="icon-delete" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                </button>
            </li>
        `);

        input.value = '';
      } else {
        alert('Digite um título válido');
      }
    };

    const deletePhase = (e, userId, taskId, phaseId) => {};


    return (
      <div>

        <Header />

        <div className="container-edit">
          <div className="content-edit-header">
              <button type="button" className="btn-goBack" onClick={back}>
                <FaArrowLeft size={25} className="icon-arrowLeft" />
              </button>
            <h2 className="edit-title">Edição de Meta</h2>
          </div>
          <div className="content-edit-body">

            <form className="form-task" method="POST">

              <div className="container-input">
                <label for="title-task">Titulo</label>
                <input type="text" name="title-task" id="title-task" value={data.title}/>
              </div>
              <div className="container-input">
                <label for="imagen-task">Link da Imagen</label>
                <input type="text" name="imagen-task" id="imagen-task" value={data.image}/>
              </div>
              <div className="container-input">
                <label for="type-task" >Tipo</label>
                <select name="type-task" id="type-task">
                  <option selected value={data.type}>{data.type}</option>
                </select>
              </div>

              <ul id="list-phases">
                {data.phases.map((phase, phaseIndex) => {
                  let finished = phase.on_off === "on" ? true : false;

                  return (
                    <li
                      id={"phase-" + data.taskId + "-" + phaseIndex}
                      key={"phase-" + data.taskId + "-" + phaseIndex}
                    >
                      <div className="input-check">
                        <input
                          className="inp-cbx"
                          id={
                            "phaseInputDetail-" +
                            data.taskId +
                            "-" +
                            phaseIndex
                          }
                          type="checkbox"
                          defaultChecked={finished}
                        />
                        <label className="cbx" 
                          htmlFor={
                            "phaseInputDetail-" +
                            data.taskId +
                            "-" +
                            phaseIndex
                          }
                        >
                          <span>
                            <svg width="12px" height="10px" viewBox="0 0 12 10" >
                              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                            </svg>
                          </span>
                          <span className="title-phase">{phase.title}</span>
                        </label>
                      </div>
                      <button
                        type="submit"
                        id={"btn-delete-" + phaseIndex}
                        className="btn-delete-phase"
                        onClick={(e) =>
                          deletePhase(e, data.taskId, data.userId, phaseIndex)
                        }
                      >
                        <FaTimes size={15} className="icon-delete" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </form>

            <button type="button" id="btn-add-phase" className="btn-add-phase" onClick={openFormPhase} >
              <div className="circle-phase">
                <FaPlus size={20} className="icon-add" />
              </div>
              <p>Adicionar Etapa</p>
            </button>

            <div method="POST" id="form-add-phase" className="form-add-phase hidden" >
              <input type="text" name="title-phase" id="title-phase" placeholder="Digite um titulo" />
              <ButtonSend type="button" onClick={e => addPhase(count++)} color={{ button: "#01c750", icon: "#fff" }}/>
              <ButtonCancel onClick={closeFormPhase} />
            </div>
          </div>
          <div className="content-edit-footer">
            {/* <ButtonSend type="submit"  /> */}
          </div>
        </div>
      </div>
    );
}