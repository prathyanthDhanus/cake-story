import React from 'react';
import "../styles/home_product.css";
import Homepage_Caption from './Homepage_Caption';

const Home_Product = () => {
  return (
    <>
      <div style={{ textAlign: "center", margin: "3rem" }}>
        <h3>Why our products are the best?</h3>
        <p>Cake Story offers a wide range of tasty bakery products at affordable pricing. Our products are made from</p>
        <p style={{ marginTop: "-1rem" }}>quality raw materials with exceptional baking quality.</p>
      </div>
      
      {/* --------------------------- parent div for image and description ------------------------ */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{width:"30%",height:"40rem"}}>
            <div style={{height:"30%",padding:"2rem"}}>
                <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>01</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Modern baking culture</h4>
                        <p>Cake Story is one of the finest bakers in Kerala and the first one to introduce modern baking methods, including live cake making.</p>
                    </div>
                </div>
                
                </div>
            <div style={{height:"30%",padding:"2rem"}}>
            <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>02</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Healthy and hygienic</h4>
                        <p>At Cake Story, we give no compromise on maintaining a healthy and hygienic atmosphere for baking our products.</p>
                    </div>
                </div>

            </div>
            <div style={{height:"40%",padding:"2rem"}}>

            <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>03</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Internationally inspired recipes</h4>
                        <p>Our partners travelled to many countries to experience the quality of international recipes to bring home the inspiration.</p>
                    </div>
                </div>
            </div>
        </div>
      {/* ----------------------------- image div start ---------------------------- */}
        <div style={{bwidth:"40%",height:"40rem"}}>
            
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
      {/* ----------------------------- image div end ---------------------------- */}
      <div style={{width:"30%",height:"40rem"}}>
            <div style={{height:"30%",padding:"2rem"}}>
                <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>04</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Quality appliances</h4>
                        <p>We use the latest and finest machinery and appliances to bake quality and delicious products for our customers.</p>
                    </div>
                </div>
                
                </div>
            <div style={{height:"30%",padding:"2rem"}}>
            <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>05</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Finest raw materials</h4>
                        <p>We use only the finest and purest raw materials imported from foreign countries to bake the best quality bakeries.</p>
                    </div>
                </div>

            </div>
            <div style={{height:"40%",padding:"2rem"}}>

            <div style={{display:"flex"}}>
                    <div className='image-description-div1' >
                        <h1 className='image-description-h1'>06</h1>
                    </div>
                    <div className='image-description-div2'>
                        <h4>Affordable pricing</h4>
                        <p>Even with all the specialities and expensive raw materials, we sell our products at affordable pricing for our customers</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      {/* ------------------------ parent div for image and description end ------------------------ */}
      <div>
        <Homepage_Caption/>
      </div>
    </>
  );
};

export default Home_Product;