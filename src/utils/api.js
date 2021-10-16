import axios from 'axios';

const executeRequest = async (options, resCallback, errCallback) => {
  await axios.request(options).then(resCallback).catch(errCallback);
};

// CRUD VEHICULOS

export const crearProductos = async (data, resCallback, errCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/productos/nuevo/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await executeRequest(options, resCallback, errCallback);
};

export const obtenerProductos = async (resCallback, errCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/productos/' };
  await executeRequest(options, resCallback, errCallback);
};

export const actualizarProducto = async (id, data, resCallback, errCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/productos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await executeRequest(options, resCallback, errCallback);
};

export const eliminarProducto = async (id, resCallback, errCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/productos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await executeRequest(options, resCallback, errCallback);
};

