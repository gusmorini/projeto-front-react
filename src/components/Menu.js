import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import {
    Link,
    withRouter,
} from 'react-router-dom';

const Menu = (props) => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <Link className="nav-link" to="/"> Clientes </Link>
                </NavItem>
                {/* <NavItem>
                    <Link className="nav-link" to="/register"> Cadastro </Link>
                </NavItem> */}
            </Nav>
        </div>
    );

}

export default withRouter(Menu);