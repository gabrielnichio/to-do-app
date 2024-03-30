import "./ListaCheck.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { ITarefa } from "../../interfaces/ITarefa";

interface ListaCheckProps {
    listaTarefas: ITarefa[];
    removeTarefa: (id: string) => void;
}

export const ListaCheck = ({ listaTarefas, removeTarefa }: ListaCheckProps) => {


    return (
        <div className="lista">
            <div className="tarefa">
                <p>Trabalhar</p>
                <div className="botoes">
                    <FontAwesomeIcon icon={faPenToSquare} className="edit" />
                    <FontAwesomeIcon icon={faTrashCan} className="remove" />
                </div>
            </div>

            {listaTarefas.map(tarefa => {
                return (
                    <div className="tarefa" id={tarefa.id} key={tarefa.id}>
                        <div className="texto">
                            <p>{tarefa.name}</p>
                        </div>
                        <div className="botoes">
                            <FontAwesomeIcon icon={faPenToSquare} className="edit" />
                            <FontAwesomeIcon icon={faTrashCan} className="remove" onClick={() => removeTarefa(tarefa.id)} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}