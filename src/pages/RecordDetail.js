import React, { Component } from 'react';
import { Table, Input, FormGroup, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { recordFindById } from '../utils/Api';
import { Link } from 'react-router-dom';
import DetailPanel from '../components/DetailPanel';
import RecordDetails from '../components/RecordDetails';

class RecordDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            modal: false,
        };


        this.getDados = (id) => {
            recordFindById(id)
                .then(res => this.setState({ details: res.data }))
        }


    }

    componentDidMount(props) {

        this.getDados(this.state.id);

    }

    componentDidUpdate(oldProps, oldState) {

    }

    render() {

        let details = this.state.details;

        console.log(details)

        return details != undefined && (
            <div>
                <h1>detalhes</h1>

                <p>Data: {details.date}</p>
                <p>Desc: {details.description}</p>
                <p>R$ {details.value}</p>
                <p>Nota: {details.note}</p>


            </div>);
    }
}

export default RecordDetail;


