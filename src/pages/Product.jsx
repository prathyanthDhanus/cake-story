import React from 'react';
import ReusableCard from '../components/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const cardData = [
    {
      title: "Cakes",
      text: `Celebrate Every Moment with Our Irresistible Cakes!`,
      imgSrc: "https://i.pinimg.com/736x/d1/47/19/d1471922d8e699388696289a9ba0192d.jpg", 
      alt:"cake",
      buttonText: "Explore✨",
      buttonLink: "https://web.whatsapp.com/"
    },
    {
      title: "Desserts",
      text: `Delight in Every Bite with Our Delectable Desserts!`,
      imgSrc: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Cherry-Delight-Dessert_EXPS_TOHcom23_27515_P2_MD_03_22_4b.jpg", 
      alt:"desserts",
      buttonText: "Explore✨",
      buttonLink: "https://www.instagram.com/"
    },
    {
      title: "Doughnuts",
      text: `Experience Pure Joy with Our Delightful Doughnuts!`,
      imgSrc: "https://www.thesugarandspice.com/cdn/shop/products/chocolatedoughnut_600x600_crop_center.png?v=1658226530", 
      alt:"doughmuts",
      buttonText: "Explore✨",
      buttonLink: "https://www.facebook.com/"
    },
    {
      title: "Shakes",
      text: `Sip Happiness with Our Creamy, Dreamy Shakes!`,
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcx3CbbUUmlf9ruo1Je1ZqR4rYPO6kWGh3HtPnNqh60MBw4hA5xduDK7ZeFZv6I2iA9pY&usqp=CAU", 
      alt:"shakes",
      buttonText: "Explore✨",
      
    },
    {
      title: "Juices",
      text: `Refresh Your Day with Our Freshly Squeezed Juices!`,
      imgSrc: "https://d2wdttfod93r0n.cloudfront.net/BrandCategoryMapping/juices_0144202454234AM.png", 
      alt:"juices",
      buttonText: "Explore✨",
     
    },
    {
      title: "Pasteries",
      text: `Savor the Sweetness with Our Heavenly Pasteries!`,
      imgSrc: "https://www.sonibakers.com/uploaded_files/products/21-aug-2018-67.jpg", 
      alt:"pasteries",
      buttonText: "Explore✨",
     
    },
   
  ];

const Product = () => {

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
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>Our Products</h1>
      </div>
      <Container >
        <Row  >
          {cardData.map((card, index) => (
            <Col md={4}  key={index} >
                <div className="p-4">

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

export default Product