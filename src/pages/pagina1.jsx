import '../styles/styles.css';

  function Pagina1() {
    return (
        <div>
        <head>
            <title>Módulo Administrador de Productos</title>
        </head>
        <body>
                      
            <h1 className="title">Administración de Productos</h1>
            
                <form action="forma">
                    <label htmlFor="text">Identificador Unico Producto   </label>
                    <input type="Number" />
                </form>            
                <form action="forma">
                    <label htmlFor="fname">Descripción Producto   </label>
                    <input type="text" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Valor Unitario   </label>
                    <input type="number" />
                </form>
                <form action="forma">
                <label htmlFor="text">Estado  </label>
                <select>
                  <option>Disponible </option>
                  <option>No Disponible</option>
                </select>
                </form>
                <button class="Registrar"
                type="button">
                Registrar
                </button>
                &nbsp;
                <button class="Listar"
                type="button">
                Listar
                </button>  
                &nbsp; 
                <button class="Buscar"
                type="button">
                Buscar
                </button> 
                &nbsp;
                <button class="Actualizar"
                type="button">
                Actualizar
                </button>                            
        </body>            
        </div>
        
               
    );
  }
  
  export default Pagina1;