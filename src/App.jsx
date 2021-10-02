

import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path='/pagina2'>
              <Pagina1 />
            </Route>
            <Route path='/'>
              <Pagina2 />
            </Route>
          </Switch>
        </Router>      
    </div>
  );
}

export default App;
