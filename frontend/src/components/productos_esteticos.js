import React from 'react';
import { Link } from 'react-router-dom';
import MiComponente from './micomponente';
import VerProductosEsteticos from './ver_producto_estetico';
import QuienesSomos from './quienes_somos';
import Contactos from './contacto';
import Configuracion from './configuraciones';
import CarritoDeCompra from './carrito';
import Comentario from './comenarios';
import Notificacion from './notificacion';


function ProductosEsteticos() {
  // Aquí puedes agregar la lógica y el contenido de tu componente
  return (
    <>
  <title>Productos Esteticos</title>
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
  <link rel="stylesheet" href="assets/css/hipervinculos.css" />
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
  <main className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Imagen</th>
          <th scope="col">descripcion</th>
          <th scope="col">precio</th>
          <th scope="col">carrito</th>
          <th scope="col">ver</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <img src="assets/img/collar.png" width="15%" />
          </td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Agregar</td>
          <td>
          <Link to="/ver_producto_estetico" style={{ color: 'black', textDecoration: 'none' }}>producto</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>
            <img src="assets/img/collar.png" width="15%" />
          </td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Agregar</td>
          <td>
          <Link to="/ver_producto_estetico" style={{ color: 'black', textDecoration: 'none' }}>producto</Link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>
            <img src="assets/img/collar.png" width="15%" />
          </td>
          <td>@twitter</td>
          <td>@twi</td>
          <td>Agregar</td>
          <td>
          <Link to="/ver_producto_estetico" style={{ color: 'black', textDecoration: 'none' }}>producto</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

  );
}

export default ProductosEsteticos;

