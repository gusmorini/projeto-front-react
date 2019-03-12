import React, { Component } from 'react';
// pages
import UsuarioPage from './UsuarioPage';
import { isAutenticado } from '../utils/LoginManager';
import { Table, Input } from 'reactstrap';

import { clientFindAll } from '../utils/Api';

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

    this.search = (e) => {
      this.setState({ search: e.target.value });
      this.clientList();
    }

  }

  componentDidMount() {
    this.clientList();
    this.setState({ search: "" });
  }

  render() {

    console.log(this.state.clientList);

    let clients = this.state.clientList;

    return (<div>

      <h1>Clientes list</h1>

      <Input onChange={this.search} value={this.state.search} placeholder="busca fácil" />

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


    </div>);
  }
}

export default HomePage;


