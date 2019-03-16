import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color={this.props.color} onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                    <ModalBody>
                        {this.props.ModalBody}
                    </ModalBody>
                    <ModalFooter>
                        {this.props.ModalFooter}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;