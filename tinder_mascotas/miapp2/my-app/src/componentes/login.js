import React from 'react';
/*import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';*/
import {useAuth0} from '@auth0/auth0-react';



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="botonlogin" onClick={() => loginWithRedirect()}>Inicia sesión</button>;
};

export default LoginButton;


/*function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Inicia sesión
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inicia sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password"  />
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
}*/
