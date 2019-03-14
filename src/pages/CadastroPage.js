import React, { Component } from 'react';
import { Alert, Input, Button, FormGroup, Label, Row, Col } from 'reactstrap';
import { clientRegister } from '../utils/Api';
import { FaUserAlt, FaAt, FaMoneyCheck, FaKey, FaCalendarAlt } from "react-icons/fa";
import { copyFile } from 'fs';
import { Link } from 'react-router-dom';

class CadastroPage extends Component {

  constructor(props) {
    super(props);

    this.initialState()

  }

  initialState() {
    this.state = { type: 1 }
  }

  onSubmit = () => {

    clientRegister(this.state)
      .then(res => this.onReset())
      .catch(err => console.log(err))
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onReset = () => {
    this.initialState()
    document.getElementById('register').reset()
  }

  componentDidUpdate() {

  }

  render() {
    const { erros } = this.state
    let { type } = this.state
    return (
      <div>

        <h1>Novo cadastro</h1>

        <form id="register" method="post">

          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label>Tipo</Label>
                <Input type="select" name="type" onChange={this.onChange}>
                  <option value="1">Pessoa Física</option>
                  <option value="0">Pessoa Jurídica</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>{type == '1' ? 'Nascimento' : 'Inicio'}</Label>
                <Input name="birth" type="date" onChange={this.onChange} />
              </FormGroup>
            </Col>
          </Row>

          <Label>{type == 1 ? 'Nome' : 'Empresa'}  </Label>
          <Input name="name" onChange={this.onChange} required />

          {
            type == 1 ? (
              <div>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="cpf">CPF</Label>
                      <Input name='doc1' onChange={this.onChange} />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="rg">RG</Label>
                      <Input name='doc2' onChange={this.onChange} />
                    </FormGroup>
                  </Col>
                </Row>
              </div>
            ) : (
                <div>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="cnpj">CNPJ</Label>
                        <Input name='doc1' onChange={this.onChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="inscrição estadual">I.E</Label>
                        <Input name='doc2' onChange={this.onChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              )


          }

          <Label>Endereço</Label>
          <Input name="end" onChange={this.onChange} />

          <Label>Telefone</Label>
          <Input name="tel" onChange={this.onChange} />
          <Label>E-mail</Label>
          <Input name="email" type="email" onChange={this.onChange} />

          <Button outline color='warning' onClick={this.onReset}>Resetar</Button>

          <Button outline color='success' onClick={this.onSubmit}>Salvar</Button>

        </form>

        {/* <h1>Novo Usuário</h1>
        <form onSubmit={this.onSubmit}>
          <Button type="submit">Cadastrar</Button>
        </form> */}


        {/* //   "name": "Gustavo Morini",
      //   "end": "rua 123",
      //   "birth": "1987-08-29",
      //   "tel": "00000000",
      //   "email": "teste@teste",
      //   "type": 1,
      //   "doc1": "0000",
      //   "doc2": "00000" */}

      </div>
    )
  }
}

export default CadastroPage;



