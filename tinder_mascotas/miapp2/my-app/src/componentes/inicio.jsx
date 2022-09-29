import React from "react";
import "../App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Inicio() {
    return (
<div className="inicio">
<Row className="iniciorow">
  <Col xl={4} sm={12} >
    <h1 className="como">¿Cómo?</h1>
  <p className="textop">Seguro que te has encontrado en la situación de no poder quedarte con un animal o conoces a aguien que le busca hogar. 
  O bien, el hogar que tiene no es el adecuado para el, incluso has querido adoptar a uno pero no sabías donde o no tienes acceso a personas particulares que se encuentren en la situación anterior. Porque sí, desde 2018 se ha encontrado hogar solo a 150.000 de las 300.00 que habían.</p>
  <p className="textop">Por ello con nuestra app podrás de manera rápida y divertida encontrar o dejar la mascota que necesites y contactar con aquellas personas que no quieren dejarla en una protectora.</p>
  </Col>
  <Col xl={8} sm={12} className="imagen1"></Col>
</Row>
<Row className="iniciorow">
  <Col xl={6} sm={12} className="logo1"></Col>
  <Col xl={6} sm={12}>
  <h1 className="como">Sobre nosotros</h1>
  <p className="textop">Unimos tecnología digital y pasión y amor por los que también merecen una vida mejor. Gabi, Jordi y Héctor, los creadores de esta app, hemos conseguido que con un solo movimiento de ratón encuentres a tu compañero de vida, o bien, lo dejes en buenas manos.</p>
  <p className="textop"> LUCKY nace como proyecto que tiene como objetivo conseguir el hogar donde se cuide y quiera a nuestros amigos peludos.</p>
  </Col>
</Row>
<Row className="iniciorow">
  <Col >
    <h1 className="como1" >También puedes utilizar nuestra aplicación para acoger o ofrecerte como voluntario para ayudar, animar o pasear en centros cercanos a tu ubicación. Toda ayuda por pequeña que sea cuenta y para nosotros es significativa!</h1>
    
  </Col>
</Row>
</div>
  );
}
