import React from "react";
import { Link } from "react-router-dom";

function Direcciones() {
  return (
    <>
      <title>Direcciones</title>
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
      <link rel="stylesheet" href="assets\css\direccion.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
      <style>
        {`
          .contenedor {
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
            width: 900px;
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

          .almacenes-1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: gray;
            padding: 10px;
            color: white;
            width: 900px;
            height: 100px;
            margin-left: 300px;
            margin-top: 50px;
          }

          .columnes-1 {
            flex: 1;
            display: flex;
            align-items: center;
          }

          .labels-1 {
            margin-right: 1px;
            margin-left: 250px;
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
        <div className="contenedor">
          <h4>Dirección</h4>
        </div>
        <div className="almacenes">
          <i
            className="bi bi-house-door-fill text-black"
            style={{ fontSize: 50, marginLeft: 15 }}
          />
          <div className="columnes">
            <span className="labels">
              BENITO JUAREZ 416, PALMA City: Palma State/province/area:
              MONCLOVA-CIUDAD FRONTE Phone number
              887.632-0087/878.782-7701/887.632-0087 code 2573
            </span>
          </div>
        </div>
        <div className="almacenes-1">
          <div className="columnes-1">
            <span className="labels-1">Agregar dirección</span>
          </div>
          <i className="bi bi-plus text-black" style={{ fontSize: 50 }} />
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Direcciones;
