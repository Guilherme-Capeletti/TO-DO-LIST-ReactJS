import React, { useState } from "react";

function TarefaForm(props) {
    const [input, setInput] = useState(props.modificar ? props.modificar.value : '');

    return (
        <form className="tarefaForm" onSubmit={event => {
            event.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 20000), text: input
            });
            setInput("");
        }} >

            {props.modificar ? (
                <>
                    <input
                        className="editar-lista"
                        placeholder="escreva a tarefa..."
                        value={input}
                        onChange={event => { setInput(event.target.value) }}
                        type="text"
                        maxLength="35"
                    />
                    <button className="editar-lista-button" onClick={event => {
                        event.preventDefault();
                        props.onSubmit({ id: Math.floor(Math.random() * 20000), text: input });
                        setInput("");
                    }} >
                        Atualizar
                    </button>

                </>
            ) : (
                    <>
                        <input
                            className="adicionar-lista"
                            placeholder="Adicionar a lista"
                            value={input}
                            onChange={event => { setInput(event.target.value) }}
                            type="text"
                            maxLength="35"

                        />
                        <button className="adicionar-lista-button" onClick={event => {
                            event.preventDefault();
                            props.onSubmit({ id: Math.floor(Math.random() * 20000), text: input });
                            setInput("");
                        }}>
                            Adicionar
                        </button>
                    </>
                )}
        </form>  
    );
}

export default TarefaForm
