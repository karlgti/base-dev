"use strict";
exports.id = 563;
exports.ids = [563];
exports.modules = {

/***/ 3569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/headerLogo.39de4061.png","height":35,"width":180,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAJ0lEQVR42mP41/0v9l/Ov/R/CUCY8m8Ww7+2f0VARtK/CqBE+b85AIjtFwCp8O0fAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const backToTop = ()=>{
    // The back-to-top button is hidden at the beginning
    const { 0: showButton , 1: setShowButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);
    // This function will scroll the window to the top
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: scrollToTop,
            className: "flex flex-end mr-0 mx-auto back-to-top text-white bg-[#505758] p-3",
            children: "\u21E7 Back to top"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backToTop);


/***/ }),

/***/ 4409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(8130);
// EXTERNAL MODULE: external "@mui/material/Tab"
var Tab_ = __webpack_require__(1307);
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);
// EXTERNAL MODULE: external "@mui/material/Tabs"
var Tabs_ = __webpack_require__(8544);
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);
;// CONCATENATED MODULE: ./components/TermOfUse/index.tsx





function TabPanel(props) {
    const { children , value , index , ...other } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        role: "tabpanel",
        hidden: value !== index,
        id: `simple-tabpanel-${index}`,
        "aria-labelledby": `simple-tab-${index}`,
        ...other,
        children: value === index && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Typography, {
                children: children
            })
        })
    });
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
const TermOfUse = ()=>{
    const [value, setValue] = external_react_default().useState(0);
    const [open, setOpen] = external_react_default().useState(false);
    const { 0: agree , 1: setAgree  } = (0,external_react_.useState)(0);
    const handleOpen = ()=>setOpen(true);
    const handleClose = ()=>setOpen(false);
    const handleDisclaimer = ()=>{
        sessionStorage.setItem("disclaimer", "agreed");
        setOpen(false);
    // window.location.href = routes.NEXT_PAGE;
    };
    const handleChange = (event, newValue)=>{
        setValue(newValue);
    };
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                onClick: handleOpen,
                className: "text-[#001B71] cursor-pointer",
                children: "Terms of Use"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Dialog, {
                open: open,
                onClose: handleClose,
                "aria-labelledby": "modal-modal-title",
                "aria-describedby": "modal-modal-description",
                maxWidth: "lg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-[72vh] w-[72vw] p-12 pb-6 bg-white flex flex-col",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Tabs_default()), {
                                    value: value,
                                    onChange: handleChange,
                                    "aria-label": "basic tabs example",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: "Terms of Use | ",
                                            ...a11yProps(0)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: " | Privacy Policy | ",
                                            ...a11yProps(1)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: " | Cookie Policy | ",
                                            ...a11yProps(2)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Tab_default()), {
                                            label: " | Definition of Professional Investor",
                                            ...a11yProps(3)
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                value: value,
                                index: 0,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl my-3",
                                        children: "Terms of use"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-light ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "my-2 text-justify",
                                            children: "Please read these Terms of Use carefully as it contains legal and regulatory information relevant to the content of this website https://www.base-am.com (the \u201CWebsite\u201D). By proceeding further, you indicate that you accept the terms and conditions set out below and that you agree to abide by them. If you do not agree to these terms and conditions, please refrain from using the Website."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Recipients of Communication"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Website is established by Base Asset Management Limited (\u201CBASE\u201D, \u201Cwe\u201D or \u201Cus\u201D), a Licensed Corporation (CE Number: BMS500) regulated by the Hong Kong Securities and Futures Commission (the \u201CSFC\u201D) to conduct Type 4 (Advising on Securities) and Type 9 (Asset Management) regulated activities in Hong Kong, for and on behalf of, or in respect of, various investment entities managed or advised by BASE (the \u201CFunds\u201D). The Website is not directed to any person in any jurisdiction where the publication or availability of the Website is prohibited or by reason of that person's nationality, residence, domicile or otherwise, or if BASE would become subject to licence or registration regulations of that jurisdiction. Persons in respect of whom such prohibitions apply must not access this Website."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Accredited Investors in Hong Kong"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "In Hong Kong, this Website is directed only at persons who qualify as \u201CProfessional Investor(s)\u201D as defined under the Securities and Futures Ordinance (the \u201CSFO\u201D) and the Securities and Futures (Professional Investor) Rules. Professional Investors are defined as persons who meet certain financial criteria and please go to our Definition of Professional Investor page for full details. The information contained in this Website is not an advertisement, invitation or document relating to any securities or collective investment schemes or any other investment under the SFO. None of the products described in this Website have been authorised by any regulatory authority in Hong Kong. Any investment or investment activity to which this Website relates is available only to, and will be engaged in only with, Professional Investors. Any person who is not a Professional Investor should not act or rely on this Website or any of its content."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Accessing the Website"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Website has not been reviewed by the SFC and is provided to you on the basis that you are a Professional Investor. By accessing this Website, you acknowledge and agree that this information is provided for your use only and that you will not distribute or otherwise make this material available to a person who is not a Professional Investor. No unauthorised person should attempt to gain access to any restricted area of the Website. We disclaim all liability for any loss a user may suffer from access to the Website by an unauthorised person."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Risk Considerations"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "The value of investments and the income generated may go down as well as up, and the investors may not get back the amount originally invested. Past performance is not a reliable indicator of future performance, whilst any forecast, projections and simulations contained herein should not be relied upon as an indication of future results. There are additional risks associated with investments in emerging or developing markets, and virtual assets (the \u201CInvestments\u201D). Investments carry substantial and above-average risk; they are suitable only for investors who are in a position to take such risk."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Some of the statements on this Website may be considered forward-looking statements, which provide expectations or forecasts of future events. However, these statements are not guarantees of future performance or events and involve risks and uncertainties. Actual results may differ materially from those described in such forward-looking statements. This may be a result of various factors. We are not obligated to update the information or forward-looking statements contained herein, nor are we obligated to update the reasons why actual results could differ from those projected in the forward-looking statements."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "The users of this Website should seek advice from independent financial, legal, or tax professionals before making any investment decisions. The information herein should not be construed as general or specific investment, legal, tax or accounting advice of any kind. Any investment decisions should be based on the terms described in the relevant offering document, subscription documents, constitutional document and/or any other relevant document as appropriate (the \u201COffering Document\u201D). Any investment will be subject to the terms set out in its Offering Document and all applicable laws and regulations. There is always a risk that any capital invested could incur a substantial or complete loss."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Accuracy of Information"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Please do not make any investment decisions by solely relying on the information in this document. The contents of this Website are believed to be based on reliable sources, but we cannot guarantee the accuracy or completeness of third-party information. We shall not be required to remove any outdated information from this Website or to expressly mark it as outdated. Even if we are expressly notified of the possibility or likelihood of such losses, we will not be responsible for any direct, indirect, special, or consequential damages that result from your utilisation of the information on this Website or any other hyper-linking website, including lost profits, business interruption, loss of data on your equipment, or otherwise. This does not restrict our duty or liability under any regulatory system where to do so would break the law."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Stock Exchange Prices and Exchange Rates"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "BASE does not verify any of the stock exchange or other information contained on this Website and it should be verified separately before relying on it. Prices and values shown on the Website may vary throughout stock exchange trading days, market trading times and business days in general."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "No Offer or Advice"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Website does not constitute any public offers, soliciting or recommendations to buy or sell any securities or financial instruments, effect any transactions, or conclude any legal act of any kind whatsoever. If the information and views offered on this Website are classified as constituting a public offer under the legislation of the jurisdiction from which you wish to access it, you must not access the Website."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "The information contained on this Website are for general Information purposes only. They do not constitute and should not be constructed as an invitation, inducement or offer to sell or solicitation of an offer to buy any securities or related financial instruments in any jurisdiction in which such offer or solicitation, purchase or sale would be illegal under the securities, insurance or other laws of such jurisdiction. You should obtain relevant and specific professional advice before making any investment decisions."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Copyright, Trademarks and Other Rights"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We own the copyright in the content of this Website, unless otherwise stated. The information on this Website may not be reproduced, distributed or transmitted to any other person or incorporated in any way into another database, document or other materials without our permission. Nothing on this Website should be considered as granting any licence or right under any trademark, copyright, or other intellectual property right of us or any third party."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Hyperlinks"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Any addresses or hyperlinks leading you out of this website that do not refer to our own website material, they are not run and have not reviewed by us. We take no responsibility for the content of any other websites or pages that are linked to or linking from this Website. Such addresses or hyperlinks are provided solely for your convenience and information and are absolutely beyond our control. Accessing such websites or following such links to any other websites or pages shall be at your own risk. We do not assume any responsibility for the accuracy, completeness or legality of the contents of such websites, or for any offers or services contained therein."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Privacy and Cookies"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We take the privacy of any personal information you may provided to us through this Website seriously. A \u201Ccookie\u201D is a piece of information stored on your computer\u2019s hard disk by the web server. By continuing to use this Website, you are agreeing to our terms and conditions which will activate the cookie feature. This session-based cookie makes it easier for you to navigated around the Website without having to re-agree to the terms and conditions each time. Website cookies don\u2019t transmit any personal information and expire once you close your browser. Cookies are used for no other purpose. You are not required to accept a cookie offered to you, and you can modify your settings to reject cookies. For full disclosures, please go to our Privacy Policy page."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Data Protection"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "The personal information we collect from you on this website, such as your name, address, phone number and email address details submitted during our customer registration procedures. We use this information to fulfil our regulatory obligations and for our own internal purposes legitimate business interests. By submitting personal information and agreeing to these terms and conditions, you are consenting to such information being processed for the aforementioned purposes. You also agree that we have the right to use and store such data on our internal systems, as well as transfer it to our associated entities. If you have any questions regarding how we will utilise your information, please contact us."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Jurisdiction "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Website is subject to the laws of the Hong Kong Special Administrative Region, and any disputes arising from your use of this website will be handled exclusively by courts in that region."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Changes to the Website"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "The information on this Website, including these terms and conditions, is subject to change without notice. We have the right to discontinue the provision of all or any of the information on the Website at any time with or without prior notice. You agree to review these terms and conditions on a regular basis, and your continued usage of the Website implies that you accept such modifications."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Severability of Provisions"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "If any part of these terms and conditions is forbidden or unenforceable in a specific jurisdiction, that provision will only be ineffective in that jurisdiction to the extent of the prohibition or unenforceability. This does not invalidate the remainder of these terms and conditions nor affect the validity or enforceability of that provision in another jurisdiction."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Indemnity "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "You shall be liable to us for any loss, liability or cost we suffer as a result of your use of the Website or any breach of these terms. You agree to indemnify, defend and hold harmless us and our agents, employees and third party sources from and against any and all suits, losses, claims, demands, liabilities, damages, costs and expenses (including properly incurred legal fees) that arise from or relate to: (a) your use of the Website; (b) breaches of these terms by you; or (c) violation of any applicable law, statute, ordinance, regulation or of any third party\u2019s rights by you."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                value: value,
                                index: 1,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl my-3",
                                        children: "Privacy Policy"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Privacy Notice covers the personal data we collect from you, how we collect it, with whom we share it and how we process it in connection with your use of this website https://www.base-am.com (the \u201CWebsite\u201D). For the purposes of this Privacy Notice, \u201CBASE\u201D, \u201Cwe\u201D, \u201Cus\u201D, and \u201Cour\u201D means Base Asset Management Limited."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "\u201CPersonal data\u201D refers to any information that can be used to identify you, such as your name, contact details, identification number, account number and balance, transaction history or online identifiers such as your IP address. Personal data does not include data from which you can no longer be identified such as anonymised aggregate data."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We are responsible for how we collect and use personal data about you. If you have questions related to this Privacy Notice or how we handle your personal data, please contact us at info@base-am.com."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "The Categories of Personal Data Collected"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "The types of personal data we may collect about you include the following:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "contact and communications information, including:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your contact details, such as email address(es), telephone numbers and postal address(es);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "records of our past interactions and communications;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "information generated by your computer and software when you visit our website, such as your IP address, browser type and operating system information (note that we do not attempt to identify individuals using this information);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "identification, biographical, educational and social information, including:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your name, title, gender, nationality and age;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your image and likeness of you (for example if we are meeting you in person);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your signature (for example when signing a contract or other document provided to us);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your activities, lifestyle information and social circumstances;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "work related information, including:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your professional activities and interests;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "your involvement with and membership of industry bodies and professional associations;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "other information about your employment and professional life; and"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "other information which you provide in your communications with us."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We also collect and share generalised data, such as statistical or demographic information, for any purpose. This type of data is originated from your personal but cannot be used to identify you specifically. For example, we may compute the percentage of our users who are interested in a certain product type by combining your browsing information with other data. However, if we combine or link aggregated data with your personal data so that it can be used to identify you, we consider the combined data to be personal data under this Privacy Notice and will use it in accordance with this notice."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "If we are required by law to do so, or if we believe that it is necessary to protect our rights and/or comply with judicial or regulatory proceedings, a court order or other legal process, we may collect your personal data without your knowledge or consent."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "How Your Personal Data is Collected"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "There are several ways we may collect your personal data:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you submit your information on our Website through our contact form;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you request literature or research information from us;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you visit and browse our Website;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you attend our webinar presentations;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you attend the events hosted or co-hosted by BASE; and"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when we send you emails."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We may also collect certain information when you interact with our Website, such as your device type and browsing actions and patterns. We collect this personal data through using cookies, server logs and other similar technologies. Please see our Cookie Policy for further details."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "Furthermore, we may receive your personal data from third parties and public sources, such as:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the company we use to provide services to you, such as our webinar service provider;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the companies contracted by us to offer or market our sales materials to you, such as our sales affiliates and external partners;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "our marketing service provider may combine the data provided on our Website by you with other publicly available data about you, such as your social media account information."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Whom Your Personal Data is Shared"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "We may share your personal data with third parties where required by law, where you have consented, or where we have another legitimate interest in doing so, such as:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "our service providers, including attorneys, IT service providers, webinar service provider and marketing service provider;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "our sales affiliates and external partners;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you visit and browse our Website;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "when you attend our webinar presentations;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "other entities in our group for advertising and marketing purposes, and for system support maintenance and hosting of data in the event of business reorganisation or group restructuring exercise;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a regulator or government entity if required by law, or if we reasonably believe that disclosure is necessary to protect our rights and/or to comply with judicial or regulatory proceedings, a court order, or other legal process."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Retention of Your Personal Data"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Personal data will be kept for as long as necessary to complete the purposes for which you gave it to us, such as satisfying any legal, regulatory, accounting, or reporting requirements. We assess the amount, type and sensitivity of your personal data, as well as the potential risk of harm from unauthorised use or disclosure of your personal data, whether we can fulfil the purposes goals through alternative methods and the applicable legal requirements when defining the appropriate retention period for personal data."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We may anonymise your personal data in some cases to prevent it from being linked to you, in which case it no longer constitutes personal data. We will securely erase your personal data in line with applicable laws and regulations once we no longer require it for the purposes for which we collected it."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Your Rights to Withdraw Your Consent"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "If you have given your consent for us to collect, process, and transfer your personal data for a specific purpose, you can withdraw that consent at any time. To withdraw your consent, please contact us at info@base-am.com. Once we receive notification of your withdrawn consent, we will no longer process your information unless we have an alternative legal basis for doing so."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "In order to protect your information and ensure that only you have access to it, we may request specific details from you. This is a security measure to guarantee that personal data is not given to anyone who isn't allowed to receive it. We strive to safeguard all information we collect from you, but we cannot guarantee the security of any information you submit to us."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Changes to the Privacy Notice"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We have the right to update this Privacy Notice without prior notice at any time, and we will make an updated copy of such Privacy Notice available on our Website."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "This Privacy Notice was intentionally written to be succinct and transparent. It is not a comprehensive description of all aspects of our data collection and usage. Please do not hesitate to contact us at info@base-am.com if you have any questions."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                value: value,
                                index: 2,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-3xl my-3",
                                        children: "Cookie Policy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "font-light ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "my-2 text-justify",
                                            children: "When you visit this website https://www.base-am.com (the \u201CWebsite\u201D), we collect and process information about your usage of the Website using cookies and other similar technologies. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. For the purposes of this Cookie Policy, \u201CBASE\u201D, \u201Cwe\u201D, \u201Cus\u201D, and \u201Cour\u201D means Base Asset Management Limited."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "What are Cookies?"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Cookies are small text files containing small amounts of information which are downloaded and may be stored on any of your internet enabled devices e.g. your computer, smartphone or tablet - like a memory for a web page."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "This means we automatically collect and store the following information about your visit:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the internet domain and IP address from where you access the Website;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the type of browser software and operating system used to access the Services and type of device;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the date and time you access the Website;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "if you linked to the Services from another website, the address of that website; and"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the pages or links you enter, visit and exit the Website from."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Please go to our Privacy Policy page for full details of the information we collect and how we use your personal information."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Use of Cookies"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "We use the following cookies:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "font-semibold italic",
                                                        children: "Strictly Necessary Cookies"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-justify",
                                                        children: "These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website. These cookies will be deleted when you finish your session on our website."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "font-semibold italic",
                                                        children: "Analytical/Performance Cookies"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-justify",
                                                        children: "These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "font-semibold italic",
                                                        children: "Functionality Cookies"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-justify",
                                                        children: "These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region etc.)."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "font-semibold italic",
                                                        children: "Targeting Cookies"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "text-justify",
                                                        children: "These cookies record your visit to our website, the pages you have visited and the links you have followed. We may also share this information with third parties for this purpose."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "Some cookies on the Website and other parts of the Services are controlled by third parties, such as social media APIs and external website providers. These cookies are frequently analytical/performance or targeting cookies. You should refer to the third parties\u2019 own cookie and privacy policies to learn how they intend to use your data."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "The third party cookies we use in our Services, include but are not limited to:"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "text-justify",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-semibold italic text-justify",
                                                                children: "Google -"
                                                            }),
                                                            "our Website and Services have embedded Google services/tools, such as \u2018Google Analytics\u2019 for better user experience and analytics purposes. For details of Google cookies usage, please click here."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "text-justify",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-semibold italic text-justify",
                                                                children: "Twitter -"
                                                            }),
                                                            "our Website and Services have embedded Twitter API for social media sharing purpose. For details of Twitter cookies usage, please click here."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "text-justify",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "font-semibold italic text-justify",
                                                                children: "LinkedIn -"
                                                            }),
                                                            "our Website and Services have embedded Twitter API for social media sharing purpose. For details of Twitter cookies usage, please click here."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Manage Your Cookie Settings"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "By enabling your browser's preference to refuse all or some cookies, you can prevent cookies from being stored. Please keep in mind that if you use your browser's settings to block all cookies (including essential cookies), you may not be able to access some or all of our Services. Click here to view your cookie settings."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "You can delete cookies that our Website sets on your browser in the future if you want. The instructions for removing cookies from your device depend on which operating system and web browser you use. Please keep in mind, however, that ceasing agreement to the use of cookies on our website will reduce functionality of those same sites."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "space-y-4 mb-7 font-light",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "font-semibold my-6",
                                                children: "Changes to the Cookie Policy"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-2 text-justify",
                                                children: "We have the right to update this Cookie Policy without prior notice at any time, and we will make an updated copy of such Cookie Policy available on our Website. If you require any further information, please do not hesitate to contact us at info@base-am.com."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TabPanel, {
                                value: value,
                                index: 3,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "font-semibold my-6",
                                        children: "Securities of Futures Commissions Ordinance (Cap. 571) (the \u201CSFO\u201D)"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold text-justify",
                                                children: "Under Section 1 of Part I of Schedule 1 of the SFO, \u201Cprofessional investor\u201D means :\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "Any recognized exchange company, recognized clearing house, recognized exchange controller or recognized investor compensation company, or any person authorized to provide automated trading services under section 95(2) of this Ordinance;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any intermediary, or any other person carrying on the business of the provision of investment services and regulated under the law of any place outside Hong Kong;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any authorized financial institution, or any bank which is not an authorized financial institution but is regulated under the law of any place outside Hong Kong;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any insurer authorized under the Insurance Ordinance (Cap. 41), or any other person carrying on insurance business and regulated under the law of any place outside Hong Kong; (Amended 12 of 2015 s. 144)"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any scheme which\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "is a collective investment scheme authorized under section 104 of this Ordinance; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "is similarly constituted under the law of any place outside Hong Kong and, if it is regulated under the law of such place, is permitted to be operated under the law of such place, or any person by whom any such scheme is operated;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any registered scheme as defined in section 2(1) of the Mandatory Provident Fund Schemes Ordinance (Cap. 485), or its constituent fund as defined in section 2 of the Mandatory Provident Fund Schemes (General) Regulation (Cap. 485 sub. leg. A), or any person who, in relation to any such registered scheme, is an approved trustee or service provider as defined in section 2(1) of that Ordinance or who is an investment manager of any such registered scheme or constituent fund;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any scheme which\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "is a registered scheme as defined in section 2(1) of the Occupational Retirement Schemes Ordinance (Cap. 426); or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "is an offshore scheme as defined in section 2(1) of that Ordinance and, if it is regulated under the law of the place in which it is domiciled, is permitted to be operated under the law of such place, or any person who, in relation to any such scheme, is an administrator as defined in section 2(1) of that Ordinance;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any government (other than a municipal government authority), any institution which performs the functions of a central bank, or any multilateral agency;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "except for the purposes of Schedule 5 to this Ordinance, any corporation which is\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a wholly owned subsidiary of\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an intermediary, or any other person carrying on the business of the provision of investment services and regulated under the law of any place outside Hong Kong; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an authorized financial institution, or any bank which is not an authorized financial institution but is regulated under the law of any place outside Hong Kong;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a holding company which holds all the issued share capital of\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an intermediary, or any other person carrying on the business of the provision of investment services and regulated under the law of any place outside Hong Kong; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an authorized financial institution, or any bank which is not an authorized financial institution but is regulated under the law of any place outside Hong Kong; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any other wholly owned subsidiary of a holding company referred to in subparagraph (ii); or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "any person of a class which is prescribed by rules made under section 397 of this Ordinance for the purposes of this paragraph as within the meaning of this definition for the purposes of the provisions of this Ordinance, or to the extent that it is prescribed by rules so made as within the meaning of this definition for the purposes of any provision of this Ordinance."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "font-semibold my-6",
                                        children: "Securities and Futures (Professional Investor) Rules (Cap. 571D) (the \u201CPI Rules\u201D)"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold pb-3",
                                                children: "Under Section 3 of the PI Rules, \u201CPersons prescribed as professional investors\u201D means\u2014"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "For the purposes of paragraph (j) of the definition of professional investor in section 1 of Part 1 of Schedule 1 to the Ordinance, the following persons are prescribed as within the meaning of that definition for the purposes of any provision of the Ordinance other than Schedule 5\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a trust corporation specified in section 4;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an individual specified in section 5(1);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a corporation (other than a trust corporation referred to in paragraph (a)) specified in section 6;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a partnership specified in section 7."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold py-3",
                                                children: "Section 4. Trust corporations"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "A trust corporation specified for the purposes of section 3(a) is a trust corporation having been entrusted under one or more trusts of which it acts as a trustee with total assets of not less than $40 million at the relevant date or as ascertained in accordance with section 8."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold py-3",
                                                children: "Section 5. Individuals"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "An individual specified for the purposes of section 3(b) is an individual having a portfolio of not less than $8 million at the relevant date or as ascertained in accordance with section 8, when any one or more of the following are taken into account\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a portfolio on the individual\u2019s own account;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a portfolio on a joint account with the individual\u2019s associate;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the individual\u2019s share of a portfolio on a joint account with one or more persons other than the individual\u2019s associate;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a portfolio of a corporation which, at the relevant date, has as its principal business the holding of investments and is wholly owned by the individual."
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "For the purposes of subsection (1)(c), an individual\u2019s share of a portfolio on a joint account with one or more persons other than the individual\u2019s associate is\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "the individual\u2019s share of the portfolio as specified in a written agreement among the account holders; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "in the absence of an agreement referred to in paragraph (a), an equal share of the portfolio."
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold py-3",
                                                children: "Section 6. Corporations"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "A corporation specified for the purposes of section 3(c) is\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a corporation having\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a portfolio of not less than $8 million; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "total assets of not less than $40 million, at the relevant date or as ascertained in accordance with"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "section 8;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a corporation which, at the relevant date, has as its principal business the holding of investments and is wholly owned by any one or more of the following persons\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a trust corporation specified in section 4;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "an individual specified in section 5(1);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a corporation specified in this paragraph or paragraph (a);"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a partnership specified in section 7;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a professional investor within the meaning of paragraph (a), (d), (e), (f), (g) or (h) of the definition of professional investor in section 1 of Part 1 of Schedule 1 to the Ordinance; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a corporation which, at the relevant date, wholly owns a corporation referred to in paragraph"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold py-3",
                                                children: "Section 7. Partnerships"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "A partnership specified for the purposes of section 3(d) is a partnership having\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a portfolio of not less than $8 million; or"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "total assets of not less than $40 million,"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "at the relevant date or as ascertained in accordance with section 8."
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "font-light ",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "font-semibold py-3",
                                                children: "Section 8. Ascertaining total assets or portfolio"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-justify",
                                                children: "For the purposes of section 4, 5(1), 6(a) or 7, the total assets entrusted to a trust corporation, the portfolio of an individual, or the portfolio or total assets of a corporation or partnership, are to be ascertained by referring to any one or more of the following\u2014"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "list-disc ml-7",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "for a trust corporation, corporation or partnership, the most recent audited financial statement prepared within 16 months before the relevant date in respect of the trust corporation (or a trust of which it acts as a trustee), corporation or partnership;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "for a trust corporation, individual, corporation or partnership, any one or more of the following documents issued or submitted within 12 months before the relevant date\u2014"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a statement of account or a certificate issued by a custodian;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a certificate issued by an auditor or a certified public accountant;"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "text-justify",
                                                        children: "a public filing submitted by or on behalf of the trust corporation (whether on its own behalf or in respect of a trust of which it acts as a trustee), individual, corporation or partnership."
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "my-5 mb-10",
                                                children: "*Under Section 2A of the PI Rules, \u201CIn these Rules, a reference to an amount expressed in Hong Kong dollars includes its equivalent in any foreign currency.\u201D"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_TermOfUse = (TermOfUse);

;// CONCATENATED MODULE: ./components/footer.tsx



function footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "text-center lg:text-left text-gray-600",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center items-center lg:justify-between border-separate border-spacing-4 border-b-4 border-t border-[#001B71]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lg:mr-12 lg:pl-16 flex font-black text-[#021B71]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "cursor-pointer text-xs lg:text-xl",
                            children: "Base Asset Management Limited"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-center lg:border-l-4 border-[#001B71]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:pl-6 border-[#001B71] lg:mr-6 text-[#001B71] p-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "mailto:info@base-am.com",
                                    className: "font-bold text-[#001B71] text-xs lg:text-base",
                                    children: "info@base-am.com"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#!",
                                className: "hidden lg:block pr-6 pt-6 text-gray-600",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "linkedin-in",
                                    className: "w-3.5",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 448 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "currentColor",
                                        d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#!",
                                className: "hidden lg:block pr-6 pt-6 text-gray-600",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    focusable: "false",
                                    "data-prefix": "fab",
                                    "data-icon": "twitter",
                                    className: "w-4",
                                    role: "img",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fill: "currentColor",
                                        d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:mx-6 lg:mr-12 lg:py-10 text-center md:text-left",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "lg:mr-6 lg:grid lg:grid-1 lg:grid-cols-2 lg:grid-cols-2 lg:gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: " pl-[2.5rem] font-semibold mb-4 flex items-center justify-center md:justify-start text-[#001B71] cursor-default hidden lg:block ",
                                children: "Copyright 2022 \xa9 BASE. All rights reserved."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:mr-6 text-sm p-6 lg:p-0 lg:text-xl lg:py-1 flex lg:justify-end ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "lg:border-r-2 border-[#001B71] text-[#001B71] cursor-pointer lg:pr-4",
                                    children: "Privacy Policy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "pl-4 text-[#001B71]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(components_TermOfUse, {})
                            ]
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 1503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaxWidthDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8611);
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9404);
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1094);
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2268);
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8891);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__);












