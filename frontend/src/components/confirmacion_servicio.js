import React from "react";
import { Link } from "react-router-dom";
import MiComponente from "./micomponente";

function ConfirmacionServicio() {
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
            <title>CITA</title>
            <h1>CONFIRMADA</h1>
            <h2> Su cita ya esta registrada </h2>
          </center>
          <Link to="/" className="btn btn-dark">
                  Regresar
              </Link>
        </div>
      </div>
    </div>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

    );
}

export default ConfirmacionServicio;