import "./Tarefas.css"
import { useState } from "react";
import { ITarefa } from "../../interfaces/ITarefa";
import { v4 as uuidv4 } from 'uuid';
import { Formulario } from "../Formulario";
import { ListaCheck } from "../ListaCheck";
import { Edicao } from "../Edicao";
uuidv4()

export const Tarefas = () => {

    const [listaTarefas, setListaTarefas] = useState<ITarefa[]>([])

    const cadastraTarefa = (nome: string) => {
        setListaTarefas([...listaTarefas, { name: nome, complete: false, id: uuidv4(), isEditing: false }])
        console.log(listaTarefas);
    }

    const removeTarefa = (id: string) => {
        const listaComTarefaRemovida = listaTarefas.filter(tarefa => tarefa.id !== id);
        setListaTarefas(listaComTarefaRemovida);
    }

    const editaTarefa = (id: string) => {
        setListaTarefas(listaTarefas.map(tarefa => tarefa.id === id ? { ...tarefa, isEditing: !tarefa.isEditing } : tarefa));
    }

    const modificaTarefa = (name: string, id: string) => {
        setListaTarefas(listaTarefas.map(tarefa => tarefa.id === id ? {...tarefa, name, isEditing: !tarefa.isEditing} : tarefa))
    }

    const tarefaFinalizada = (id: string) => {
        setListaTarefas(listaTarefas.map(tarefa => tarefa.id === id ? { ...tarefa, complete: !tarefa.complete } : tarefa));
    }

    return (
        <div className="tarefas">
            <h1>Tarefas</h1>
            <Formulario cadastraTarefa={cadastraTarefa} />
            {listaTarefas.map((tarefa, index) =>
                tarefa.isEditing ? (<Edicao modificaTarefa={modificaTarefa} tarefaDefault={tarefa} key={index}/>) :
                (<ListaCheck tarefa={tarefa} key={index} removeTarefa={removeTarefa} tarefaFinalizada={tarefaFinalizada} editaTarefa={editaTarefa} />)
            )}

        </div>
    )
}