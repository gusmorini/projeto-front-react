import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import LoginPage from './LoginPage';

import Menu from "../components/Menu";
import PrivateRoute from '../components/PrivateRoute';
import TarefasPage from './TarefasPage';

import { isAutenticado, setAutenticado } from '../utils/LoginManager';

class App extends Component {

  constructor(props) {
    super(props);

  }


  render() {

    return (
      <BrowserRouter>
        <Container>
          <header>
            <h1>teste </h1>
          </header>


          <div>
            {/* <Menu LoginLogout={this.LoginLogout} /> */}
            <Switch>
              {/* Routes */}
              <Route path="/" exact component={HomePage} />
              {/* <PrivateRoute path="/tarefas" component={TarefasPage} /> */}
              {/* <Route path="/login" exact component={LoginPage} /> */}
              {/* URL erro 404  */}
              <Route render={() => {
                return (
                  <div>Página não encontrada</div>
                );
              }} />
            </Switch>
          </div>




        </Container>
      </BrowserRouter>
    );
  }
}
export default App;

// Olhar Ant Design e Office UI Fabric