import React, { Component } from 'react';
import { Table, Input, FormGroup, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { recordFindByClientId, clienFindById, recordAdd } from '../utils/Api';
import { Link } from 'react-router-dom';
import DetailPanel from '../components/DetailPanel';
import DetailRecord from '../components/DetailRecord';

class Record extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            modal: false,
        };

        this.toggle = this.toggle.bind(this);

        this.findById = (id) => {
            clienFindById(id)
                .then(res => {
                    this.setState({ client: res.data })
                })
        }

        this.findRecord = (id) => {
            recordFindByClientId(id)
                .then(res => this.setState({ record: res.data }))
        }

        this.onChange = (e) => {
            this.setState({ [e.target.name]: e.target.value })
        }

        this.onSubmit = (e) => {

            e.preventDefault();
            let { date, description, value, note } = this.state;
            let clientId = this.state.id;

            recordAdd({ date, description, value, note, clientId })
                .then(res => {
                    document.getElementById('register').reset();
                    this.toggle();
                    this.findRecord(this.state.id);
                })
        }

    }



    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount(props) {

        this.findById(this.state.id);
        this.findRecord(this.state.id);

    }

    componentDidUpdate(oldProps, oldState) {

    }

    render() {

        let { client, record } = this.state;

        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return client !== undefined && (
            <div>
                <h1>Cliente</h1>
                <DetailPanel client={client}></DetailPanel>

                <h1>Débitos</h1>

                {record && record.length > 0 ? (
                    <DetailRecord record={record} clientId={this.state.id}></DetailRecord>
                ) : (
                        <Alert color='warning'>nada encontrado</Alert>
                    )}

                <Button color="primary" onClick={this.toggle}>Adicionar</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Adicionar</ModalHeader>
                    <ModalBody>
                        <form id="register">
                            <Input type="date" name="date" onChange={this.onChange}></Input>
                            <FormGroup>
                                <Input type="textarea" name="description" placeholder="descrição" onChange={this.onChange} />
                            </FormGroup>
                            <Input name="value" placeholder="valor" onChange={this.onChange} />
                            <FormGroup>
                                <Input type="textarea" name="note" placeholder="anotação" onChange={this.onChange} />
                            </FormGroup>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>Salvar</Button>{' '}
                        {/* <Button color="secondary" onClick={this.toggle}>Cancelar</Button> */}
                    </ModalFooter>
                </Modal>

            </div>);
    }
}

export default Record;


