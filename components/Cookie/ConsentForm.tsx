import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { Dialog, DialogActions } from "@material-ui/core";
import useWindowSize from "../../hook/useWindowSize";
import { useCookies } from "react-cookie";

const cookieConsent = [
  {
    title: "Strictly Necessary Cookies",
    body: "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.",
  },
  {
    title: "Analytical/Performance Cookies",
    body: "These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it.",
  },
  {
    title: "Functionality Cookies",
    body: "These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region etc.).",
  },
  {
    title: "Targeting Cookies",
    body: "These cookies record your visit to our website, the pages you have visited and the links you have followed.",
  },
];

type Props = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

const CookieConsentForm = ({ showModal, setShowModal }: Props) => {
  const size = useWindowSize();
  const [onMobile, setOnMobile] = useState(false);
  const [clickedConsent, setClickedConsent] = useState<Array<boolean>>([
    true,
    true,
    true,
    true,
  ]);
  const [cookie, setCookie] = useCookies(["consent"]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (size.width < 1024) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    }
  }, [size]);

  const handleSubmit = () => {
    const consentForm = {
      necessary: clickedConsent[0],
      performance: clickedConsent[1],
      functionality: clickedConsent[2],
      targeting: clickedConsent[3],
    };
    setCookie("consent", consentForm, {
      path: "/",
      secure: true,
      maxAge: 31536000,
    });
    setShowModal(false);
  };

  const handleReject = () => {
    const consentForm = {
      necessary: false,
      performance: false,
      functionality: false,
      targeting: false,
    };
    setCookie("consent", consentForm, {
      path: "/",
      secure: true,
      maxAge: 31536000,
    });
    setShowModal(false);
  };

  return (
    <>
      <Dialog
        open={showModal}
        onClose={() => {}}
        aria-labelledby='cookie-modal-title'
        aria-describedby='cookie-modal-description'
        maxWidth={"xl"}
        fullScreen={onMobile ? true : false}
      >
        <div className='h-full w-full lg:h-[72vh] lg:w-[72vw] lg:p-12 lg:pb-6 pb-6 bg-white flex justify-between flex-col'>
          <div className='w-full space-y-8 overflow-y-scroll px-4 lg:pr-2 py-6 lg:pt-0 lg:pb-6 h-[80%]'>
            <h1 className='text-3xl '>COOKIES SETTINGS</h1>

            <div className='font-light '>
              We use cookies to collect information about how visitors use this
              website. They help us give you the best possible experience and
              continually improve this website. By clicking the “Save Settings”
              button, you agree to the use of the below types of cookies.
              However, blocking some types of cookies may impact your experience
              of the site. Please go to our
              <Link passHref href='/' className='text-[#001B71] '>
                Cookie Policy
              </Link>
              page for full disclosures on how we use cookies.
            </div>

            {cookieConsent.map((content, idx) => (
              <div
                key={`cookie-consent-${idx}`}
                className='flex justify-between w-full '
              >
                <div className='w-10/12 space-y-3 '>
                  <h2 className='font-bold'>{content.title}</h2>
                  <p>{content.body}</p>
                </div>

                <label className='flex items-center mr-2 cursor-pointer'>
                  <div className='relative'>
                    <input
                      type='checkbox'
                      className='sr-only'
                      onClick={() => {
                        setClickedConsent(
                          clickedConsent.map((boo, i) =>
                            i == idx ? !boo : boo
                          )
                        );
                      }}
                    />
                    <div
                      className={
                        "w-10 h-4 rounded-full shadow-inner transition-all ease-in-out duration-300 " +
                        (clickedConsent[idx]
                          ? "bg-primary-blue "
                          : "bg-[#BFC6C3] ")
                      }
                    />
                    <div
                      className={
                        "absolute w-6 h-6 bg-white border rounded-full shadow dot -left-1 -top-1 transition-all ease-in-out duration-300 " +
                        (clickedConsent[idx] ? " translate-x-full " : "")
                      }
                    />
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className='flex justify-center w-full space-x-4 lg:justify-end '>
            <DialogActions>
              <button
                className='flex items-center justify-center w-32 h-16 font-bold text-white transition-all duration-300 ease-in-out bg-primary-blue lg:w-44 '
                onClick={handleSubmit}
              >
                Save Settings
              </button>
            </DialogActions>
            <DialogActions>
              <button
                className='flex items-center justify-center w-32 h-16 font-bold text-white transition-all duration-300 ease-in-out bg-primary-blue lg:w-44 '
                onClick={handleReject}
              >
                Reject All
              </button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CookieConsentForm;
