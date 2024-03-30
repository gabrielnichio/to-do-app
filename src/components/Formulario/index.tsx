import { useState } from "react"
import "./Formulario.css"

interface FormularioProps {
    cadastraTarefa: (nome: string) => void;
}

export const Formulario = ({ cadastraTarefa }: FormularioProps) => {
    const [tarefa, setTarefa] = useState("");


    const cadastrarTarefa = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        cadastraTarefa(tarefa);
        setTarefa("")
    }

    return (
        <div className="wrapper">
            <form className="formulario" onSubmit={cadastrarTarefa}>
                <div className="input">
                    <input type="text" required className="input-tarefa" value={tarefa} placeholder="Qual é a tarefa de hoje?" onChange={(e) => setTarefa(e.target.value)} />
                    <button className="input-button">Adicionar</button>
                </div>
            </form>
        </div>
    )
}