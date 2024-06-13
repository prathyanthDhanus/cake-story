import React from 'react';
import ReusableCard from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import {productData }from "../productData/productData";
import { useParams } from 'react-router-dom';



const ProductView = () => {

    const {category} = useParams();
    
    const filteredData = productData.filter((item)=>item.category===category);
   
    
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
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>{filteredData[0].category}</h1>
      </div>
      <Container >
        <Row  >
          {filteredData.map((card, index) => (
            <Col md={4}  key={index} >
                <div className="p-5">

              <ReusableCard 
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                
                />
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductView