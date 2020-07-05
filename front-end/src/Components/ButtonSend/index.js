// arquivo com o visual do botão

import React from 'react';

// usa o iconi de check
import { FaCheck } from "react-icons/fa";
import './style.css'


//função que retorna seu visual
function ButtonSend(props) {

  let { type , onClick, color, text } = props;

  let statusType = type !== undefined ? type : 'button';
  let statusClick = onClick !== undefined ? onClick : false;
  let statusColor = color !== undefined ? color : "normal";

  let statusText = text !== undefined ? text : <FaCheck className="icon-check" size="30" style={{ color: statusColor.icon }} />;
  let styleText = text !== undefined ? 'text' : 'icon';

  if(statusColor === "normal"){
    statusColor = {
      button: "#FFF027",
      icon: "#7A28CB"
    }
  }

  return (
    <button type={statusType} className={"btn-send " + styleText} onClick={statusClick} style={{ background: statusColor.button }}>
      {statusText}
    </button>
  );
}

// exportanddo para ser usado nas paginas
export default ButtonSend;