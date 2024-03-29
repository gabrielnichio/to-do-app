import React from "react";
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'


export const Banner = () => {
    let dataAtual = new Date();

    // Array de nomes dos meses (em inglês)
    let nomesMeses = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Obter o mês atual (0 a 11)
    let mesAtual = dataAtual.getMonth();

    // Obter o dia do mês atual (1 a 31)
    let diaAtual = dataAtual.getDate();

    // Formatar a data no formato "Month Day"
    let dataFormatada = nomesMeses[mesAtual] + " " + diaAtual;


    return (<div className="banner">

        <button className="conteudo-icon-menu">
            <FontAwesomeIcon icon={faBars} size="2xl" />
        </button>
        <div className="conteudo-text">
            {dataFormatada}
        </div>
        <button className="conteudo-icon-login">
            <FontAwesomeIcon icon={faCircleUser} size="2xl" />
        </button>

    </div>
    )
}