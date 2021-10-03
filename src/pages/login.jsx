import{Link} from 'react-router-dom';

function Login() {
    return (
      <div className="Login">
          <header>
          <h1 className="textAlign">Página de ingreso</h1>
          </header>
        
        <div className="container">
        <label className="label-email">Email</label><br></br>
        <input type="email" name="email" id="email" className="user-email" placeholder="your email"></input><br></br>
        <label className="label-pwd">Contraseña</label><br></br>
        <input type="password" name="pwd" id="pwd" className="password" placeholder="your password"></input><br></br>
        <Link to='/paginaP'>
        <button>Login</button>
        </Link>
        </div>
       
       
        </div>
    
 
    );
  }
  
  export default Login;