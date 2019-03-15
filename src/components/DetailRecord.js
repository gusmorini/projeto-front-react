import React from 'react';

import { Table, Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import { FaBitcoin, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { ENETUNREACH } from 'constants';

const DetailRecord = (props) => {

    let data = props.record
    let clientId = props.clientId

    return (
        <div className="detail-record">

            <Table>

                <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Nota</th>
                    <th>Opções</th>
                </tr>


                {
                    data.map((item, i) =>
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td>R$ {item.value}</td>
                            <td>{item.note}</td>
                            <td>
                                <Link to={`/record/detail/${item.id}`}>abrir</Link>
                                {/* <Button outline size="sm" color="success"> <FaBitcoin></FaBitcoin></Button>
                                <Button outline size="sm" color="warning"> <FaPencilAlt></FaPencilAlt></Button>
                                <Button outline size="sm" color="danger"> <FaTrashAlt></FaTrashAlt></Button> */}
                            </td>
                        </tr>
                    )
                }

            </Table>

        </div>
    );

}

export default DetailRecord;