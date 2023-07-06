import React from "react";
import { Link } from "react-router-dom";

function Seguri() {
  return (
    <>
      <title>Seguridad</title>
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
          .contenedor {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .almacen {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 1050px;
            height: 50px;
            margin-left: 150px;
          }

          .column {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center {
            justify-content: center;
          }

          .correo {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .email {
            font-weight: bold;
            color: black;
            margin-right: 440px;
          }

          .almacen-1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 1050px;
            height: 50px;
            margin-left: 150px;
            margin-top: 30px;
          }

          .column-1 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-1 {
            justify-content: center;
          }

          .text {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .username {
            font-weight: bold;
            color: black;
            margin-right: 475px;
          }

          .almacen-2 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 1050px;
            height: 50px;
            margin-left: 150px;
            margin-top: 30px;
          }

          .column-2 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-2 {
            justify-content: center;
          }

          .text-2 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .password {
            font-weight: bold;
            color: black;
            margin-right: 475px;
          }

          .almacen-3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 1050px;
            height: 50px;
            margin-left: 150px;
            margin-top: 30px;
          }

          .column-3 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-3 {
            justify-content: center;
          }

          .text-3 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .text-3-1 {
            font-weight: bold;
            color: black;
            margin-right: 475px;
          }

          .almacen-4 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 1050px;
            height: 50px;
            margin-left: 150px;
            margin-top: 30px;
          }

          .column-4 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .column.center-4 {
            justify-content: center;
          }

          .text-4 {
            margin-right: 1px;
            margin-left: 50px;
            color: black;
          }

          .number {
            font-weight: bold;
            color: black;
            margin-right: 475px;
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
        <div className="contenedor">
          <h4>Seguridad</h4>
        </div>
        <div className="almacen">
          <div className="column">
            <span className="correo">Correo</span>
          </div>
          <div className="column center">
            <span className="email">example.email.com</span>
          </div>
        </div>
        <div className="almacen-1">
          <div className="column-1">
            <span className="text">Usuario</span>
          </div>
          <div className="column center-1">
            <span className="username">Hau123XD</span>
          </div>
        </div>
        <div className="almacen-2">
          <div className="column-2">
            <span className="text-2">Contraseña</span>
          </div>
          <div className="column center-2">
            <span className="password">************</span>
          </div>
        </div>
        <div className="almacen-3">
          <div className="column-3">
            <span className="text-3">Dipositivos vinculados</span>
          </div>
          <div className="column center-3">
            <span className="text-3-1">Windows 10 </span>
          </div>
        </div>
        <div className="almacen-4">
          <div className="column-4">
            <span className="text-4">Verificacion de dos pasos</span>
          </div>
          <div className="column center-4">
            <span className="number">9987654323 </span>
          </div>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Seguri;
