import React from "react";

import { Link } from "react-router-dom";
import ProductosMedicinales from "./productos_medicinales";

function VerProductoMedicinal() {
    return(
        <>
  <title>Detalle del producto medicinal</title>
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
  <link rel="stylesheet" href="assets/css/cuadrado.css" />
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
              <h1>Producto</h1>
            </a>
          </li>
          <li className="nav-item">
          <Link to="/productos_medicinales" className="nav-link active" aria-current="page">
              Regresar
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card square-card" style={{ width: '70%', height: 'auto', maxWidth: '500px', padding: '20px', marginLeft: '700px' }}>
          <center>
            <title>Descripcion</title>
            <h1>Producto Medicinal</h1>
            <h4>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h4>
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

export default VerProductoMedicinal;