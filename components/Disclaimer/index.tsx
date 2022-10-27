import { Dialog, DialogActions } from "@material-ui/core";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  setAgreedDisclaimer: Dispatch<SetStateAction<boolean>>;
};

const Disclaimer = ({ setAgreedDisclaimer }: Props) => {
  const [open, setOpen] = useState(false);
  const [agree, setAgree] = useState<number>(0);
  const [reminder, setReminder] = useState(false);
  const handleClose = () => {
    if (agree == -1) {
      setReminder(true);
    } else if (agree == 1) {
      sessionStorage.setItem("disclaimer", "agreed");
      setAgreedDisclaimer(true);
      setOpen(false);
    }
  };
  const handleDisclaimer = () => {
    sessionStorage.setItem("disclaimer", "agreed");
    setOpen(false);
    // window.location.href = routes.NEXT_PAGE;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const agreed = sessionStorage.getItem("disclaimer");
      if (!agreed) {
        setOpen(true);
      }
    }
  }, []);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth={"lg"}
      >
        <div className="h-[72vh] max-w-[100%] pt-6 pb-6 bg-white flex flex-col">
          <div className="max-w-[80%] mx-auto space-y-12 overflow-y-scroll pr-2 pb-6 h-[85%]">
            <h1 className="text-3xl ">WEBSITE DISCLAIMER – IMPORTANT NOTICE</h1>

            <div className="font-light text-justify">
              Please read this page carefully before proceeding further, as it
              contains legal and regulatory information relevant to the content
              of this website https://www.base-am.com (the“Website”). Please
              select the “I have read and agreed to the above terms and
              conditions” to acknowledge that you accept the terms of use and
              that you agree to abide by them. If you do not agree to these
              terms of use, please refrain from using the Website or select “I
              decline” to leave the Website.
            </div>

            <div className="space-y-4 font-light">
              <h6 className="font-semibold">Recipients of Communication</h6>
              <p className="text-justify">
                This Website is established by Base Asset Management Limited
                (“BASE”, “we” or “us”), a Licensed Corporation (CE Number:
                BMS500) regulated by the Hong Kong Securities and Futures
                Commission (the “SFC”) to conduct Type 4 (Advising on
                Securities) and Type 9 (Asset Management) regulated activities
                in Hong Kong, for and on behalf of, or in respect of, various
                investment entities managed or advised by BASE (the “Funds”).
                The Website is not directed to any person in any jurisdiction
                where the publication or availability of the Website is
                prohibited or by reason of that person's nationality, residence,
                domicile or otherwise, or if BASE would become subject to
                licence or registration regulations of that jurisdiction.
                Persons in respect of whom such prohibitions apply must not
                access this Website.
              </p>
            </div>

            <div className="space-y-4 font-light">
              <h6 className="font-semibold">
                Accredited Investors in Hong Kong
              </h6>
              <p className="text-justify">
                In Hong Kong, this Website is directed only at persons who
                qualify as “Professional Investor(s)” as defined under the
                Securities and Futures Ordinance (the “SFO”) and the Securities
                and Futures (Professional Investors) Rules. Professional
                Investors are defined as persons who meet certain financial
                criteria and please go to our Definition of Professional
                Investor page for full details.
              </p>
              <p className="text-justify">
                The information contained in this Website is not an
                advertisement, invitation or document relating to any securities
                or collective investment schemes or any other investment under
                the SFO. None of the products described in this Website have
                been authorised by any regulatory authority in Hong Kong. Any
                investment or investment activity to which this Website relates
                is available only to, and will be engaged in only with,
                Professional Investors. Any person who is not a Professional
                Investor should not act or rely on this Website or any of its
                content.
              </p>
            </div>

            <div className="space-y-4 font-light">
              <h6 className="font-semibold">Accessing the Website</h6>
              <p className="text-justify">
                This Website has not been reviewed by the SFC and is provided to
                you on the basis that you are a Professional Investor. By
                accessing this Website, you acknowledge and agree that this
                information is provided for your use only and that you will not
                distribute or otherwise make this material available to a person
                who is not a Professional Investor.
              </p>
              <p className="text-justify">
                No unauthorised person should attempt to gain access to any
                restricted area of the Website. We disclaim all liability for
                any loss a user may suffer from access to the Website by an
                unauthorised person.
              </p>
            </div>

            <div className="space-y-4 font-light">
              <h6 className="font-semibold">Risk Considerations</h6>
              <p className="text-justify">
                The value of investments and the income generated may go down as
                well as up, and the investors may not get back the amount
                originally invested. Past performance is not a reliable
                indicator of future performance, whilst any forecast,
                projections and simulations contained herein should not be
                relied upon as an indication of future results. There are
                additional risks associated with investments in emerging or
                develong markets, and virtual assets (the “Investments”).
                Investments carry substantial and above-average risk; they are
                suitablnly for investors who are in a position to take such
                risk.
              </p>
              <p className="text-justify">
                The users of this Website should seek advice from independent
                financial, legal, or tax professionals before making any
                investment decisions. The information herein should not be
                construed as general or specific investment, legal, tax or
                accounting advice of any kind. Any investment decisions should
                be based on the terms described in the relevant offering
                document, subscription documents, constitutional document and/or
                any other relevant document as appropriate (the “Offering
                Document”). Any investment will be subject to the terms set out
                in its Offering Document and all applicable laws and
                regulations. There is always a risk that any capital invested
                could incur a substantial or complete loss.
              </p>
            </div>

            <div className="font-light ">
              Please access to our
              <span className="underline text-primary-blue underline-offset-2 ">
                <Link href="/">Terms of Use</Link>
              </span>
              page for full disclosures.
            </div>

            <div className="space-y-2">
              <button
                className="flex items-center cursor-pointer "
                onClick={() => setAgree(1)}
              >
                <div
                  className={
                    "flex items-center justify-center w-4 h-4 mr-2 transition-all duration-300 ease-in-out border rounded-full " +
                    (agree == 1 ? "border-primary-blue " : "border-gray-400")
                  }
                >
                  <div
                    className={
                      "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out " +
                      (agree == 1 ? "bg-primary-blue " : "bg-white")
                    }
                  />
                </div>
                <label
                  className={
                    "font-bold cursor-pointer " +
                    (agree == 1 ? "text-primary-blue " : "")
                  }
                >
                  I have read and agreed to the above terms and conditions
                </label>
              </button>
              <button
                className="flex items-center cursor-pointer "
                onClick={() => setAgree(-1)}
              >
                <div
                  className={
                    "flex items-center justify-center w-4 h-4 mr-2 transition-all duration-300 ease-in-out border rounded-full " +
                    (agree == -1 ? "border-primary-blue " : "border-gray-400")
                  }
                >
                  <div
                    className={
                      "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out " +
                      (agree == -1 ? "bg-primary-blue " : "bg-white")
                    }
                  />
                </div>
                <label
                  className={
                    "font-bold cursor-pointer " +
                    (agree == -1 ? "text-primary-blue " : "")
                  }
                >
                  I decline
                </label>
              </button>
            </div>
          </div>
          <DialogActions
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
              width: "100%",
              height: "15%",
            }}
          >
            <button
              disabled={agree == 0}
              className={
                "flex items-center justify-center w-36 h-4/6 font-bold text-white transition-all duration-300 ease-in-out " +
                (agree == 0 ? "bg-[#DDDDDD]" : "bg-primary-blue ")
              }
              onClick={handleClose}
            >
              Submit
            </button>
          </DialogActions>
        </div>
      </Dialog>

      {/* Reminder of disclaimer */}
      <Dialog
        open={reminder}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth={"lg"}
      >
        <div className="h-[24vh] px-6 justify-between pt-16 pb-6 bg-primary-blue flex flex-col">
          <div className="text-white ">
            <p>
              This website and its content can only be accessed if the
              disclaimer is accepted.
            </p>
            <p>
              By entering the site, you agree to the terms and conditions set
              forth in the disclaimer.
            </p>
          </div>
          <DialogActions
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              className="flex items-center justify-center h-12 font-bold transition-all duration-300 ease-in-out bg-white w-36 text-primary-blue "
              onClick={() => {
                setAgree(0);
                setReminder(false);
              }}
            >
              Okay
            </button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default Disclaimer;
