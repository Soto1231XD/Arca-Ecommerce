import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiComponente from './components/micomponente';
import ProductosEsteticos from './components/productos_esteticos';
import ProductosMedicinales from './components/productos_medicinales';
import ServiciosEsteticos from './components/servicios_esteticos';
import ServiciosMedicinales from './components/servicios_medicinales';
import ServicioCita from './components/servicio';
import QuienesSomos from './components/quienes_somos';
import Contactos from './components/contacto';
import Configuracion from './components/configuraciones';
import MisDatos from './components/datos';
import Seguri from './components/seguridad';
import Tarjeta from './components/tarjetas';
import Direcciones from './components/direccion';
import Comentario from './components/comenarios';
import Notificacion from './components/notificacion';
import VerProductosEsteticos from './components/ver_producto_estetico';
import CarritoDeCompra from './components/carrito';
import ConfirmarCita from './components/confirmar_cita';
import ConfirmacionServicio from './components/confirmacion_servicio';
import VerProductoMedicinal from './components/ver_producto_medicinales';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiComponente />} />
        <Route path="/productos_esteticos" element={<ProductosEsteticos />} />
        <Route path="/productos_medicinales" element={<ProductosMedicinales />} />
        <Route path="/servicios_esteticos" element={<ServiciosEsteticos />} />
        <Route path="/servicios_medicinales" element={<ServiciosMedicinales />} />
        <Route path="/servicio" element={<ServicioCita />} />
        <Route path="/quienes_somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="/configuraciones" element={<Configuracion />} />
        <Route path="/datos" element={<MisDatos />} />
        <Route path="/seguridad" element={<Seguri />} />
        <Route path="/tarjetas" element={<Tarjeta />} />
        <Route path="/direccion" element={<Direcciones />} />
        <Route path="/comenarios" element={<Comentario />} />
        <Route path="/notificacion" element={<Notificacion />} />
        <Route path="/ver_producto_estetico" element={<VerProductosEsteticos />} />
        <Route path="/carrito" element={<CarritoDeCompra />} />
        <Route path="/confirmar_cita" element={<ConfirmarCita />} />
        <Route path="/confirmacion_servicio" element={<ConfirmacionServicio />} />
        <Route path="/ver_producto_medicinales" element={<VerProductoMedicinal />} />
      </Routes>
    </Router>
  );
}

export default App;




