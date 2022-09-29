/* eslint-disable array-callback-return */
//Dependencia TinderCard Import ↧
import TinderCard from "react-tinder-card";
//Bootstrap Import ↧
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { People } from "./People";
import { useAuth0 } from "@auth0/auth0-react";
import { Barramatch } from "./barramatches";
import { Tarjetas } from "./tarjetas";
const host = "http://localhost:3000/FotosCards/";

function Search() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let id_tarjetas = [];

  Tarjetas.map((personas, index) => {
    id_tarjetas.push(personas.id);
  });

  let cantidad_ids = id_tarjetas.length;

  const handleShow = () => setShow(true);
  const [smShow, setSmShow] = useState(false);
  const { user } = useAuth0();

  const CardDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-top: 10%;
  `;

  const ImgDiv = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    margin-top: 19rem;
    width: 500px;
    height: 500px;
    background-size: cover;
    border-radius: 20px;
  `;

  const Img = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    border-radius: 50%;
    margin-right: 1rem;
  `;

  const ImgDivModal = styled.div`
    width: 150px;
    height: 150px;
    background-size: cover;
    background-repeat: no-repeat;
    float: center;
    border-radius: 50%;
    margin-right: 1rem;
  `;

  const onSwipe = (direction) => {
    let user_logid = "";
   
    People.map((person) => {
      if (person.correoElectronico == user.email) {
        
        user_logid = person.id;
      }
    });

    if (direction == "right") {
      const url = "http://localhost:3001/api/likes";
      const data = {
        usuarioid1: user_logid,
        usuarioid2: id_tarjetas[cantidad_ids - 1],
        estado: 1,
      };

      cantidad_ids--;

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      console.log(JSON.stringify(data));
    } else if (direction == "left") {
      const url = "http://localhost:3001/api/likes";
      console.log(id_tarjetas[cantidad_ids])
      const data = {
        usuarioid1: user_logid,
        usuarioid2: id_tarjetas[cantidad_ids - 1],
        estado: 0,
      };

      cantidad_ids--;

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
      console.log(JSON.stringify(data));
    }
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    <>
      <Container>
        <Row>
          <Col xl={6} sm={12}>
            <div className="tinderCards__cardContainer">
              <CardDiv>
                {Tarjetas.map((personas, index) => {
                  return (
                    <TinderCard
                      key={index}
                      className="swipe"
                      onSwipe={onSwipe}
                      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                      preventSwipe={["up", "down"]}
                    >
                      <ImgDiv
                        style={{
                          backgroundImage: `url(${host + personas.fotoPerfil})`,
                        }}
                        bg={host + personas.fotoPerfil}
                      >
                        <h1
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "30px",
                            left: "5px",
                            fontSize: "25px",
                            fontWeight: "bold",
                            padding: "10px",
                            textShadow: "4px 4px 8px black",
                          }}
                        >
                          {personas.nombre}
                        </h1>

                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0px",
                            left: "10px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            fontFamily:
                              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif ",
                            padding: "5px",
                            margin: "10px",
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "5rem",
                            boxShadow: "1px 1px 8px black",
                          }}
                        >
                          {personas.fechaNacimiento}
                        </p>

                        <p
                          style={{
                            color: "white",
                            position: "absolute",
                            bottom: "0px",
                            left: "120px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            fontFamily:
                              "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif ",
                            padding: "5px",
                            margin: "10px",
                            background: "rgba(0, 0, 0, 0.5)",
                            borderRadius: "5rem",
                            boxShadow: "1px 1px 8px black",
                          }}
                        >
                          {personas.descripcion}
                        </p>
                      </ImgDiv>
                    </TinderCard>
                  );
                })}
              </CardDiv>
              <h1 className="int">
                Si es lo que buscabas, desliza hacia la derecha, si no, a la
                izquierda para que otros usuarios puedan verlo!
              </h1>
            </div>
          </Col>

          <Col xl={6} sm={12} className="Menu">
            <Row className="botones">
              <h1 className="tusmatches">TUS MATCHES!</h1>
            </Row>
            <Row>
              <Col id="Matches">
                {Barramatch.map((persona, index) => {
                  return (
                    <>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="matchesbtn"
                      >
                        <ImgDiv
                          sm={6}
                          xl={3}
                          className="matchesmns"
                          style={{
                            backgroundImage: `url(${
                              host + persona.fotoPerfil
                            })`,
                            width: "150px",
                            height: "150px",
                            padding: "0",
                            margin: "10px",
                          }}
                          bg={host + persona.fotoPerfil}
                        >
                          <p className="Text_Card_match">{persona.nombre}</p>
                        </ImgDiv>
                      </Button>

                      <Modal
                        className="modal perfil"
                        size="lg"
                        key={index}
                        show={show}
                        onHide={handleClose}
                      >
                        <Modal.Header className="modal_header" closeButton>
                          <Modal.Title className="modal_text">
                            Más sobre {persona.nombre}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form>
                            <Form.Group
                              className="mb-3 form_group text-center"
                              controlId="exampleForm.ControlInput"
                            >
                              <Row>
                                <Col xl={12}>
                                  <ImgDivModal
                                    style={{
                                      backgroundImage: `url(${
                                        host + persona.fotoPerfil
                                      })`,
                                    }}
                                    bg={host + persona.fotoPerfil}
                                  ></ImgDivModal>
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group
                              className="mb-3 form_group"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Row>
                                <Col xl={6}>
                                  <h5 className="ModalMatch">Nombre: </h5>
                                  <Form.Label className="ModalMatch2">
                                    {" "}
                                    {persona.nombre}
                                  </Form.Label>
                                </Col>

                                <Col xl={6}>
                                  <h5 className="ModalMatch">
                                    Fecha de nacimiento:{" "}
                                  </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.fechaNacimiento}
                                  </Form.Label>
                                </Col>
                              </Row>
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput2"
                            >
                              <Row>
                                <Col xl={6}>
                                  <h5 className="ModalMatch">
                                    Correo electrónico{" "}
                                  </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.correoElectronico}
                                  </Form.Label>
                                </Col>

                                <Col xl={6}>
                                  <h5 className="ModalMatch">
                                    Número de contacto{" "}
                                  </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.numeroTelefono}
                                  </Form.Label>
                                </Col>
                              </Row>
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput3"
                            >
                              <Row>
                                <Col xl={6}>
                                  <h5 className="ModalMatch">Dirección: </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.direccion}
                                  </Form.Label>
                                </Col>
                                <Col xl={6}>
                                  <h5 className="ModalMatch">
                                    Código postal:{" "}
                                  </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.codigoPostal}
                                  </Form.Label>
                                </Col>
                              </Row>
                            </Form.Group>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput4"
                            >
                              <Row>
                                <Col xl={12}>
                                  <h5 className="ModalMatch">Descripción: </h5>
                                  <Form.Label className="ModalMatch2">
                                    {persona.descripcion}
                                  </Form.Label>
                                </Col>
                              </Row>
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput6"
                            >
                              <Row>
                                <Col xl={12}>
                                  <Button
                                    className="btncontacta"
                                    onClick={() => setSmShow(true)}
                                  >
                                    Contacta conmigo!
                                  </Button>
                                  <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered
                                  >
                                    <Modal.Header
                                      closeButton
                                      className="modalheader"
                                    >
                                      <Modal.Title id="contained-modal-title-vcenter">
                                        <h1 className="nombreusuariochat">
                                          {persona.nombre}
                                        </h1>{" "}
                                        <Img
                                          style={{
                                            backgroundImage: `url(${
                                              host + persona.fotoPerfil
                                            })`,
                                          }}
                                          bg={host + persona.fotoPerfil}
                                        ></Img>
                                      </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlInput1"
                                        >
                                          <Form.Label className="btnizq">
                                            Hola me interesa tu mascota
                                          </Form.Label>
                                          <br></br>
                                          <Form.Label className="btnderecha">
                                            Hola podrías hablarme más de ti?
                                          </Form.Label>
                                          <br></br>
                                          <Form.Label className="btnizq">
                                            Sí! Vivo en un piso bajo con terraza
                                            en las afueras de Barcelona
                                          </Form.Label>
                                          <br></br>
                                          <Form.Label className="btnderecha">
                                            Perfecto justo lo que buscaba!
                                          </Form.Label>
                                          <br></br>
                                          <Form.Label className="btnizq">
                                            Nos intercambiamos nuestros números
                                            de teléfono?
                                          </Form.Label>
                                          <Form.Control
                                            type="etext"
                                            placeholder="Escribe aquí tu mensaje"
                                            autoFocus
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button
                                        className="chatchat"
                                        variant="secondary"
                                        onClick={handleClose}
                                      >
                                        Enviar
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Col>
                              </Row>
                            </Form.Group>
                          </Form>
                        </Modal.Body>
                      </Modal>
                    </>
                  );
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Search;
