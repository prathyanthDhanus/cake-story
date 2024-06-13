
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook ,faGoogle} from '@fortawesome/free-brands-svg-icons';
import "../styles/footer.css";


const FooterComponent = () => {
  return (
    <footer  style={{  position: 'relative',
    bottom: 0,
    width: '100%', background: 'linear-gradient(0deg, rgba(11,1,6,1) 0%, rgba(105,12,54,1) 78%)', padding: '20px' }}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <h5 className='footer-h5'>🚀 Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/" target="instagram" rel="noopener noreferrer">
                  
                  <FontAwesomeIcon icon={faInstagram} className='footer-icons' />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" target="facebook" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className='footer-icons'/>
               
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.google.com/" target="google" rel="noopener noreferrer">
               
                <FontAwesomeIcon icon={faGoogle} className='footer-icons' />
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5 className='footer-h5'>🎯 Address</h5>
            <p className='footer-mail'>
              CAKE STORY<br />
              Opp. ABC Complex<br />
              XYZ Road<br />
              Kerala - 6700XX
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5 className='footer-h5'>📧 Mail Us</h5>
            <p >
              <a href="mailto:cakestory@gmail.com" className='footer-mail' >
                cakestory@gmail.com
              </a>
            </p>
            <h5 className='footer-h5'>Call Us</h5>
            <p className='footer-mail' >
            <h6> 📞 Tel : 0497 27669XX</h6>
            <h6>☎️  Mob : 98956570XX</h6>
              </p>
          </Col>
         
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;