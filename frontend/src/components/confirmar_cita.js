import React from "react";

import { Link } from "react-router-dom";
import ConfirmacionServicio from "./confirmacion_servicio";

function ConfirmarCita() {
    return(
        <>
  <title>Title</title>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Bootstrap CSS v5.2.1 */}
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
    crossOrigin="anonymous"
  />
  <header>{/* place navbar here */}</header>
  <main>
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card square-card">
          <center>
            <title>Sistema de Confirmación de Citas</title>
            <h1>Sistema de Confirmación de Citas</h1>
            <h2>Confirmar Cita</h2>
            <h3>En el correo se le enviara el codigo</h3>
            <form action="confirmar_cita.php" method="POST">
              <label htmlFor="codigo">Código de Confirmación:</label>
              <input type="text" name="codigo" required="" />
              <br />
              <br />
              <Link to="/confirmacion_servicio" className="btn btn-dark">
                  Confirmar cita
              </Link>
            </form>
          </center>
        </div>
      </div>
    </div>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

    );
}

export default ConfirmarCita;