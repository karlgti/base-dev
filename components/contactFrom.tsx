import React, { useState } from "react";
import Footer from "./footer";
import Button from "../components/backToTop";

export default function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [yourself, setYourself] = useState("");
  const [interested, setInterested] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Submit");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (lastName.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          firstname: firstname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");

        // Reset form fields
        setFirstname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      // Reset form fields
      setFirstname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(firstname, email, subject, message);
  };
  return (
    <div>
      <main className="pt-[5rem] border-grey border-t-4 mx-[10%]">
        <header className=" grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="mb-10">
            <h1 className="text-8xl mt-4 text-[#001673]">Contact </h1>
            <p className="text-lg text-black mt-14 font-light">
              Thank you for your interest!
            </p>
            <p className="text-lg text-black mt-4 font-light">
              Please complete the form below and we’ll be in touch as soon as
              possible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h1 className="text-2xl text-red-500">(*Mandatory data)</h1>
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div>
                <label
                  htmlFor="fullname"
                  className="text-black-500 font-light mt-8 dark:text-black"
                >
                  First Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  name="fullname"
                  className="bg-white border w-[100%] py-2 pl-4 text-black-500"
                />
                {/* {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )} */}
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="text-black-500 font-light mt-8 dark:text-black"
                >
                  Last Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  name="fullname"
                  className="bg-white border w-[100%] py-2 pl-4 text-black-500"
                />
              </div>
            </div>
            {/* {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )} */}
            <label
              htmlFor="subject"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Company Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={companyTitle}
              onChange={(e) => {
                setCompanyTitle(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )} */}
            <label
              htmlFor="email"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Company Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )} */}

            <label
              htmlFor="subject"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Company Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )} */}
            <label
              htmlFor="subject"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Country Region<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={countryRegion}
              onChange={(e) => {
                setCountryRegion(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )} */}
            <label
              htmlFor="subject"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              How would you describe yourself?
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={yourself}
              onChange={(e) => {
                setYourself(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )} */}
            <label
              htmlFor="subject"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Which services are you interested in?
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={interested}
              onChange={(e) => {
                setInterested(e.target.value);
              }}
              className="bg-white border py-2 pl-4  text-black-500"
            />
            {/* {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )} */}
            <label
              htmlFor="message"
              className="text-black-500 font-light mt-4 dark:text-black"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="bg-white border py-10 pl-4  text-black-500"
            ></textarea>
            {/* {errors?.message && (
              <p className="text-red-500">Message body cannot be empty.</p>
            )} */}
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="px-10 mt-8 py-2 bg-[#130F49] text-white font-light text-lg flex flex-row items-center"
              >
                {buttonText}
              </button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </header>
        <div className="border-6 borderlack grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="mb-10 md:mt-20"></div>
          <div>
            Address <br />
            Rm 1904, Tung Che Commercial Centre, 246 Des Voeux Road West, Hong
            Kong
          </div>
        </div>
      </main>
      <div className="my-10">
        <Button />
      </div>
      <Footer />
    </div>
  );
}
