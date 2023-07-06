import React from "react";
import { Link } from "react-router-dom";

function Tarjeta() {
  return (
    <>
      <title>Tarjetas</title>
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
      <link rel="stylesheet" href="assets\css\tarjeta.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .almacenes {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 700px;
            height: 100px;
            margin-left: 300px;
            margin-top: 30px;
          }

          .columnes {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .labels {
            margin-right: 1px;
            margin-left: 250px;
            color: black;
          }

          .large-icon {
            font-size: 50px;
            margin-left: 50px;
          }

          .large-1 {
            font-size: 50px;
            margin-left: 100px;
            margin-right: 10px;
          }

          .contenedor {
            margin-left: 350px;
          }

          .Boton {
            margin-top: 225px;
            margin-right: 30px;
            font-size: 50px;
          }
        `}
      </style>
      <header>{/* place navbar here */}</header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            ARCA
            <img src="assets/img/leon.png" width="10%" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  <h1>Configuración</h1>
                </a>
              </li>
              <li className="nav-item">
              <Link to="/configuraciones" className="nav-link active" aria-current="page">
              Regresar
          </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="container">
          <h4>Tarjetas</h4>
        </div>
        <div className="contenedor">
          <h5>BBVA</h5>
        </div>
        <div className="almacenes">
          <i className="bi bi-credit-card-fill text-black large-icon" />
          <div className="columnes">
            <span className="labels">9874-3928-0912-1093</span>
          </div>
          <i className="bi bi-pencil-fill text-black large-1" />
          <div className="Boton">
            <i className="bi bi-plus text-black" />
          </div>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Tarjeta;
