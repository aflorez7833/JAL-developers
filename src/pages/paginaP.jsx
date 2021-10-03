import{Link} from 'react-router-dom';


function PaginaP() {
    return (
      <div className="PaginaP">
          <h1 className="textAlign">Página de inicio</h1>
          <input type="checkbox" className="checkbox" id="check"></input>
          <label className="menu" for="check">|||</label>
          <div className="left-panel">
        <ul>
            <Link to='/pagina1'><li>Módulo Administrador de Productos</li></Link>
            <Link to='/pagina2'><li>Getión de usuarios</li></Link>
            <Link to='/pagina4'><li>Módulo Administración de Ventas</li></Link>
        </ul>
    </div>
      </div>
    );
  }
  
  export default PaginaP;