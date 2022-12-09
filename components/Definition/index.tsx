import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Modal,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

const TermOfUse = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [agree, setAgree] = useState<number>(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDisclaimer = () => {
    sessionStorage.setItem("disclaimer", "agreed");
    setOpen(false);
    // window.location.href = routes.NEXT_PAGE;
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const agreed = sessionStorage.getItem("disclaimer");
      console.log("agree: ", agreed);
    }
  }, []);

  return (
    <div>
      <p className="cursor-default	font-normal	text-[16px] leading-[26px] text-justify">
        In Hong Kong, this Website is directed only at persons who qualify as
        “Professional Investor(s)” as defined under the Securities and Futures
        Ordinance (the “SFO”) and the Securities and Futures (Professional
        Investors) Rules. Professional Investors are defined as persons who meet
        certain financial criteria and please go to our
        <span
          onClick={handleOpen}
          className="cursor-pointer text-primary-blue font-normal	whitespace-nowrap	text-[16px] leading-[26px] underline underline-offset-4 mx-1"
        >
          Definition of Professional Investor
        </span>
        page for full details.
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        maxWidth={"lg"}
      >
        <div className="h-[72vh] lg:p-12 p-5 pb-6 bg-white flex flex-col">
          <div className="w-full">
            <div>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Terms of Use" {...a11yProps(0)} />
                <Tab label="Privacy Policy" {...a11yProps(1)} />
                <Tab label="Cookie Policy" {...a11yProps(2)} />
                <Tab
                  label="Definition of Professional Investor"
                  {...a11yProps(3)}
                />
              </Tabs>
            </div>
            <TabPanel value={value} index={0}>
              <h1 className="font-normal text-[26px] leading-[30px] my-3">
                Terms of use
              </h1>
              <div className="font-light ">
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Please read these Terms of Use carefully as it contains legal
                  and regulatory information relevant to the content of this
                  website https://www.base-am.com (the “Website”). By proceeding
                  further, you indicate that you accept the terms and conditions
                  set out below and that you agree to abide by them. If you do
                  not agree to these terms and conditions, please refrain from
                  using the Website.
                </p>
              </div>
              <div className="space-y-4 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Recipients of Communication
                </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Website is established by Base Asset Management Limited
                  (“BASE”, “we” or “us”), a Licensed Corporation (CE Number:
                  BMS500) regulated by the Hong Kong Securities and Futures
                  Commission (the “SFC”) to conduct Type 4 (Advising on
                  Securities) and Type 9 (Asset Management) regulated activities
                  in Hong Kong, for and on behalf of, or in respect of, various
                  investment entities managed or advised by BASE (the “Funds”).
                  The Website is not directed to any person in any jurisdiction
                  where the publication or availability of the Website is
                  prohibited or by reason of that person's nationality,
                  residence, domicile or otherwise, or if BASE would become
                  subject to licence or registration regulations of that
                  jurisdiction. Persons in respect of whom such prohibitions
                  apply must not access this Website.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Accredited Investors in Hong Kong
                </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  In Hong Kong, this Website is directed only at persons who
                  qualify as “Professional Investor(s)” as defined under the
                  Securities and Futures Ordinance (the “SFO”) and the
                  Securities and Futures (Professional Investor) Rules.
                  Professional Investors are defined as persons who meet certain
                  financial criteria and please go to our Definition of
                  Professional Investor page for full details. The information
                  contained in this Website is not an advertisement, invitation
                  or document relating to any securities or collective
                  investment schemes or any other investment under the SFO. None
                  of the products described in this Website have been authorised
                  by any regulatory authority in Hong Kong. Any investment or
                  investment activity to which this Website relates is available
                  only to, and will be engaged in only with, Professional
                  Investors. Any person who is not a Professional Investor
                  should not act or rely on this Website or any of its content.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Accessing the Website</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Website has not been reviewed by the SFC and is provided
                  to you on the basis that you are a Professional Investor. By
                  accessing this Website, you acknowledge and agree that this
                  information is provided for your use only and that you will
                  not distribute or otherwise make this material available to a
                  person who is not a Professional Investor. No unauthorised
                  person should attempt to gain access to any restricted area of
                  the Website. We disclaim all liability for any loss a user may
                  suffer from access to the Website by an unauthorised person.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Risk Considerations</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  The value of investments and the income generated may go down
                  as well as up, and the investors may not get back the amount
                  originally invested. Past performance is not a reliable
                  indicator of future performance, whilst any forecast,
                  projections and simulations contained herein should not be
                  relied upon as an indication of future results. There are
                  additional risks associated with investments in emerging or
                  developing markets, and virtual assets (the “Investments”).
                  Investments carry substantial and above-average risk; they are
                  suitable only for investors who are in a position to take such
                  risk.
                </p>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Some of the statements on this Website may be considered
                  forward-looking statements, which provide expectations or
                  forecasts of future events. However, these statements are not
                  guarantees of future performance or events and involve risks
                  and uncertainties. Actual results may differ materially from
                  those described in such forward-looking statements. This may
                  be a result of various factors. We are not obligated to update
                  the information or forward-looking statements contained
                  herein, nor are we obligated to update the reasons why actual
                  results could differ from those projected in the
                  forward-looking statements.
                </p>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  The users of this Website should seek advice from independent
                  financial, legal, or tax professionals before making any
                  investment decisions. The information herein should not be
                  construed as general or specific investment, legal, tax or
                  accounting advice of any kind. Any investment decisions should
                  be based on the terms described in the relevant offering
                  document, subscription documents, constitutional document
                  and/or any other relevant document as appropriate (the
                  “Offering Document”). Any investment will be subject to the
                  terms set out in its Offering Document and all applicable laws
                  and regulations. There is always a risk that any capital
                  invested could incur a substantial or complete loss.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Accuracy of Information</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Please do not make any investment decisions by solely relying
                  on the information in this document. The contents of this
                  Website are believed to be based on reliable sources, but we
                  cannot guarantee the accuracy or completeness of third-party
                  information. We shall not be required to remove any outdated
                  information from this Website or to expressly mark it as
                  outdated. Even if we are expressly notified of the possibility
                  or likelihood of such losses, we will not be responsible for
                  any direct, indirect, special, or consequential damages that
                  result from your utilisation of the information on this
                  Website or any other hyper-linking website, including lost
                  profits, business interruption, loss of data on your
                  equipment, or otherwise. This does not restrict our duty or
                  liability under any regulatory system where to do so would
                  break the law.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Stock Exchange Prices and Exchange Rates
                </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  BASE does not verify any of the stock exchange or other
                  information contained on this Website and it should be
                  verified separately before relying on it. Prices and values
                  shown on the Website may vary throughout stock exchange
                  trading days, market trading times and business days in
                  general.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">No Offer or Advice</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Website does not constitute any public offers, soliciting
                  or recommendations to buy or sell any securities or financial
                  instruments, effect any transactions, or conclude any legal
                  act of any kind whatsoever. If the information and views
                  offered on this Website are classified as constituting a
                  public offer under the legislation of the jurisdiction from
                  which you wish to access it, you must not access the Website.
                </p>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  The information contained on this Website are for general
                  Information purposes only. They do not constitute and should
                  not be constructed as an invitation, inducement or offer to
                  sell or solicitation of an offer to buy any securities or
                  related financial instruments in any jurisdiction in which
                  such offer or solicitation, purchase or sale would be illegal
                  under the securities, insurance or other laws of such
                  jurisdiction. You should obtain relevant and specific
                  professional advice before making any investment decisions.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Copyright, Trademarks and Other Rights
                </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We own the copyright in the content of this Website, unless
                  otherwise stated. The information on this Website may not be
                  reproduced, distributed or transmitted to any other person or
                  incorporated in any way into another database, document or
                  other materials without our permission. Nothing on this
                  Website should be considered as granting any licence or right
                  under any trademark, copyright, or other intellectual property
                  right of us or any third party.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Hyperlinks</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Any addresses or hyperlinks leading you out of this website
                  that do not refer to our own website material, they are not
                  run and have not reviewed by us. We take no responsibility for
                  the content of any other websites or pages that are linked to
                  or linking from this Website. Such addresses or hyperlinks are
                  provided solely for your convenience and information and are
                  absolutely beyond our control. Accessing such websites or
                  following such links to any other websites or pages shall be
                  at your own risk. We do not assume any responsibility for the
                  accuracy, completeness or legality of the contents of such
                  websites, or for any offers or services contained therein.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Privacy and Cookies</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We take the privacy of any personal information you may
                  provided to us through this Website seriously. A “cookie” is a
                  piece of information stored on your computer’s hard disk by
                  the web server. By continuing to use this Website, you are
                  agreeing to our terms and conditions which will activate the
                  cookie feature. This session-based cookie makes it easier for
                  you to navigated around the Website without having to re-agree
                  to the terms and conditions each time. Website cookies don’t
                  transmit any personal information and expire once you close
                  your browser. Cookies are used for no other purpose. You are
                  not required to accept a cookie offered to you, and you can
                  modify your settings to reject cookies. For full disclosures,
                  please go to our Privacy Policy page.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Data Protection</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  The personal information we collect from you on this website,
                  such as your name, address, phone number and email address
                  details submitted during our customer registration procedures.
                  We use this information to fulfil our regulatory obligations
                  and for our own internal purposes legitimate business
                  interests. By submitting personal information and agreeing to
                  these terms and conditions, you are consenting to such
                  information being processed for the aforementioned purposes.
                  You also agree that we have the right to use and store such
                  data on our internal systems, as well as transfer it to our
                  associated entities. If you have any questions regarding how
                  we will utilise your information, please contact us.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Jurisdiction </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Website is subject to the laws of the Hong Kong Special
                  Administrative Region, and any disputes arising from your use
                  of this website will be handled exclusively by courts in that
                  region.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold my-6">Changes to the Website</h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  The information on this Website, including these terms and
                  conditions, is subject to change without notice. We have the
                  right to discontinue the provision of all or any of the
                  information on the Website at any time with or without prior
                  notice. You agree to review these terms and conditions on a
                  regular basis, and your continued usage of the Website implies
                  that you accept such modifications.
                </p>
              </div>

              <div className="space-y-4 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Severability of Provisions
                </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  If any part of these terms and conditions is forbidden or
                  unenforceable in a specific jurisdiction, that provision will
                  only be ineffective in that jurisdiction to the extent of the
                  prohibition or unenforceability. This does not invalidate the
                  remainder of these terms and conditions nor affect the
                  validity or enforceability of that provision in another
                  jurisdiction.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold my-6">Indemnity </h6>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  You shall be liable to us for any loss, liability or cost we
                  suffer as a result of your use of the Website or any breach of
                  these terms. You agree to indemnify, defend and hold harmless
                  us and our agents, employees and third party sources from and
                  against any and all suits, losses, claims, demands,
                  liabilities, damages, costs and expenses (including properly
                  incurred legal fees) that arise from or relate to: (a) your
                  use of the Website; (b) breaches of these terms by you; or (c)
                  violation of any applicable law, statute, ordinance,
                  regulation or of any third party’s rights by you.
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h1 className="font-normal text-[26px] leading-[30px] my-3">
                Privacy Policy
              </h1>
              <div className="font-light ">
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Privacy Notice covers the personal data we collect from
                  you, how we collect it, with whom we share it and how we
                  process it in connection with your use of this website
                  https://www.base-am.com (the “Website”). For the purposes of
                  this Privacy Notice, “BASE”, “we”, “us”, and “our” means Base
                  Asset Management Limited.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  “Personal data” refers to any information that can be used to
                  identify you, such as your name, contact details,
                  identification number, account number and balance, transaction
                  history or online identifiers such as your IP address.
                  Personal data does not include data from which you can no
                  longer be identified such as anonymised aggregate data.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We are responsible for how we collect and use personal data
                  about you. If you have questions related to this Privacy
                  Notice or how we handle your personal data, please contact us
                  at info@base-am.com.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  The Categories of Personal Data Collected
                </h6>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  The types of personal data we may collect about you include
                  the following:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    contact and communications information, including:
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your contact details, such as email address(es), telephone
                    numbers and postal address(es);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    records of our past interactions and communications;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    information generated by your computer and software when you
                    visit our website, such as your IP address, browser type and
                    operating system information (note that we do not attempt to
                    identify individuals using this information);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    identification, biographical, educational and social
                    information, including:
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your name, title, gender, nationality and age;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your image and likeness of you (for example if we are
                    meeting you in person);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your signature (for example when signing a contract or other
                    document provided to us);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your activities, lifestyle information and social
                    circumstances;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    work related information, including:
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your professional activities and interests;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    your involvement with and membership of industry bodies and
                    professional associations;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    other information about your employment and professional
                    life; and
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    other information which you provide in your communications
                    with us.
                  </li>
                </ul>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We also collect and share generalised data, such as
                  statistical or demographic information, for any purpose. This
                  type of data is originated from your personal but cannot be
                  used to identify you specifically. For example, we may compute
                  the percentage of our users who are interested in a certain
                  product type by combining your browsing information with other
                  data. However, if we combine or link aggregated data with your
                  personal data so that it can be used to identify you, we
                  consider the combined data to be personal data under this
                  Privacy Notice and will use it in accordance with this notice.
                </p>
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  If we are required by law to do so, or if we believe that it
                  is necessary to protect our rights and/or comply with judicial
                  or regulatory proceedings, a court order or other legal
                  process, we may collect your personal data without your
                  knowledge or consent.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  How Your Personal Data is Collected
                </h6>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  There are several ways we may collect your personal data:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you submit your information on our Website through our
                    contact form;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you request literature or research information from us;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you visit and browse our Website;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you attend our webinar presentations;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you attend the events hosted or co-hosted by BASE; and
                  </li>
                  <li className="text-justify">when we send you emails.</li>
                </ul>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We may also collect certain information when you interact with
                  our Website, such as your device type and browsing actions and
                  patterns. We collect this personal data through using cookies,
                  server logs and other similar technologies. Please see our
                  Cookie Policy for further details.
                </p>

                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  Furthermore, we may receive your personal data from third
                  parties and public sources, such as:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the company we use to provide services to you, such as our
                    webinar service provider;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the companies contracted by us to offer or market our sales
                    materials to you, such as our sales affiliates and external
                    partners;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    our marketing service provider may combine the data provided
                    on our Website by you with other publicly available data
                    about you, such as your social media account information.
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Whom Your Personal Data is Shared
                </h6>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  We may share your personal data with third parties where
                  required by law, where you have consented, or where we have
                  another legitimate interest in doing so, such as:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    our service providers, including attorneys, IT service
                    providers, webinar service provider and marketing service
                    provider;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    our sales affiliates and external partners;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you visit and browse our Website;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    when you attend our webinar presentations;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    other entities in our group for advertising and marketing
                    purposes, and for system support maintenance and hosting of
                    data in the event of business reorganisation or group
                    restructuring exercise;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a regulator or government entity if required by law, or if
                    we reasonably believe that disclosure is necessary to
                    protect our rights and/or to comply with judicial or
                    regulatory proceedings, a court order, or other legal
                    process.
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Retention of Your Personal Data
                </h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Personal data will be kept for as long as necessary to
                  complete the purposes for which you gave it to us, such as
                  satisfying any legal, regulatory, accounting, or reporting
                  requirements. We assess the amount, type and sensitivity of
                  your personal data, as well as the potential risk of harm from
                  unauthorised use or disclosure of your personal data, whether
                  we can fulfil the purposes goals through alternative methods
                  and the applicable legal requirements when defining the
                  appropriate retention period for personal data.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We may anonymise your personal data in some cases to prevent
                  it from being linked to you, in which case it no longer
                  constitutes personal data. We will securely erase your
                  personal data in line with applicable laws and regulations
                  once we no longer require it for the purposes for which we
                  collected it.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Your Rights to Withdraw Your Consent
                </h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  If you have given your consent for us to collect, process, and
                  transfer your personal data for a specific purpose, you can
                  withdraw that consent at any time. To withdraw your consent,
                  please contact us at info@base-am.com. Once we receive
                  notification of your withdrawn consent, we will no longer
                  process your information unless we have an alternative legal
                  basis for doing so.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  In order to protect your information and ensure that only you
                  have access to it, we may request specific details from you.
                  This is a security measure to guarantee that personal data is
                  not given to anyone who isn't allowed to receive it. We strive
                  to safeguard all information we collect from you, but we
                  cannot guarantee the security of any information you submit to
                  us.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Changes to the Privacy Notice
                </h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We have the right to update this Privacy Notice without prior
                  notice at any time, and we will make an updated copy of such
                  Privacy Notice available on our Website.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  This Privacy Notice was intentionally written to be succinct
                  and transparent. It is not a comprehensive description of all
                  aspects of our data collection and usage. Please do not
                  hesitate to contact us at info@base-am.com if you have any
                  questions.
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h1 className="font-normal text-[26px] leading-[30px] my-3">
                Cookie Policy
              </h1>
              <div className="font-light ">
                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  When you visit this website https://www.base-am.com (the
                  “Website”), we collect and process information about your
                  usage of the Website using cookies and other similar
                  technologies. This helps us to provide you with a good
                  experience when you browse our website and also allows us to
                  improve our site. For the purposes of this Cookie Policy,
                  “BASE”, “we”, “us”, and “our” means Base Asset Management
                  Limited.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold my-6">What are Cookies?</h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Cookies are small text files containing small amounts of
                  information which are downloaded and may be stored on any of
                  your internet enabled devices e.g. your computer, smartphone
                  or tablet - like a memory for a web page.
                </p>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  This means we automatically collect and store the following
                  information about your visit:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the internet domain and IP address from where you access the
                    Website;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the type of browser software and operating system used to
                    access the Services and type of device;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the date and time you access the Website;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    if you linked to the Services from another website, the
                    address of that website; and
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the pages or links you enter, visit and exit the Website
                    from.
                  </li>
                </ul>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Please go to our Privacy Policy page for full details of the
                  information we collect and how we use your personal
                  information.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold my-6">Use of Cookies</h6>
                <p className="text-justify">We use the following cookies:</p>
                <ul className="list-disc ml-7">
                  <li className="font-semibold italic">
                    Strictly Necessary Cookies
                  </li>
                  <p className="font-normal text-[16px] leading-[26px] text-justify">
                    These are cookies that are required for the operation of our
                    website. They include, for example, cookies that enable you
                    to log into secure areas of our website. These cookies will
                    be deleted when you finish your session on our website.
                  </p>
                  <li className="font-semibold italic">
                    Analytical/Performance Cookies
                  </li>
                  <p className="font-normal text-[16px] leading-[26px] text-justify">
                    These cookies allow us to recognise and count the number of
                    visitors and to see how visitors move around our website
                    when they are using it. This helps us to improve the way our
                    website works, for example, by ensuring that users are
                    finding what they are looking for easily.
                  </p>
                  <li className="font-semibold italic">
                    Functionality Cookies
                  </li>
                  <p className="font-normal text-[16px] leading-[26px] text-justify">
                    These are used to recognise you when you return to our
                    website. This enables us to personalise our content for you,
                    greet you by name and remember your preferences (for
                    example, your choice of language or region etc.).
                  </p>
                  <li className="font-semibold italic">Targeting Cookies</li>
                  <p className="font-normal text-[16px] leading-[26px] text-justify">
                    These cookies record your visit to our website, the pages
                    you have visited and the links you have followed. We may
                    also share this information with third parties for this
                    purpose.
                  </p>
                </ul>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  Some cookies on the Website and other parts of the Services
                  are controlled by third parties, such as social media APIs and
                  external website providers. These cookies are frequently
                  analytical/performance or targeting cookies. You should refer
                  to the third parties’ own cookie and privacy policies to learn
                  how they intend to use your data.
                </p>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  The third party cookies we use in our Services, include but
                  are not limited to:
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    <p className="font-semibold italic text-justify">
                      Google -
                    </p>
                    our Website and Services have embedded Google
                    services/tools, such as ‘Google Analytics’ for better user
                    experience and analytics purposes. For details of Google
                    cookies usage, please click here.
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    <p className="font-semibold italic text-justify">
                      Twitter -
                    </p>
                    our Website and Services have embedded Twitter API for
                    social media sharing purpose. For details of Twitter cookies
                    usage, please click here.
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    <p className="font-semibold italic text-justify">
                      LinkedIn -
                    </p>
                    our Website and Services have embedded Twitter API for
                    social media sharing purpose. For details of Twitter cookies
                    usage, please click here.
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Manage Your Cookie Settings
                </h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  By enabling your browser's preference to refuse all or some
                  cookies, you can prevent cookies from being stored. Please
                  keep in mind that if you use your browser's settings to block
                  all cookies (including essential cookies), you may not be able
                  to access some or all of our Services. Click here to view your
                  cookie settings.
                </p>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  You can delete cookies that our Website sets on your browser
                  in the future if you want. The instructions for removing
                  cookies from your device depend on which operating system and
                  web browser you use. Please keep in mind, however, that
                  ceasing agreement to the use of cookies on our website will
                  reduce functionality of those same sites.
                </p>
              </div>

              <div className="space-y-4 mb-7 font-light">
                <h6 className="font-semibold text-[16px] leading-[26px] my-6">
                  Changes to the Cookie Policy
                </h6>

                <p className="font-normal text-[16px] leading-[26px] my-2 text-justify">
                  We have the right to update this Cookie Policy without prior
                  notice at any time, and we will make an updated copy of such
                  Cookie Policy available on our Website. If you require any
                  further information, please do not hesitate to contact us at
                  info@base-am.com.
                </p>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h6 className="font-normal text-[26px] leading-[30px] my-3">
                Securities of Futures Commissions Ordinance (Cap. 571) (the
                “SFO”)
              </h6>
              <div className="font-light ">
                <p className="font-semibold text-justify">
                  Under Section 1 of Part I of Schedule 1 of the SFO,
                  “professional investor” means :—
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    Any recognized exchange company, recognized clearing house,
                    recognized exchange controller or recognized investor
                    compensation company, or any person authorized to provide
                    automated trading services under section 95(2) of this
                    Ordinance;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any intermediary, or any other person carrying on the
                    business of the provision of investment services and
                    regulated under the law of any place outside Hong Kong;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any authorized financial institution, or any bank which is
                    not an authorized financial institution but is regulated
                    under the law of any place outside Hong Kong;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any insurer authorized under the Insurance Ordinance (Cap.
                    41), or any other person carrying on insurance business and
                    regulated under the law of any place outside Hong Kong;
                    (Amended 12 of 2015 s. 144)
                  </li>
                  <li className="text-justify">any scheme which—</li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    is a collective investment scheme authorized under section
                    104 of this Ordinance; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    is similarly constituted under the law of any place outside
                    Hong Kong and, if it is regulated under the law of such
                    place, is permitted to be operated under the law of such
                    place, or any person by whom any such scheme is operated;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any registered scheme as defined in section 2(1) of the
                    Mandatory Provident Fund Schemes Ordinance (Cap. 485), or
                    its constituent fund as defined in section 2 of the
                    Mandatory Provident Fund Schemes (General) Regulation (Cap.
                    485 sub. leg. A), or any person who, in relation to any such
                    registered scheme, is an approved trustee or service
                    provider as defined in section 2(1) of that Ordinance or who
                    is an investment manager of any such registered scheme or
                    constituent fund;
                  </li>
                  <li className="text-justify">any scheme which—</li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    is a registered scheme as defined in section 2(1) of the
                    Occupational Retirement Schemes Ordinance (Cap. 426); or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    is an offshore scheme as defined in section 2(1) of that
                    Ordinance and, if it is regulated under the law of the place
                    in which it is domiciled, is permitted to be operated under
                    the law of such place, or any person who, in relation to any
                    such scheme, is an administrator as defined in section 2(1)
                    of that Ordinance;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any government (other than a municipal government
                    authority), any institution which performs the functions of
                    a central bank, or any multilateral agency;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    except for the purposes of Schedule 5 to this Ordinance, any
                    corporation which is—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a wholly owned subsidiary of—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an intermediary, or any other person carrying on the
                    business of the provision of investment services and
                    regulated under the law of any place outside Hong Kong; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an authorized financial institution, or any bank which is
                    not an authorized financial institution but is regulated
                    under the law of any place outside Hong Kong;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a holding company which holds all the issued share capital
                    of—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an intermediary, or any other person carrying on the
                    business of the provision of investment services and
                    regulated under the law of any place outside Hong Kong; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an authorized financial institution, or any bank which is
                    not an authorized financial institution but is regulated
                    under the law of any place outside Hong Kong; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any other wholly owned subsidiary of a holding company
                    referred to in subparagraph (ii); or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    any person of a class which is prescribed by rules made
                    under section 397 of this Ordinance for the purposes of this
                    paragraph as within the meaning of this definition for the
                    purposes of the provisions of this Ordinance, or to the
                    extent that it is prescribed by rules so made as within the
                    meaning of this definition for the purposes of any provision
                    of this Ordinance.
                  </li>
                </ul>
              </div>
              <h6 className="font-semibold my-6">
                Securities and Futures (Professional Investor) Rules (Cap. 571D)
                (the “PI Rules”)
              </h6>
              <div className="font-light ">
                <p className="font-semibold pb-3">
                  Under Section 3 of the PI Rules, “Persons prescribed as
                  professional investors” means—
                </p>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  For the purposes of paragraph (j) of the definition of
                  professional investor in section 1 of Part 1 of Schedule 1 to
                  the Ordinance, the following persons are prescribed as within
                  the meaning of that definition for the purposes of any
                  provision of the Ordinance other than Schedule 5—
                </p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a trust corporation specified in section 4;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an individual specified in section 5(1);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a corporation (other than a trust corporation referred to in
                    paragraph (a)) specified in section 6;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a partnership specified in section 7.
                  </li>
                </ul>
              </div>

              <div className="font-light ">
                <p className="font-semibold py-3">
                  Section 4. Trust corporations
                </p>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  A trust corporation specified for the purposes of section 3(a)
                  is a trust corporation having been entrusted under one or more
                  trusts of which it acts as a trustee with total assets of not
                  less than $40 million at the relevant date or as ascertained
                  in accordance with section 8.
                </p>
              </div>

              <div className="font-light ">
                <p className="font-semibold py-3">Section 5. Individuals</p>
                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    An individual specified for the purposes of section 3(b) is
                    an individual having a portfolio of not less than $8 million
                    at the relevant date or as ascertained in accordance with
                    section 8, when any one or more of the following are taken
                    into account—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a portfolio on the individual’s own account;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a portfolio on a joint account with the individual’s
                    associate;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the individual’s share of a portfolio on a joint account
                    with one or more persons other than the individual’s
                    associate;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a portfolio of a corporation which, at the relevant date,
                    has as its principal business the holding of investments and
                    is wholly owned by the individual.
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    For the purposes of subsection (1)(c), an individual’s share
                    of a portfolio on a joint account with one or more persons
                    other than the individual’s associate is—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    the individual’s share of the portfolio as specified in a
                    written agreement among the account holders; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    in the absence of an agreement referred to in paragraph (a),
                    an equal share of the portfolio.
                  </li>
                </ul>
              </div>

              <div className="font-light ">
                <p className="font-semibold py-3">Section 6. Corporations</p>

                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  A corporation specified for the purposes of section 3(c) is—
                </p>

                <ul className="list-disc ml-7">
                  <li className="text-justify">a corporation having—</li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a portfolio of not less than $8 million; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    total assets of not less than $40 million, at the relevant
                    date or as ascertained in accordance with
                  </li>
                  <li className="text-justify">section 8;</li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a corporation which, at the relevant date, has as its
                    principal business the holding of investments and is wholly
                    owned by any one or more of the following persons—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a trust corporation specified in section 4;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    an individual specified in section 5(1);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a corporation specified in this paragraph or paragraph (a);
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a partnership specified in section 7;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a professional investor within the meaning of paragraph (a),
                    (d), (e), (f), (g) or (h) of the definition of professional
                    investor in section 1 of Part 1 of Schedule 1 to the
                    Ordinance; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a corporation which, at the relevant date, wholly owns a
                    corporation referred to in paragraph
                  </li>
                </ul>
              </div>

              <div className="font-light ">
                <p className="font-semibold py-3">Section 7. Partnerships</p>

                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  A partnership specified for the purposes of section 3(d) is a
                  partnership having—
                </p>

                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a portfolio of not less than $8 million; or
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    total assets of not less than $40 million,
                  </li>
                </ul>
                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  at the relevant date or as ascertained in accordance with
                  section 8.
                </p>
              </div>

              <div className="font-light ">
                <p className="font-semibold py-3">
                  Section 8. Ascertaining total assets or portfolio
                </p>

                <p className="font-normal text-[16px] leading-[26px] text-justify">
                  For the purposes of section 4, 5(1), 6(a) or 7, the total
                  assets entrusted to a trust corporation, the portfolio of an
                  individual, or the portfolio or total assets of a corporation
                  or partnership, are to be ascertained by referring to any one
                  or more of the following—
                </p>

                <ul className="list-disc ml-7">
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    for a trust corporation, corporation or partnership, the
                    most recent audited financial statement prepared within 16
                    months before the relevant date in respect of the trust
                    corporation (or a trust of which it acts as a trustee),
                    corporation or partnership;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    for a trust corporation, individual, corporation or
                    partnership, any one or more of the following documents
                    issued or submitted within 12 months before the relevant
                    date—
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a statement of account or a certificate issued by a
                    custodian;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a certificate issued by an auditor or a certified public
                    accountant;
                  </li>
                  <li className="text-justify font-normal text-[16px] leading-[26px]">
                    a public filing submitted by or on behalf of the trust
                    corporation (whether on its own behalf or in respect of a
                    trust of which it acts as a trustee), individual,
                    corporation or partnership.
                  </li>
                </ul>
                <p className="text-justify font-normal text-[16px] leading-[26px] my-5 mb-10">
                  *Under Section 2A of the PI Rules, “In these Rules, a
                  reference to an amount expressed in Hong Kong dollars includes
                  its equivalent in any foreign currency.”
                </p>
              </div>
            </TabPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TermOfUse;
