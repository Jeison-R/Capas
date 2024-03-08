import React, { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
  
const taskStyle = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textCompleta: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex-item-center`,
  };

const Tarea = ({ tarea, tCompleta, eliminarTarea, mostrarDetalle }) => {
    return (
      <li className={tarea.completed ? taskStyle.liComplete : taskStyle.li}>
        <div className={taskStyle.row} onClick={() => mostrarDetalle(tarea)}>
          <input
            onChange={() => tCompleta(tarea)}
            type="checkbox"
            checked={tarea.completed ? "cheked" : ""}
          />
          <p
            className={tarea.completed ? taskStyle.textCompleta : taskStyle.text}
          >
            {tarea.title}
          </p>
        </div>
        <button onClick={() => eliminarTarea(tarea.id)}>
          {<FaRegTrashAlt />}
        </button>
      </li>
    );
  };
 
  export default Tarea