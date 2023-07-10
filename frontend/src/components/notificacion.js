import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/leon.png';


function Notificacion() {
  return (
    <>
      <title>Notificaciones</title>
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
      <link rel="stylesheet" href="assets\css\notificaciones.css" />
      <style>
        {`
          .gray-box {
            background-color: gray;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1000px;
            height: 450px;
            margin-left: 150px;
            margin-top: 60px;
          }

          .white-box {
            background-color: white;
            padding: 20px;
            width: 700px;
            height: 315px;
          }

          .notifications {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }
        `}
      </style>
      <header>{/* place navbar here */}</header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            ARCA
            <img src={logo} width="10%" />
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
                  <h1>Notificaciones</h1>
                </a>
              </li>
              <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
              Regresar
          </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="gray-box">
          <div className="notifications">Notificaciones</div>
          <div className="white-box">
            {/* Contenido adicional dentro del cuadro blanco */}
          </div>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Notificacion;
