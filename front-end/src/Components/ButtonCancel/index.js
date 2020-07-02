// arquivo com o visual do botão

import React from 'react';

// usa o iconi de check
import { FaTimes } from "react-icons/fa";
import './style.css'


//função que retorna seu visual
function ButtonCancel(props) {
  const {onClick} = props;

  return (
    <button type="button" className="btn-cancel" onClick={onClick}>
      <FaTimes className="icon-cancel" size="30" />
    </button>
  );
}

// exportanddo para ser usado nas paginas
export default ButtonCancel;