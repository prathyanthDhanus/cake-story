import React from "react";
import "../styles/home_product.css";
import Homepage_Caption from "./Homepage_Caption";
import { Container, Row, Col } from "react-bootstrap";

const Home_Product = () => {
  return (
    <>
      <Container>
        <Row>
           {/* -------------------- col for head and description start-------------------- */}
          <Col xs={12} sm={6} md={6} lg={6} xl={12}>
            <div style={{ textAlign: "center", margin: "3rem" }}>
              <h3>Why our products are the best?</h3>
              <p>
                Cake Story offers a wide range of tasty bakery products at
                affordable pricing. Our products are made from
              </p>
              <p style={{ marginTop: "-1rem" }}>
                quality raw materials with exceptional baking quality.
              </p>
            </div>
          </Col>
          {/* ----------------------- col for head and description end ------------------------ */}
          {/* ----------------------- col for left side description ------------------------ */}

          <Col xs={12} sm={6} md={6} lg={6} xl={4}>
            <div className="p-4">
              <div className="d-flex">
                <div className="image-description-div1">
                  <h1 className="image-description-h1">01</h1>
                </div>
                <div className="image-description-div2">
                  <h4>Modern baking culture</h4>
                  <p>
                    Cake Story is one of the finest bakers in Kerala and the
                    first one to introduce modern baking methods, including live
                    cake making.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="d-flex">
                <div className="image-description-div1">
                  <h1 className="image-description-h1">02</h1>
                </div>
                <div className="image-description-div2">
                  <h4>Healthy and hygienic</h4>
                  <p>
                    At Cake Story, we give no compromise on maintaining a
                    healthy and hygienic atmosphere for baking our products.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="d-flex">
                <div className="image-description-div1">
                  <h1 className="image-description-h1">03</h1>
                </div>
                <div className="image-description-div2">
                  <h4>Internationally inspired recipes</h4>
                  <p>
                    Our partners travelled to many countries to experience the
                    quality of international recipes to bring home the
                    inspiration.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* ------------------------- col for left side description -------------------------- */}
          {/* ----------------------------- image col start ---------------------------- */}
          <Col xs={12} sm={6} md={6} lg={6} xl={4}>
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/previews/029/250/076/original/cartoon-style-birthday-cake-dessert-no-background-applicable-to-any-context-perfect-for-print-on-demand-merchandise-ai-generative-png.png"
                alt="cake image"
                style={{
                  maxWidth: "100%", // make image responsive
                  height: "auto", // maintain aspect ratio
                  margin: "2rem auto",
                }}
              />
            </div>
          </Col>
          {/* ----------------------------- image col end ---------------------------- */}
          {/* ----------------------------- right side col start ---------------------------- */}
          <Col xs={12} sm={6} md={6} lg={6} xl={4}>
            <div>
              <div className="p-4">
                <div className="d-flex">
                  <div className="image-description-div1">
                    <h1 className="image-description-h1">04</h1>
                  </div>
                  <div className="image-description-div2">
                    <h4>Quality appliances</h4>
                    <p>
                      We use the latest and finest machinery and appliances to
                      bake quality and delicious products for our customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="d-flex">
                  <div className="image-description-div1">
                    <h1 className="image-description-h1">05</h1>
                  </div>
                  <div className="image-description-div2">
                    <h4>Finest raw materials</h4>
                    <p>
                      We use only the finest and purest raw materials imported
                      from foreign countries to bake the best quality bakeries.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="d-flex">
                  <div className="image-description-div1">
                    <h1 className="image-description-h1">06</h1>
                  </div>
                  <div className="image-description-div2">
                    <h4>Affordable pricing</h4>
                    <p>
                      Even with all the specialities and expensive raw
                      materials, we sell our products at affordable pricing for
                      our customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* ----------------------------- right side col end ---------------------------- */}
        </Row>
      </Container>
      {/* ------------------------ parent div for image and description end ------------------------ */}
      <div>
        <Homepage_Caption />
      </div>
    </>
  );
};

export default Home_Product;
