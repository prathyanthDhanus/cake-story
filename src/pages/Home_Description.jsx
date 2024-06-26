import React from "react";
import CarouselComponent from "../components/Carousels";
import Home_Product from "./Home_Product";
import "../styles/home_description.css";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const images = [
  {
    src: "https://www.shutterstock.com/image-photo/celebration-birthday-cake-colorful-sprinkles-600nw-2275503965.jpg",
    alt: "Image 1",
  },
  {
    src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTEwL3JtNDY3YmF0Y2g1LXNjZW5lLWgtMDA1Yy14LmpwZw.jpg",
    alt: "image2",
  },
  {
    src: "https://t4.ftcdn.net/jpg/03/98/87/59/360_F_398875973_mt8RQRetLLhlQEI2n4Tayxo07cXnhhoK.jpg",
    alt: "Image 3",
  },
];

//framer motion properties
const cardVariants = {
  offscreen: {
    y: 250,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.8,
    },
  },
};
//-----------------------

const Home_Description = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            {/* -------------------------- home page first portion start ------------------------- */}
            <motion.div
              className="mt-3 p-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <h2>The fascinating story of the most loved</h2>
                <h2>bakery brand in Kerala</h2>
                <p className="pt-3">
                  From humble beginnings in the heart of Kerala, our Cake Studio
                  has blossomed into a beloved household name, capturing the
                  hearts of cake enthusiasts across the region. Our journey is
                  one of passion, tradition, and innovation, where age-old
                  recipes meet modern flair. Each cake we craft is a testament
                  to our commitment to quality, made with the finest ingredients
                  and an extra touch of love. Join us in savoring the sweet
                  legacy that has made us Kerala's favorite destination for
                  delectable delights.
                </p>
              </motion.div>
            </motion.div>
          </Col>
          {/* -------------------------- home page first portion end ------------------------- */}

          {/* ---------------------------- home page image start ---------------------------- */}

          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <motion.div
              className="mt-3 p-4"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={cardVariants}>
                <div className="p-2">
                  <img
                    src="https://assets.bonappetit.com/photos/59c924da3b3bf713cb63808a/16:9/w_4143,h_2330,c_limit/1017%20WEB%20WEEK1068.jpg"
                    alt="cake"
                    className="image"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Col>
          {/* ---------------------------- home page image end ---------------------------- */}
        </Row>
      </Container>

      {/* ----------------------- carousel partition start --------------------------- */}
      <div className="carousel-container">
        <h3 style={{ textAlign: "center", padding: "2rem", color: "white" }}>
          Our Signature Products
        </h3>
        <CarouselComponent images={images} />
      </div>

      {/* ----------------------- carousel partition end ---------------------------  */}

      {/* ---------------------- why our product portion start  ------------------------- */}
      <div>
        <Home_Product />
      </div>
      {/* ---------------------- why our product portion end  ------------------------- */}
    </>
  );
};

export default Home_Description;
