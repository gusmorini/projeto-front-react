import React from 'react';

import { Table, } from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import { FaEnvelope, FaPhoneSquare } from "react-icons/fa";

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
        <div>

            <Table>
                <tr><th>{data.name}</th></tr>
                <tr><td> {data.end}</td></tr>
                <tr><td> {data.tel}</td></tr>
                <tr><td> {data.email}</td></tr>
                <tr><td>{doc1} : {data.doc1}</td></tr>
                <tr><td>{doc2} : {data.doc2}</td></tr>
                <tr><td>{birth} : {data.birth}</td></tr>
            </Table>
        </div>
    );

}

export default DetailPanel;