import React, { useState } from "react";

function CarritoDeCompra() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = [...productos];
    nuevosProductos.splice(index, 1);
    setProductos(nuevosProductos);
  };

  return (
    <div>
      <h1>Carrito de Compra</h1>

      <div className="productos">
        {productos.map((producto, index) => (
          <div key={index} className="producto">
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </div>
        ))}
      </div>

      <div className="agregar-producto">
        <h2>Agregar Producto</h2>
        <input type="text" placeholder="Nombre del producto" />
        <input type="number" placeholder="Precio del producto" />
        <button onClick={() => agregarProducto({ nombre: "Producto nuevo", precio: 10 })}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default CarritoDeCompra;
