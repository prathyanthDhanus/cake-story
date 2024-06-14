import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "../styles/home_product.css";

const Homepage_Caption = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="caption-container">
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
