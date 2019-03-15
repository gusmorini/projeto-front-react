import React, { Component } from 'react';
// pages
import UsuarioPage from './UsuarioPage';
import { isAutenticado } from '../utils/LoginManager';
import { Table, Alert, Button } from 'reactstrap';

import { clientFind, clienFindById } from '../utils/Api';

import { DebounceInput } from 'react-debounce-input';

import { Link } from 'react-router-dom';

import ClientTable from '../components/ClientTable';

class Clients extends Component {

  constructor(props) {
    super(props);
    // this.state = { aut: isAutenticado(), erros: null };
    this.state = {
      list: [],
      search: "",
    };

    // busca a lista de clientes na API
    this.find = () => {
      clientFind(this.state.search)
        .then(res => {
          this.setState({ list: res.data });
        })
    }

    this.findById = (id) => {
      clienFindById(id).then(res => console.log(res.data));
    }

  }

  componentDidMount() {
    this.find();
    this.setState({ search: "" });
  }

  componentDidUpdate(oldProps, oldState) {
    const { search } = this.state;
    if (search !== oldState.search) {
      this.find();
    }
  }

  render() {

    return (<div>

      <h1>Clientes <Link to="/register" >+</Link> </h1>



      {/* <Input onChange={this.search} value={this.state.search} placeholder="busca fácil" /> */}

      {/* DebounceInput cria um campo de busca com timeout para eviar bugs */}
      <DebounceInput
        className="form-control"
        placeholder="busca fácil"
        minLength={2}
        debounceTimeout={300}
        onChange={event => this.setState({ search: event.target.value })}
      />

      {
        // verifica se a lista de clientes existe e é maior que zero
        this.state.list && this.state.list.length > 0 ?
          (<ClientTable td={this.state.list}></ClientTable>) :
          (<Alert color='warning'>nada encontrado</Alert>)
      }

    </div>);
  }
}

export default Clients;


