import "./ListaCheck.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { ITarefa } from "../../interfaces/ITarefa";

interface ListaCheckProps {
    tarefa: ITarefa;
    removeTarefa: (id: string) => void;
    tarefaFinalizada: (id: string) => void;
    editaTarefa: (id: string) => void;
}

export const ListaCheck = ({ tarefa, removeTarefa, tarefaFinalizada, editaTarefa }: ListaCheckProps) => {
    return (
        <div className="tarefa" id={tarefa.id}>
            <div className="texto">
                <p onClick={() => tarefaFinalizada(tarefa.id)} className={`${tarefa.complete ? "completed" : ""}`}>{tarefa.name}</p>
            </div>
            <div className="botoes">
                <FontAwesomeIcon icon={faPenToSquare} className="edit" onClick={() => editaTarefa(tarefa.id)} />
                <FontAwesomeIcon icon={faTrashCan} className="remove" onClick={() => removeTarefa(tarefa.id)} />
            </div>
        </div>
    )

}