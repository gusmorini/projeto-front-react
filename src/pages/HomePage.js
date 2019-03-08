import React, { Component } from 'react';
// pages
import UsuarioPage from './UsuarioPage';
import { isAutenticado } from '../utils/LoginManager';

class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {aut:isAutenticado(), erros:null};

    
  }

  render() {
    return (<UsuarioPage />);
  }
}

export default HomePage;


