import React, { useEffect, useState } from "react";
import Header from "../components/contactMenu";
import Form from "../components/contactFrom";
import Footer from "components/footer";

function contactUs() {
  return (
    <div>
      <div className="">
        <Form />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default contactUs;
