import React from "react";
import {Link} from "react-router-dom";

function Encabezado (){
    return(
        <header>
            <h1>Patito SA</h1>
            <nav>
                <Link to="/sm34">Inicio</Link>
                <Link to="/nosotros">Iniciio</Link>
                <Link to="/contactos">Iniciio</Link>
            </nav>
        </header>
    )
}

export default Encabezado;