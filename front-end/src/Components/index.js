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

    const component = {
      header: <Header />,
      buttonSend: <ButtonSend />,
      buttonFacebook: <ButtonFacebook />,
      buttonGoogle: <ButtonGoogle />,
      taskList: <Task_listed data={checkedData} />,
    };

    const findComponent = () =>{
        for(const idName in component){
            if(checkedName && idName === checkedName){
                return component[idName]
            }
        }
    }

    return(
        findComponent()
    )
}
