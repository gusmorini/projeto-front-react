import React, { Component } from 'react';
// pages
import UsuarioPage from './UsuarioPage';
import { isAutenticado } from '../utils/LoginManager';
import { Table, Alert, Button } from 'reactstrap';

import { clientFind, clienFindById } from '../utils/Api';

import { DebounceInput } from 'react-debounce-input';

import { Link } from 'react-router-dom';

class HomePage extends Component {

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
    this.findById(5);
  }

  componentDidUpdate(oldProps, oldState) {
    const { search } = this.state;
    if (search !== oldState.search) {
      this.find();
    }
  }

  render() {

    let clients = this.state.list;

    return (<div>

      <h2>clientes</h2>

      {/* <Input onChange={this.search} value={this.state.search} placeholder="busca fácil" /> */}

      <DebounceInput
        className="form-control"
        placeholder="busca fácil"
        minLength={2}
        debounceTimeout={300}
        onChange={event => this.setState({ search: event.target.value })} />

      {
        clients && clients.length > 0
          ? (
            <Table>
              <tr>
                <th>nome</th>
                <th>endereço</th>
                <th>telefone</th>
              </tr>

              {
                clients.map((cli, index) =>
                  <tr>
                    <td>{cli.name}</td>
                    <td>{cli.end}</td>
                    <td>{cli.tel}</td>
                  </tr>
                )
              }

            </Table>
          ) : (
            <Alert color='warning'>nada encontrado</Alert>
          )
      }

    </div>);
  }
}

export default HomePage;


