import { useState } from "react"
import "./Edicao.css"
import { ITarefa } from "../../interfaces/ITarefa";

interface EdicaoProps {
    tarefaDefault: ITarefa;
    modificaTarefa: (nome: string, id: string) => void;
}

export const Edicao = ({ tarefaDefault, modificaTarefa }: EdicaoProps) => {
    const [tarefa, setTarefa] = useState(tarefaDefault.name);


    const editarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        modificaTarefa(tarefa, tarefaDefault.id);
        setTarefa("")
    }

    return (
        <div className="wrapper">
            <form className="formulario" onSubmit={editarTarefa}>
                <div className="input">
                    <input type="text" required className="input-tarefa" value={tarefa} placeholder="Editar Tarefa" onChange={(e) => setTarefa(e.target.value)} />
                    <button className="input-button">Editar</button>
                </div>
            </form>
        </div>
    )
}