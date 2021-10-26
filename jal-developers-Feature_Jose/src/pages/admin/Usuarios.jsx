import React, { useState, useEffect } from 'react'
import { Table, Button, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditModalUsuario from 'components/ModuloUsuario';
import { nanoid } from 'nanoid'
import { obtenerUsuarios } from 'utils/usuarios/api';

const Usuarios = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(data);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  
  const [showEditModal, setShowEditModal] = useState(false);

 
  const editFn = (item) => {
    setShowEditModal(true);
    setItem(item);
  }
  const loadAxios = async () => {
    await obtenerUsuarios(resp => {
      const nuewData = []
      const dataAxios = resp.data

      dataAxios.map(item => {
        nuewData.push(
          {
            _id: item._id,
            usuario: item.email,
            rol: item.rol,
            estado: item.estado
          },
        )
      })
      setData(nuewData)
    });
  }
  useEffect(() => {
    if (ejecutarConsulta) {
      loadAxios();
    }
  }, [ejecutarConsulta]);
  return (
    <>
      <Container>
        <br />
        <div className="flex justify-between">
          <div className="w-2/4">
            <div className="border-2 rounded-xl mt-4">
              <span className="w-1/12"><i className="fa fa-search"></i></span>
              <input type="search" className="w-11/12 py-1" placeholder="Search..." />
            </div>
          </div>
          <button>
          </button>
        </div>
        <br />
        <br />
        <Table responsive className="tabla">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={nanoid()}>
                <td>{item._id.slice(20)}</td>
                <td>{item.usuario}</td>
                <td>{item.rol}</td>
                <td>{item.estado}</td>
                <td>
                  <Button color="primary" onClick={() => editFn(item)}><i className="far fa-edit"></i></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <EditModalUsuario showEditModal={showEditModal} setShowEditModal={setShowEditModal} setData={setData} data={data} item={item} />
    </>
  )
}

export default Usuarios
