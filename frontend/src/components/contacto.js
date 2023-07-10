import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/leon.png';

function Contactos() {
  const containerStyle = {
    backgroundColor: "gray",
    padding: "20px",
    height: "400px",
  };

  const columnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    marginTop: "50px",
    marginLeft: "250px",
  };

  const spanStyle = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    marginRight: "250px",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <>
      <title>Contactos</title>
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
          <a className="navbar-brand">
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
                <a className="nav-link active" aria-current="page">
                  <h1>Contactos</h1>
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
        <div style={containerStyle} className="container">
          <div style={columnStyle} className="column">
            <span style={spanStyle}>Correo electrónico:</span>
            <span style={spanStyle}>correo@example.com</span>
          </div>
          <div style={columnStyle} className="column">
            <span style={spanStyle}>Teléfono:</span>
            <span style={spanStyle}>1234567890</span>
          </div>
          <div style={columnStyle} className="column">
            <span style={spanStyle}>Facebook:</span>
            <span style={spanStyle}>
              <a href="https://www.facebook.com/Marco.Hau.581/" style={linkStyle}>
                Tu Página en Facebook
              </a>
            </span>
          </div>
          <div style={columnStyle} className="column">
            <span style={spanStyle}>Instagram:</span>
            <span style={spanStyle}>
              <a href="https://www.instagram.com/marco_ia/" style={linkStyle}>
                Tu Página en Instagram
              </a>
            </span>
          </div>
          <div style={columnStyle} className="column">
            <span style={spanStyle}>Twitter:</span>
            <span style={spanStyle}>
              <a href="https://www.twitter.com/MARCO93777615" style={linkStyle}>
                Tu Página en Twitter
              </a>
            </span>
          </div>
        </div>
      </main>
      <footer>{/* place footer here */}</footer>
      {/* Bootstrap JavaScript Libraries */}
    </>
  );
}

export default Contactos;
