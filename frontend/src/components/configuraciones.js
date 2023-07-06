import React from "react";
import { Link } from "react-router-dom";
import MisDatos from "./datos";
import Seguri from "./seguridad";
import Tarjeta from "./tarjetas";
import Direcciones from "./direccion";

function Configuracion() {
  return (
    <>
      <title>Configuración del perfil</title>
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
      <style>
        {`
        .btn-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 75px;
        }

        .btn {
          width: 200px;
          height: 50px;
          background-color: gray;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          margin-right: 70px;
        }

        .btn:hover {
          background-color: gray !important;
        }

        .contenedor {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
          height: 100px;
          background-color: gray;
          color: black;
          margin-left: 500px;
        }
        `}
      </style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
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
              <Link to="/" className="nav-link active" aria-current="page">
              Regresar
          </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div className="contenedor">
          <i className="bi bi-person-fill text-black" style={{ fontSize: 50 }} />
          <h2>Marco Hau Pech</h2>
        </div>
        <div className="btn-container">
        <Link to="/datos" className="btn btn-1">
            <i
              className="bi bi-person-fill text-black"
              style={{ fontSize: 25, float: "left" }}
            />
            Datos
          </Link>
          <Link to="/seguridad" className="btn btn-1">
            <i
              className="bi bi-person-fill text-black"
              style={{ fontSize: 25, float: "left" }}
            />
            Seguridad
          </Link>
          <Link to="/tarjetas" className="btn btn-1">
            <i
              className="bi bi-person-fill text-black"
              style={{ fontSize: 25, float: "left" }}
            />
            Tarjetas
          </Link>
          <Link to="/direccion" className="btn btn-1">
            <i
              className="bi bi-person-fill text-black"
              style={{ fontSize: 25, float: "left" }}
            />
            Direcciones
          </Link>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Configuracion;
