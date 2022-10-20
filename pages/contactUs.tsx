import React, { useEffect, useState } from "react";
import Header from "../components/contactMenu";
import Form from "../components/contactFrom";

function contactUs() {
  return (
    <div>
      <Header />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default contactUs;
