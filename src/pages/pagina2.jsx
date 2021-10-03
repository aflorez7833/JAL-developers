import '../styles/stylesjhonny.css'
import fv from '../media/vendedor.png'
import fa from '../media/administrador.png'

function Pagina2() {
    return (
      <div className="GU">
          <h1>Getión de usuarios</h1>
          <img id='vendi' src={fv} alt="vendedor" />
          <img id='admi' src={fa} alt="administrador" />
          <div>su estado actual es  es: pendiente/autorizado/no autorizado</div>
          <span>Actualizar</span> 
      </div>
    );
  }
  
  export default Pagina2;
