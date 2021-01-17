import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Beanies from './components/beanies/Beanies';
import Facemasks from './components/facemasks/Facemasks';
import Gloves from './components/gloves/Gloves';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/products/gloves">
            <Gloves />
          </Route>
          <Route path="/products/facemasks">
            <Facemasks />
          </Route>
          <Route path="/products/beanies">
            <Beanies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
