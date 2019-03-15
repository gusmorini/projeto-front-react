import React from 'react';

import { Table, Button } from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import { FaBitcoin, FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const DetailPanel = (props) => {

    let data = props.client;

    let type = 'pessoa física'
    let doc1 = 'CPF'
    let doc2 = 'RG'
    let birth = 'Nascimento'

    if (data.type != 1) {
        type = 'pessoa jurídica'
        doc1 = 'CNPJ'
        doc2 = 'I.E'
        birth = 'Fundação'
    }

    return (
        <div className="detail-panel">

            <h1>{data.name} </h1>
            <h2>End: {data.end}  Tel: {data.tel}</h2>
            <h2>{data.email}</h2>
            <h2>{birth} : {data.birth}</h2>
            <h2>{doc1} : {data.doc1}</h2>
            <h2>{doc2} : {data.doc2}</h2>

            <p>
                <Button outline color="danger"> <FaTrashAlt></FaTrashAlt> Desativar</Button>
                <Button outline color="primary"> <FaPencilAlt></FaPencilAlt> Editar </Button>
            </p>

        </div>
    );

}

export default DetailPanel;