
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Aboutus = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#690C36",
          height: "5rem",
          padding: "5rem",
        }}
      >
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>About Us</h1>
      </div>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/536/500/non_2x/birthday-cake-happy-birthday-cake-birthday-cake-transparent-background-ai-generative-free-png.png"
              alt="cake image"
              style={{ width: "100%", height: "40rem" }}
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "41.9rem" }}
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stopColor="#690C36" offset="0%" />
                  <stop
                    id="stop2"
                    stopColor="rgba(239.561, 11.004, 114.223, 1)"
                    offset="100%"
                  />
                </linearGradient>
              </defs>
              <path
                fill="url(#sw-gradient)"
                d="M27.9,-27.3C35.6,-20.2,41,-10.1,41.3,0.3C41.6,10.8,36.9,21.5,29.2,26.1C21.5,30.8,10.8,29.3,0.4,28.9C-10,28.5,-20.1,29.3,-27.7,24.7C-35.3,20.1,-40.5,10,-38.9,1.6C-37.2,-6.7,-28.7,-13.5,-21.1,-20.6C-13.5,-27.7,-6.7,-35.1,1.7,-36.8C10.1,-38.5,20.2,-34.4,27.9,-27.3Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                style={{ transition: "all 0.3s ease 0s" }}
                stroke="url(#sw-gradient)"
              />
              <foreignObject x="10" y="20" width="80" height="60">
                <div xmlns="http://www.w3.org/1999/xhtml">
                  <p
                    style={{
                      fontSize: 2,
                      color: "#fff",
                      margin: 0,
                      padding: 15,
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "5px" }}>
                      Our Journey....
                    </span>
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </foreignObject>
            </svg>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{
              backgroundColor: "#690C36",
            }}
          >
            <div style={{ padding: "2rem" }}>
              <h2 style={{ color: "#ffff" }}>Our Mission</h2>
              <p style={{ color: "#ffff" }}>
                Our mission is to transform the eating habits of the Keralites
                by offering them unique bakery products made with quality raw
                materials and appliances. We take inspiration from international
                recipes, and we offer premium products at affordable prices.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundColor: "#690C36" }}
          >
            <div style={{ padding: "2rem" }}>
              <h2 style={{ color: "#ffff" }}>Our Vision</h2>
              <p style={{ color: "#ffff" }}>
                We have envisioned ourselves among one of the revolutionary
                bakers around the globe that set out on a longing journey for
                ideas that can revolutionize the baking culture in Kerala,
                driven by values of quality and international standards for the
                recipes and service.
              </p>
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundColor: "#690C36" }}
          >
            <div style={{ padding: "2rem" }}>
              <h2 style={{ color: "#ffff" }}>Our Quality</h2>
              <p style={{ color: "#ffff" }}>
                We give no compromise on quality for all the aspects of our
                business, right from the raw materials, appliances, recipes,
                products, and staff. It is our driving value for success that
                help us focus on delivering healthy products made from the
                hygiene production environment.
              </p>
            </div>
          </Col>
        </Row>
        <div style={{textAlign:"center",padding:"3rem"}}>

      
        <h2>Our Branches</h2>
        <div style={{display:"flex"}}>
          
        <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
           
          >
            <div style={{ padding: "2rem", display:"flex" ,}}>
               
              <h5 style={{padding:"1.5rem"}}>🧁KERALA</h5>
             
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
           
          >
             <div style={{ padding: "2rem", display:"flex" }}>
               
            <h5 style={{padding:"1.5rem"}}>🧁TAMILNADU</h5>
             
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
           
          >
             <div style={{ padding: "2rem", display:"flex" ,paddingTop:"3rem"}}>
                
            <h5 style={{paddingLeft:"1rem"}}>🧁KARNADAKA</h5>
             
            </div>
          </Col>

        </div>
        </div>
      </Container>
    </div>
  );
};

export default Aboutus;
