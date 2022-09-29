import React from 'react';
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
//import Modal from "react-bootstrap/Modal";

//import React from 'react';
/*import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';*/
import {useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {
 const { logout } = useAuth0();

 return <button className="botonlogin" onClick={() => logout({returnTo: window.location.origin})}>Log Out</button>;
};

export default LogoutButton;








/*function Registrate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Regístrate
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Regístrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Label>En que te podemos ayudar?</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="1">Quiero adoptar</option>
              <option value="2">Quiero dar en adopción</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Introduce tu nombre"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Entrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Registrate;*/
