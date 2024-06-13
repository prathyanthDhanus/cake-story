import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Homepage_Caption = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} md={6} lg={12} xl={12}>
          <div
            style={{
              clipPath: `polygon(10% 6%, 91% 29%, 88% 46%, 58% 44%, 100% 56%, 46% 54%, 90% 66%, 0 51%, 5% 7%, 46% 22%)`,

              height: "30rem",
              background: "rgb(11,1,6)",
              background:
                "linear-gradient(0deg, rgba(11,1,6,1) 0%, rgba(184,15,91,0.9894082633053222) 78%)",
            }}
          >
            <h2
              style={{
                paddingTop: "110px",
                paddingLeft: "2rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              <span style={{ color: "white", fontSize: "5rem" }}>❝</span>Indulge
              in Sweet Perfection - Where Every Slice Tells a Story
              <span style={{ color: "white", fontSize: "5rem" }}>❞</span>
            </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage_Caption;
