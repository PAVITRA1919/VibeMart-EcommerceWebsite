import React from "react";
import Layout from "../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - VibeMart"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://blog.advesa.com/wp-content/uploads/2019/11/about-us-page.png"
            alt="about us"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          At VibeMart, we believe that shopping should be an experience that brings joy, inspiration, and a touch of excitement to your life. We are an innovative and customer-centric ecommerce platform that aims to provide you with a seamless and enjoyable shopping journey.
          At VibeMart, we handpick every item in our catalog with meticulous care, ensuring that they meet our stringent quality standards. We collaborate with trusted suppliers and brands, ensuring that you receive products that are authentic, durable, and worth every penny. 
          Thank you for choosing VibeMart. We look forward to being your trusted companion on your shopping adventures.Happy shopping!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;