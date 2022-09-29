import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "./login";
import logo from '../fotos/Redondosinfondo.png';


function NavUsuario() {
 
  
    return (   
         <Navbar className="navdeco" sticky="top">
      <Container>
        <img src={logo} alt="logo" width="100px"/>
        <Navbar.Brand href="#home">LUCKY </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
       <LoginButton/>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>);
  };


export default NavUsuario;


