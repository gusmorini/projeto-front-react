import React, { Component } from 'react';
// pages
import UsuarioPage from './UsuarioPage';
import { isAutenticado } from '../utils/LoginManager';
import { Table, Alert } from 'reactstrap';

import { clientFindAll } from '../utils/Api';

import { DebounceInput } from 'react-debounce-input';

class HomePage extends Component {

  constructor(props) {
    super(props);
    // this.state = { aut: isAutenticado(), erros: null };
    this.state = {
      clientList: [],
      search: "",
    };

    // busca a lista de clientes na API
    this.clientList = () => {
      clientFindAll(this.state.search)
        .then(res => {
          this.setState({ clientList: res.data });
        })
    }

  }

  componentDidMount() {
    this.clientList();
    this.setState({ search: "" });
  }

  componentDidUpdate(oldProps, oldState) {
    const { search } = this.state;
    if (search !== oldState.search) {
      this.clientList();
    }
  }

  render() {

    let clients = this.state.clientList;

    return (<div>

      <h1>Clientes teste 1</h1>

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


