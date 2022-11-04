import React, { useEffect, useState } from "react";
import Header from "../components/contactMenu";
import Form from "../components/contactFrom";
import Footer from "components/footer";

function contactUs() {
  return (
    <div>
      <Header />
      <div className="">
        <Form />
      </div>
    </div>
  );
}

export default contactUs;
