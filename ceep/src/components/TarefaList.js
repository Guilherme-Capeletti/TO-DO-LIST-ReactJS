import React, { useState } from "react";
import TarefaForm from "./TarefaForm";
import Tarefa from "./Tarefa"

function TarefaList() {
  const [tarefas, setTarefas] = useState([]);

  const tarefaAdd = tarefa => {
    let newTarefa = [tarefa, ...tarefas];
    setTarefas(newTarefa);

  };

  const tarefaEdit = (tarefaId, nValue) => {
    let modificacao = (mod => mod.map(item => (item.id === tarefaId ? nValue: item))
    );
    setTarefas(modificacao);
  };

  const tarefaDelete = id => {
    let arrayDelete = [...tarefas].filter(tarefa => tarefa.id !== id);
    setTarefas(arrayDelete);
  };

  const tarefaComplete = id => {
    let tarefaUpdate = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        tarefa.isComplete = !tarefa.isComplete;
      }
      return tarefa;
    });
    setTarefas(tarefaUpdate);
  };

  const tarefaDeleteAll = id => {
    let arrayDeleteAll = tarefas.clear();
    setTarefas(arrayDeleteAll);
  }

  return (
    <div>
      <h1 className="titulo-principal">Tarefas</h1>
      <TarefaForm onSubmit={tarefaAdd} />
      <Tarefa 
        tarefas={tarefas} 
        tarefaComplete={tarefaComplete} 
        tarefaDelete={tarefaDelete}
        tarefaEdit={tarefaEdit}
        tarefaDeleteAll={tarefaDeleteAll}
        /> 

        <button className="reset-button" onClick={() => setTarefas([])}>reset</button>
    </div>
  );
}

export default TarefaList
