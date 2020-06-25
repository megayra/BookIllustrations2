/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import RegisterForm from './RegisterForm';

const Register = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    // <div className="d-flex align-items-center ml-2">
    //   <Button color="success" onClick={toggle} className="btn-sm">{buttonLabel}</Button>
    //   <Modal isOpen={modal} toggle={toggle} >
    //     <ModalHeader toggle={toggle}>Register User</ModalHeader>
    //     <ModalBody>
    //         <RegisterForm/>
    //     </ModalBody>
    //     <ModalFooter>
    //     </ModalFooter>
    //   </Modal>
    // </div>
    <li className="nav-item">
      <a className="nav-link" onClick={toggle} href="#">{buttonLabel}</a>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>Registration</ModalHeader>
        <ModalBody>
          <RegisterForm/>
        </ModalBody>
      </Modal>
    </li>
  );
}

export default Register;