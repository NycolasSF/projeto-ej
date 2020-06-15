import React from "react";

// CREATED COMPONENT
import Header from './Header/';
import ButtonSend from './ButtonSend/';
import ButtonFacebook from './ButtonLogon/Facebook/';
import ButtonGoogle from "./ButtonLogon/Google/";
import Task_listed from './ListTask/';


export default function CreateComponent(props) {

    const { nameComponent, data } = props;

    // Verificando se não há nada null ou undefined 
    let checkedName = nameComponent !== undefined ? nameComponent : false;
    let checkedData = data !== null ? data : null;

    const components = {
      header: <Header />,
      buttonSend: <ButtonSend />,
      buttonFacebook: <ButtonFacebook />,
      buttonGoogle: <ButtonGoogle />,
      taskList: <Task_listed data={checkedData} />,
    };

    const findComponent = () =>{
        if(checkedName){
            for (const idName in components) { 
                if (idName === checkedName) {
                    return components[idName]
                }
            }
            return <h1>Component não encontrado !! <strong>Name: {checkedName}</strong></h1> 
        }
    }

    return(
        findComponent()
    )
}
