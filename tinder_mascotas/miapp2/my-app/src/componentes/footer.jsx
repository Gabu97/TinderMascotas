import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='footercss'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                LUCKY
              </h6>
              <p>
                Plataforma dinámica e interactiva para adoptar o encontrar hogar para las mascotas.
Descarga nuestra Mobile App y únete a la comunidad virtual de mascotas ! 
Juntos podemos salvar a nuestros mejores amigos que necesitan un hogar. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Desarrollado con</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Javascript
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Node JS
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Auth0
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Sobre nosotros</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Contáctanos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ayuda
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Atención al cliente
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Términos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Política
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Privacidad
                </a>
              </p>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Edifici Centre Esplai, Carrer del Riu Anoia, 44, 54, 08820 El Prat de Llobregat, Barcelona
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                luckychange@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />9326587458
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor:'white' }}>
      LUCKY Copyright &copy; 2022, All Right Reserved 
      </div>
    </MDBFooter>
  );
}


export default Footer;