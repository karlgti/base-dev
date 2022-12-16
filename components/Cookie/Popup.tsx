import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import CookieConsentForm from "./ConsentForm";

type Props = {
  agreedDisclaimer: boolean;
};

const CookiePopup = ({ agreedDisclaimer }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [cookie, setCookie] = useCookies(["consent"]);
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    if (agreedDisclaimer && !cookie.consent) {
      setShowPopup(true);
    }
    console.log(cookie.consent)
  }, [agreedDisclaimer]);

  const handleAccept = () => {
    const consentForm = {
      necessary: true,
      performance: true,
      functionality: true,
      targeting: true,
    };
    setCookie("consent", consentForm, {
      path: "/",
      secure: true,
      maxAge: 0,

    });
    setShowPopup(false);
  };
  // console.log("cookie: ", cookie);
  return (
    <>
      {/* <button className='fixed bottom-0' onClick={() => setShowPopup(!showPopup)}>
        {showPopup ? "BYE" : "HELLO"}
      </button> */}
      <div
        className={
          "fixed bottom-0 w-full -ml-[50%] px-12 py-6 flex flex-col lg:flex-row lg:w-[60rem] h-auto lg:h-56 bg-white left-1/2 lg:-ml-[30rem] transition-all ease-in-out duration-500 " +
          (showPopup ? "translate-y-0 visible" : " translate-y-full invisible")
        }
      >
        <div className='w-full mb-6 lg:w-9/12'>
          <div className='mb-3 text-lg font-medium'>USE OF COOKIES</div>
          <div className='space-y-2 text-sm'>
            <p>
              BASE respects the privacy of your personal data. We use cookies to
              analyse website traffic and to provide personalised content on our
              website. By clicking the “Accept All” button, you agree to the
              storing of cookies on your device or choose not to allow some
              types of cookies with the “Cookie Settings” button. For more
              information, please see our Privacy Policy.
            </p>
            <p>
              By continuing to use our website, you agree to the storing of
              cookies on your device for these purposes. For more information,
              please see our Privacy Policy.
            </p>
          </div>
        </div>

        <div className='flex justify-between w-full space-x-2 lg:items-end lg:justify-end lg:space-y-4 lg:flex-col lg:w-3/12'>
          <button
            className='flex items-center justify-center w-48 h-16 font-bold transition-all duration-300 ease-in-out bg-white border text-primary-blue border-primary-blue '
            onClick={() => {
              setShowConsent(true);
              setShowPopup(false);
            }}
          >
            Cookies Settings
          </button>
          <button
            className='flex items-center justify-center w-48 h-16 font-bold text-white transition-all duration-300 ease-in-out border border-primary-blue bg-primary-blue '
            onClick={handleAccept}
          >
            Accept All
          </button>
        </div>
      </div>
      <CookieConsentForm
        showModal={showConsent}
        setShowModal={setShowConsent}
      />
    </>
  );
};

export default CookiePopup;
