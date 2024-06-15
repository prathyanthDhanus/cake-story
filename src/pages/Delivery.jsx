import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { motion } from "framer-motion";

const Delivery = () => {
  const easeInOut = [0.6, 0, 0.2, 1]; // Custom easing curve

  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "ease",
        duration: 2,
        ease: easeInOut, // Apply the custom easing curve
      },
    },
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#690C36",
          height: "5rem",
          padding: "5rem",
        }}
      >
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>Delivery</h1>
      </div>

      {/* --------------------- delivery container div  ------------------------------ */}
      <Container>
        {/* delivery agent image div */}
        <Row>
          <Col xs={12} sm={6} md={6} lg={6} xl={6}>
            <motion.div
              variants={cardVariants}
              initial="offscreen"
              animate="onscreen"
            >
              <img
                src="https://img.freepik.com/premium-vector/    express-delivery-logo-design-vector-template_441059-205.jpg"
                alt="delivery agent"
                className="w-100"
              />
            </motion.div>
          </Col>
          {/* image div end */}
          <Col>
            <motion.div
              className="mt-lg-5 pt-xl-5"
              variants={cardVariants}
              initial="offscreen"
              animate="onscreen"
            >
              <div className="p-3">
                <h2>Experienced Delivery Agents</h2>
                <p>
                  At our Cake Story, we understand that the journey of your cake
                  is just as important as its creation. That's why we employ
                  only the most experienced delivery agents, dedicated to
                  ensuring your order arrives fresh, intact, and on time. With
                  meticulous attention to detail and a deep understanding of our
                  products, our delivery team guarantees that every cake is
                  handled with the utmost care. Whether it's a birthday
                  surprise, a wedding centerpiece, or a simple treat, you can
                  trust our seasoned professionals to deliver your moments of
                  joy right to your doorstep.
                </p>
                <p>
                  At our Cake Story, we understand that the journey of your cake
                  is just as important as its creation. That's why we employ
                  only the most experienced delivery agents, dedicated to
                  ensuring your order arrives fresh, intact, and on time. With
                  meticulous attention to detail and a deep understanding of our
                  products, our delivery team guarantees that every cake is
                  handled with the utmost care. Whether it's a birthday
                  surprise, a wedding centerpiece, or a simple treat, you can
                  trust our seasoned professionals to deliver your moments of
                  joy right to your doorstep.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      {/*---------------------- delivery charges div ----------------------*/}
      <div
        style={{
          background: `linear-gradient(0deg, rgba(248,124,180,1) 3%, rgba(232,192,210,1) 44%, rgba(232,192,210,1) 95%)`,
        }}
      >
        <h2 style={{ textAlign: "center", paddingTop: "2rem" }}>
          Delivery Charges
        </h2>
        <Container>
          {/* delivery charges table div */}
          <Row>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Table
                striped
                bordered
                hover
                style={{ border: "2px solid #690C36", marginTop: "3rem" }}
              >
                <tbody>
                  <tr>
                    <td>Within 10 K.Ms</td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td>Within 20 K.Ms</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Within 30 K.Ms</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Within 40 K.Ms</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>40 K.Ms to 80 K.Ms</td>
                    <td>500</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            {/* delivery charges table div end */}

            {/* svg icon div */}

            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <svg
                id="sw-js-blob-svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
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
                        fontSize: 5,
                        color: "#fff",
                        margin: 0,
                        padding: 15,
                      }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: "7px" }}>
                        Free 🚚 Delivery!!!!!!!!!
                      </span>
                      <br />
                      With in 10 K.M
                    </p>
                  </div>
                </foreignObject>
              </svg>
            </Col>

            {/* svg icon end */}
          </Row>
        </Container>
      </div>
      {/* --------------------- delivery charges div end--------------------- */}
      {/* --------------------- delivery container div end  ------------------------------ */}
    </>
  );
};

export default Delivery;
