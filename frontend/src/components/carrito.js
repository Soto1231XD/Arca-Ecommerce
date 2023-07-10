import React from "react";
import { Link } from "react-router-dom";
import QuienesSomos from './quienes_somos';
import Contactos from './contacto';
import Configuracion from './configuraciones';
import Comentario from './comenarios';
import Notificacion from './notificacion';
import PasarelaPago from "./pasarela_pago";
import logo from '../assets/img/leon.png';

function CarritoDeCompra() {
  return(
    <>
  <title>carrito</title>
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
      <a className="navbar-brand" href="home.php">
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
    <main className="container">
      <table className="table table-bordeless border-ligth">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Imagen</th>
            <th scope="col">cantidad</th>
            <th scope="col">articulo</th>
            <th scope="col">precio</th>
            <th scope="col">total</th>
            <th scope="col">borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>imagen</td>
            <td>1</td>
            <td>Collar Isabelino</td>
            <td>14.99 MXN</td>
            <td>14.99 MXN</td>
            <td>Borrar</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>imgen</td>
            <td>1</td>
            <td>Champú Hipoalergénico</td>
            <td>12.99 MXN</td>
            <td>12.99 MXN</td>
            <td>Borrar</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Imagen</td>
            <td>1</td>
            <td>Cortaúñas</td>
            <td>9.50 MNX</td>
            <td>9.50 MXN</td>
            <td>Borrar</td>
          </tr>
        </tbody>
      </table>
      <table className="table table-bordeless border-ligth">
        <tbody>
          <tr>
            <th scope="col">Total(MXN)</th>
            <td> 37.38 MXN</td>
          </tr>
        </tbody>
      </table>
      <center>
      <Link to="/pasarela_pago" className="btn btn-dark">
                  Pasar a pagar
              </Link>
      </center>
    </main>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

  );
}

export default CarritoDeCompra;
