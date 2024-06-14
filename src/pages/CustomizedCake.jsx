import React from 'react';
import ReusableCard from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
      title: "Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://www.yummycake.co.in/wp-content/uploads/2023/04/Parents-Anniversary-Cake.jpg", 
      alt:"cake",
      buttonText: "Explore✨",
      buttonLink: "https://web.whatsapp.com/"
    },
    {
      title: "Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://www.cakesquarechennaionline.com/wp-content/uploads/2023/09/anniversary-cake-50-1.jpg", 
      alt:"desserts",
      buttonText: "Explore✨",
      buttonLink: "https://www.instagram.com/"
    },
    {
      title: "Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://www.cta.ae/cdn/shop/products/FB_IMG_1613901176458_800x.jpg?v=1672842290", 
      alt:"doughmuts",
      buttonText: "Explore✨",
      buttonLink: "https://www.facebook.com/"
    },
    {
      title:"Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://cpimg.tistatic.com/06523896/b/4/Customised-Cake.jpg", 
      alt:"shakes",
      buttonText: "Explore✨",
      
    },
    {
      title:"Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://karowish.com/cdn/shop/files/WhatsAppImage2024-02-17at5.26.49PM.jpg?v=1708171947", 
      alt:"juices",
      buttonText: "Explore✨",
     
    },
    {
      title: "Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://obrownies.com/wp-content/uploads/2021/12/Custom-cake-17.jpg", 
      alt:"pasteries",
      buttonText: "Explore✨",
     
    },
   
  ];

const CustomizedCakes = () => {

  const navigate = useNavigate();
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
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>Customized Cakes</h1>
      </div>
      <Container >
        <Row  >
          {cardData.map((card, index) => (
            <Col md={4}  key={index} >
                <div className="p-5">

              <ReusableCard 
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
                buttonText={card.buttonText}
                // buttonLink={card.buttonLink}
                onClick={()=>navigate(`/view/products/${card.title}`)}
                />
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default CustomizedCakes