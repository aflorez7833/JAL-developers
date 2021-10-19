import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Productos from 'pages/admin/Productos';
import Login from 'pages/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import { GoogleLogin } from 'react-google-login';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);
  const responseGoogle=(respuesta)=>{
    console.log(respuesta);
  }

  return (
    <div className='App'>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Switch>
            <Route path={['/admin', '/admin/productos']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/productos'>
                    <Productos />
                  </Route>
                  <Route path='/admin'>
                    <Admin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route path={['/login', '/registro']}>
              <AuthLayout>
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/registro'>
                    <Registro />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            <Route path={['/']}>
              <PublicLayout>
                <Route path='/'>
                  <Index />
                </Route>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </DarkModeContext.Provider>
      <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  );
}

export default App;