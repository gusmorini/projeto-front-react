import React from 'react';
import { Table, } from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import { FaUserAlt, FaPhone, FaFolderOpen, FaFileAlt } from "react-icons/fa";

export const ClientTable = (props) => {

    return (
        <div>
            <Table>
                <tr>
                    <th><FaUserAlt></FaUserAlt></th>
                    <th><FaPhone></FaPhone></th>
                    <th width='100'><FaFileAlt></FaFileAlt></th>
                </tr>
                {/* lista o corpo da tabela */}
                {props.td.map((key, index) =>
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.tel}</td>
                        <td>
                            <Link to={`/record/${key.id}`}>ficha</Link>
                        </td>
                    </tr>
                )}
            </Table>
        </div>
    );

}

//export default ClientTable;