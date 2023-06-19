import React from "react";
import Layout from "../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Policy Page"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStadxt5SfOhwjkTBtH8_zrvxVX1yICVIT8dw&usqp=CAU"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1>Privacy Policy</h1>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h3>Other legal requirements</h3>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
Protect and defend the rights or Protect of the Company
If you have any questions about this Privacy Policy, You can contact us:</p>
<p>By visiting this page on our website: <a href="https://www.vibemart.com/contact" rel="external nofollow noopener" target="_blank">https://www.vibemart.com/contact</a></p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;