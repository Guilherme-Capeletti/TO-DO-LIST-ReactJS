import React, { useState } from "react";
import TarefaForm from "./TarefaForm";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";


function Tarefa ({tarefas, tarefaComplete, tarefaDelete, tarefaEdit}){
    const [modificar, setModificar] = useState({id: null, value: ""});
  
    const submitEdit = value => {
        tarefaEdit(modificar.id, value);
        setModificar({id: null, value: ""});
    };

    if (modificar.id){
       return <TarefaForm modificar={modificar} onSubmit={submitEdit} />
    }
    
    return tarefas.map((tarefa, index) => (
      <div className={tarefa.isComplete ? "tarefa-complete complete" : "tarefa-complete"} key={index}>

        <div key={tarefa.id}>
          {tarefa.text}
        </div>

        <div className='icons'>
          <BsTrash className="icon-delete" onClick={() => tarefaDelete(tarefa.id)}/>
          <FiEdit className="icon-edit" onClick={() => setModificar({ id: tarefa.id, value: tarefa.text })}/>
          <AiOutlineCheckCircle className="icon-confirm" key={tarefa.id} onClick={() => tarefaComplete(tarefa.id)}/>
        </div>
      </div>
    ));
  };
  
export default Tarefa