import{Link} from 'react-router-dom';


function PaginaP() {
    return (
      <div className="PaginaP">
          <h1 className="textAlign">Página de inicio</h1>
          <input type="checkbox" className="checkbox" id="check"></input>
          <label className="menu" for="check">|||</label>
          <div className="left-panel">
        <ul>
            <Link to='/pagina1'><li>Módulo 1</li></Link>
            <Link to=''><li>Módulo 2</li></Link>
            <Link to=''><li>Módulo 3</li></Link>
            <Link to=''><li>Módulo 4</li></Link>
        </ul>
    </div>
      </div>
    );
  }
  
  export default PaginaP;