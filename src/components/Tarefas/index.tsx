import "./Tarefas.css"
import { useState } from "react";
import { ITarefa } from "../../interfaces/ITarefa";
import { v4 as uuidv4 } from 'uuid';
import { Formulario } from "../Formulario";
import { ListaCheck } from "../ListaCheck";
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

    return (
        <div className="tarefas">
                <Formulario cadastraTarefa={cadastraTarefa} />
                <ListaCheck listaTarefas={listaTarefas} removeTarefa={removeTarefa}/>
        </div>
    )
}