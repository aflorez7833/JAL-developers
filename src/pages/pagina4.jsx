
import '../styles/stylesali.css';


function Pagina4() {
    return (
        <div>
        <head>
            <title>Módulo Administración de Ventas</title>
        </head>
        <body>
                           
            <h1 className="title">Administracion De Ventas</h1>
            
                <form action="forma">
                    <label htmlFor="text">Ingrese La Fecha de La Venta   </label>
                    <input type="date" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Codigo Vendedor   </label>
                    <input type="Number" />
                </form>            
                <form action="forma">
                    <label htmlFor="fname">Nombre y Apellidos del Cliente   </label>
                    <input type="text" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Numero de Identificacion   </label>
                    <input type="number" />
                </form>
                <form action="forma">
                    <label htmlFor="email">Email Cliente  </label>
                    <input type="email" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Numero del Pedido   </label>
                    <input type="number" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Valor Total del Pedido   </label>
                    <input type="currency" />
                </form>
                <form action="forma">
                    <label htmlFor="text">Ingrese Fecha de Pago   </label>
                    <input type="date" />
                </form>
                <form action="forma">
                    <input type="submit" />
                </form>
                        
        </body>            
        </div>
        
               
    );
  }
  
  export default Pagina4;