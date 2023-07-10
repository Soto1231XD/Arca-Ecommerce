import React from "react";  
import { Link } from "react-router-dom";
import PagoConfirmado from "./pago_confirmado";
import CarritoDeCompra from "./carrito";
import logo from '../assets/img/leon.png';

function PasarelaPago() {
    return (
        <>
  <title>Title</title>
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
          <Link to="/carrito" className="nav-link active" aria-current="page">
              Regresar
          </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main className="flex-shrink-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12">
          <h4>Detalles de pago</h4>
          <div lcass="row">
            <div className="col-10">
              <div id="paypal-button-container" />
              <div className="d-grid gap-2">
              <Link to="/pago_confirmado" className="btn btn-dark">
                  Pagar con Paypal
              </Link>
              <Link to="/pago_confirmado" className="btn btn-dark">
                  Pagar con tarjeta de Credito o Debito
              </Link>
              <Link to="/pago_confirmado" className="btn btn-dark">
                  Pagar con Mercado Pago
              </Link>
              </div>
            </div>
          </div>
          <div lcass="row">
            <div className="col-10 text-center">
              <div className="checkout-btn" />
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Subtotal</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Collar Isabelino</td>
                  <td>
                    1 x $<b>14.99 MXN</b>
                  </td>
                </tr>
                <tr>
                  <td>Champú Hipoalergénico</td>
                  <td>
                    1 x $<b>12.99 MNX</b>
                  </td>
                </tr>
                <tr>
                  <td>Cortaúñas</td>
                  <td>
                    1 x $<b>9.50 MNX</b>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <p className="h3 text-end" id="total">
                      $37.38 MXN
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default PasarelaPago;