import React from "react";
import { Link } from "react-router-dom";
import ConfirmarCita from "./confirmar_cita";

function ServicioCita() {
  return (
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
                <title>Sistema de Citas Veterinaria</title>
                <h1>Sistema de Citas Veterinaria</h1>
                <h2>Solicitar cita</h2>
                <form action="/confirmar_cita" method="POST">
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" name="nombre" required="" />
                  <br />
                  <br />
                  <label htmlFor="telefono">Teléfono:</label>
                  <input type="text" name="telefono" required="" />
                  <br />
                  <br />
                  <label htmlFor="fecha">Fecha:</label>
                  <input type="date" name="fecha" required="" />
                  <br />
                  <br />
                  <label htmlFor="hora">Hora:</label>
                  <input type="time" name="hora" required="" />
                  <br />
                  <br />
                  <label htmlFor="mascota">Mascota:</label>
                  <input type="text" name="mascota" required="" />
                  <br />
                  <br />
                  <Link to="/confirmar_cita" className="btn btn-dark" type="submit" value="Solicitar cita">
                    Solicitar cita
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

export default ServicioCita;
