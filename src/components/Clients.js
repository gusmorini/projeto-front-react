import React from 'react';
import { Table, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import { FaUserAlt, FaPhone, FaFolderOpen, FaFileAlt } from "react-icons/fa";

import ModalExample from './ModalExample';

export const ClientTable = (props) => {

    return (
        <div>
            <Table>
                <tr>
                    <th><FaUserAlt></FaUserAlt> cliente </th>
                    <th><FaPhone></FaPhone> telefone</th>
                    <th width='120'><FaFileAlt /> cadastro </th>
                </tr>
                {/* lista o corpo da tabela */}
                {props.td.map((key, index) =>
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.tel}</td>
                        <td>
                            <Link to={`/record/${key.id}`}>abrir</Link>
                        </td>
                    </tr>
                )}
            </Table>
        </div>
    );

}

const clientForm = (props) => {
    return (
        <div>

        </div>
    )
}

export const ModalRegister = (props) => {

    let ModalBody = (`teste.....`);
    let ModalFooter = (<Button color='primary' >teste</Button>);

    return (
        <div>
            <ModalExample
                buttonLabel="teste"
                color="primary"
                title="Novo Cliente"
                ModalBody={ModalBody}
                ModalFooter={ModalFooter}

            />
        </div>
    );

}

//export default ClientTable;