import React from "react";
import { Link } from "react-router-dom";

function MisDatos() {
  return (
    <>
      <title>Mis datos</title>
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
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .contenedor {
            margin-top: 30px;
            margin-left: 75px;
          }

          .almacen {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 700px;
            height: 50px;
            margin-left: 70px;
          }

          .column {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center {
            justify-content: center;
          }

          .label {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .username {
            font-weight: bold;
            color: black;
          }

          .guardado {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 700px;
            height: 50px;
            margin-left: 70px;
            margin-top: 30px;
          }

          .columna {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-1 {
            justify-content: center;
          }

          .label-1 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .email {
            font-weight: bold;
            color: black;
          }

          .hola {
            margin-top: 30px;
            margin-left: 75px;
          }

          .guardado-1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 700px;
            height: 50px;
            margin-left: 70px;
            margin-top: 10px;
          }

          .columna-1 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-2 {
            justify-content: center;
          }

          .label-2 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .text {
            font-weight: bold;
            color: black;
          }

          .guardadoss {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 700px;
            height: 50px;
            margin-left: 70px;
            margin-top: 30px;
          }

          .columnas-2 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.centers-3 {
            justify-content: center;
          }

          .labels-3 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .number {
            font-weight: bold;
            color: black;
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
          <h4>Mis datos</h4>
        </div>
        <div className="contenedor">
          <h5>Datos de la cuenta</h5>
        </div>
        <div className="almacen">
          <div className="column">
            <span className="label">Usuario</span>
          </div>
          <div className="column center">
            <span className="username">Hau123XD</span>
          </div>
        </div>
        <div className="guardado">
          <div className="columna">
            <span className="label-1">Correo</span>
          </div>
          <div className="column center-1">
            <span className="email">exmaple.email.com</span>
          </div>
        </div>
        <div className="hola">
          <h5>Datos personales</h5>
        </div>
        <div className="guardado-1">
          <div className="columna-1">
            <span className="label-2">Nombre y apellido</span>
          </div>
          <div className="column center-2">
            <span className="text">Hau Pech</span>
          </div>
        </div>
        <div className="guardadoss">
          <div className="columnas-2">
            <span className="labels-3">Teléfono</span>
          </div>
          <div className="column centers-3">
            <span className="number">9908765434</span>
          </div>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default MisDatos;
