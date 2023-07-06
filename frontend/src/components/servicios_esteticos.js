import React from "react";
import { Link } from "react-router-dom";
import ServicioCita from "./servicio";
import QuienesSomos from './quienes_somos';
import Contactos from './contacto';
import Configuracion from './configuraciones';
import CarritoDeCompra from './carrito';
import Comentario from './comenarios';
import Notificacion from './notificacion';

function ServiciosEsteticos() {
    return(
        <>
  <title>Paquete de servicios</title>
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
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.php">
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
          <Link to="/quienes_somos" className="nav-link active" aria-current="page">
              ¿Quienes somos?
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/contacto" className="nav-link active" aria-current="page">
              Contactos
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/configuraciones" className="nav-link active" aria-current="page">
              Configuraciones
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/carrito" className="nav-link active" aria-current="page">
              Carrito
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/comenarios" className="nav-link active" aria-current="page">
              Comentarios
          </Link>
          </li>
          <li className="nav-item">
          <Link to="/notificacion" className="nav-link active" aria-current="page">
              Notificaciones
          </Link>
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
    <div className="container">
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-3">
          <div className="card square-card">
            <center>
              <h4>Servicio 1</h4>
            </center>
            <img
              src="assets/img/pexels-gustavo-fring-6816869.jpg"
              className="card-img-top gif-img"
              alt="Imagen Clasificación"
            />
            <div className="card-body">
              <h5 className="card-title">
                -BAÑOS- Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </h5>
              <Link to="/servicio" className="btn btn-dark">
                  Hacer reserva
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card square-card">
            <center>
              <h4>Servicio 2</h4>
            </center>
            <img
              src="assets/img/pexels-anna-shvets-3683074.jpg"
              className="card-img-top gif-img"
              alt="Imagen Clasificación"
            />
            <div className="card-body">
              <h5 className="card-title">
                -CORTE DE PELO- Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </h5>
              <Link to="/servicio" className="btn btn-dark">
                  Hacer reserva
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card square-card">
            <center>
              <h4>Servicio 3</h4>
            </center>
            <img
              src="assets/img/pexels-ermelinda-maglione-6560380.jpg"
              className="card-img-top gif-img"
              alt="Imagen Alimentación"
            />
            <div className="card-body">
              <h5 className="card-title">
                -CORTE DE UÑA- Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.
              </h5>
              <Link to="/servicio" className="btn btn-dark">
                  Hacer reserva
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

    );

}

export default ServiciosEsteticos;