function MaxWidthDialog() {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    };
    const handleClose = ()=>{
        setOpen(false);
    };
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.createTheme)({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: "#021B71"
            },
            secondary: {
                // This is green.A700 as hex.
                main: "#11cb5f"
            }
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    p: 2,
                    textTransform: "capitalize"
                },
                onClick: handleClickOpen,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11___default()), {
                    color: "common.white",
                    children: "Investor login"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4___default()), {
                sx: {
                    "& .MuiDialog-paper": {
                        position: "absolute",
                        right: 0,
                        top: 75,
                        marginRight: 0,
                        paddingright: 0,
                        borderRadius: 0
                    }
                },
                open: open,
                onClose: handleClose,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_5___default()), {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            onClick: handleClose,
                            className: "cursor-pointer p-3 text-4xl font-extralight",
                            children: "x"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                            noValidate: true,
                            component: "form",
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                width: "350px"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    sx: {
                                        mt: 6,
                                        minWidth: 120
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            id: "demo-helper-text-aligned",
                                            label: "Email address"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9___default()), {
                                            id: "demo-helper-text-aligned-no-helper",
                                            label: "Password"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material_styles__WEBPACK_IMPORTED_MODULE_10__.ThemeProvider, {
                                    theme: theme,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        variant: "contained",
                                        color: "primary",
                                        className: "bg-[#021B71]",
                                        children: "Login"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7___default()), {
                        className: "p-6 text-black font-bold text-center",
                        children: "Forget passoword"
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;