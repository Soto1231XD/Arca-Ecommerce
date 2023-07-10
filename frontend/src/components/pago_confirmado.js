import React from "react";
import { Link } from "react-router-dom";
import MiComponente from "./micomponente";

function PagoConfirmado () {
    return(
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
  <main>
    <center>
      <div className="col-md-3">
        <div className="container">
          <h1>Gracias por su compra</h1>
          <p>Su pedido ha sido procesado exitosamente.</p>
          <p>¡Apreciamos su preferencia!</p>
          <Link to="/" className="btn btn-dark">
                  Volver al Inicio
              </Link>
        </div>
      </div>
    </center>
  </main>
  <footer>{/* place footer here */}</footer>
  {/* Bootstrap JavaScript Libraries */}
</>

    );
}

export default PagoConfirmado;