import React, { useState, useRef } from "react";
import Button from "../components/backToTop";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "react-select";
import rightArrow from "../public/img/Arrow1.png";
import Image from "next/image";
import { sendContactForm } from "../components/Services";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type OptionType = {
  value: string;
  label: string;
};

type interestType = {
  value: number;
  label: string;
};

type describeType = {
  value: number;
  label: string;
};
const Countrys: OptionType[] = [
  { label: "Albania", value: "1" },
  { label: "Algeria", value: "2" },
  { label: "Angola", value: "3" },
  { label: "Anguilla", value: "4" },
  { label: "Argentina", value: "5" },
  { label: "Armenia", value: "6" },
  { label: "Aruba", value: "7" },
  { label: "Australia", value: "8" },
  { label: "Austria", value: "9" },
  { label: "Azerbaijan", value: "10" },
  { label: "Bahamas", value: "11" },
  { label: "Bahrain", value: "12" },
  { label: "Bangladesh", value: "13" },
  { label: "Barbados", value: "14" },
  { label: "Belarus", value: "15" },
  { label: "Belgium", value: "16" },
  { label: "Belize", value: "17" },
  { label: "Benin", value: "18" },
  { label: "Bermuda", value: "19" },
  { label: "Bhutan", value: "20" },
  { label: "Bolivia", value: "21" },
  { label: "Bosnia and Herzegovina", value: "22" },
  { label: "Botswana", value: "23" },
  { label: "Brazil", value: "24" },
  { label: "Brunei Darussalam", value: "25" },
  { label: "Bulgaria", value: "26" },
  { label: "Burkina Faso", value: "27" },
  { label: "Burundi", value: "28" },
  { label: "Cambodia", value: "29" },
  { label: "Cameroon", value: "30" },
  { label: "Canada", value: "31" },
  { label: "Cape Verde", value: "32" },
  { label: "Cayman Islands", value: "33" },
  { label: "Central African Rep", value: "34" },
  { label: "Chad", value: "35" },
  { label: "Chile", value: "36" },
  { label: "China (People's Rep)", value: "37" },
  { label: "Colombia", value: "38" },
  { label: "Congo(Rep)", value: "39" },
  { label: "Cook Islands", value: "40" },
  { label: "Costa Rica", value: "41" },
  { label: "Cote d'Ivoire (Rep)", value: "42" },
  { label: "Croatia", value: "43" },
  { label: "Cyprus", value: "44" },
  { label: "Czech (Rep)", value: "45" },
  { label: "Luxembourg", value: "46" },
  { label: "Macao", value: "47" },
  { label: "Macedonia", value: "48" },
  { label: "Madagascar", value: "49" },
  { label: "Malawi", value: "50" },
  { label: "Malaysia", value: "51" },
  { label: "Maldives", value: "52" },
  { label: "Mali", value: "53" },
  { label: "Malta", value: "54" },
  { label: "Mauritius", value: "55" },
  { label: "Mauritania", value: "56" },
  { label: "Mexico", value: "57" },
  { label: "Moldova", value: "58" },
  { label: "Mongolia", value: "59" },
  { label: "Morocco", value: "60" },
  { label: "Myanmar", value: "61" },
  { label: "Namibia", value: "62" },
  { label: "Nauru", value: "63" },
  { label: "Nepal", value: "64" },
  { label: "Netherlands", value: "65" },
  { label: "New Caledonia", value: "66" },
  { label: "New Zealand", value: "67" },
  { label: "Niger", value: "68" },
  { label: "Nigeria", value: "69" },
  { label: "Norway", value: "70" },
  { label: "Oman", value: "71" },
  { label: "Pakistan", value: "72" },
  { label: "Panama", value: "73" },
  { label: "Papua New Guinea", value: "74" },
  { label: "Paraguay", value: "75" },
  { label: "Peru", value: "76" },
  { label: "Philippines", value: "77" },
  { label: "Poland", value: "78" },
  { label: "Portugal", value: "79" },
  { label: "Qatar", value: "80" },
  { label: "Romania", value: "81" },
  { label: "Russian Federation", value: "82" },
  { label: "Rwanda", value: "83" },
  { label: "Saint Christopher (St. Kitts) and Nevis", value: "84" },
  { label: "Dem Rep of Congo", value: "85" },
  { label: "Denmark", value: "86" },
  { label: "Dominican Rep.", value: "87" },
  { label: "Dominica (Commonwealth of)", value: "88" },
  { label: "Ecuador", value: "89" },
  { label: "Egypt", value: "90" },
  { label: "El Salvador", value: "91" },
  { label: "Eritrea", value: "92" },
  { label: "Estonia", value: "93" },
  { label: "Ethiopia", value: "94" },
  { label: "Fiji", value: "95" },
  { label: "Finland", value: "96" },
  { label: "French Polynesia", value: "97" },
  { label: "France", value: "98" },
  { label: "Gabon", value: "99" },
  { label: "Georgia", value: "100" },
  { label: "Germany", value: "101" },
  { label: "Ghana", value: "102" },
  { label: "Gibraltar", value: "103" },
  {
    label: "United Kingdom of Great Britain and Northern Ireland",
    value: "104",
  },
  { label: "Greece", value: "105" },
  { label: "Grenada", value: "106" },
  { label: "Guatemala", value: "107" },
  { label: "Guinea", value: "108" },
  { label: "Guyana", value: "109" },
  { label: "Haiti", value: "110" },
  { label: "Honduras", value: "111" },
  { label: "Hong Kong", value: "112" },
  { label: "Hungary", value: "113" },
  { label: "Iceland", value: "114" },
  { label: "India", value: "115" },
  { label: "Indonesia", value: "116" },
  { label: "Iran", value: "117" },
  { label: "Iraq", value: "118" },
  { label: "Ireland", value: "119" },
  { label: "Israel", value: "120" },
  { label: "Italy", value: "121" },
  { label: "Jamaica", value: "122" },
  { label: "Japan", value: "123" },
  { label: "Jordan", value: "124" },
  { label: "Kenya", value: "125" },
  { label: "Korea (Rep)", value: "126" },
  { label: "Kuwait", value: "127" },
  { label: "Lao People's Dem Rep", value: "128" },
  { label: "Latvia", value: "129" },
  { label: "Lesotho", value: "130" },
  { label: "Saint Lucia", value: "131" },
  { label: "Saint Vincent and the Grenadines", value: "132" },
  { label: "Sao Tome and Principe", value: "133" },
  { label: "Saudi Arabia", value: "134" },
  { label: "Senegal", value: "135" },
  { label: "Seychelles", value: "136" },
  { label: "Sierra Leone", value: "137" },
  { label: "Singapore", value: "138" },
  { label: "Slovakia", value: "139" },
  { label: "Slovenia", value: "140" },
  { label: "Solomon Islands", value: "141" },
  { label: "Somalia", value: "142" },
  { label: "South Africa", value: "143" },
  { label: "Spain", value: "144" },
  { label: "Sri Lanka", value: "145" },
  { label: "Sudan", value: "146" },
  { label: "Suriname", value: "147" },
  { label: "Swaziland", value: "148" },
  { label: "Sweden", value: "149" },
  { label: "Switzerland", value: "150" },
  { label: "Syrian Arab Rep", value: "151" },
  { label: "Tanzania", value: "152" },
  { label: "Thailand", value: "153" },
  { label: "Togo", value: "154" },
  { label: "Trinidad and Tobago", value: "155" },
  { label: "Tunisia", value: "156" },
  { label: "Turkey", value: "157" },
  { label: "Uganda", value: "158" },
  { label: "Ukraine", value: "159" },
  { label: "United Arab Emirates", value: "160" },
  { label: "United States of America", value: "161" },
  { label: "Uruguay", value: "162" },
  { label: "Venezuela", value: "163" },
  { label: "Viet Nam", value: "164" },
  { label: "Western Samoa", value: "165" },
  { label: "Yemen", value: "166" },
  { label: "Yugoslavia", value: "167" },
  { label: "Zambia", value: "168" },
  { label: "Zimbabwe", value: "169" },
];

const interests: interestType[] = [
  { value: 1, label: "Advisory Service" },
  { value: 2, label: "Discretionary Account" },
  { value: 3, label: "Investment Fund" },
];

const describes: describeType[] = [
  { value: 1, label: "Investment Advisor" },
  { value: 2, label: "Asset Owner / Institutional Investor" },
  { value: 3, label: "Individual / Corporate Investor" },
];

export default function ContactForm() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  const [message, setMessage] = useState("");
  const [countryMessage, setCountryMessage] = useState("");
  const [describleMessage, setDescribleMessage] = useState("");
  const [interestMessage, setInterestMessage] = useState("");

  const [isShown, setIsShown] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [value, setValue] = useState();
  const [describeOption, setDescribleOption] = useState();
  const [interestOption, setInterestOption] = useState();
  const [remark, setRemark] = useState("");
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTimeout(function () {
      router.push("/");
    }, 2000);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(formRef.current);
  }, [formRef]);

  const onDropdownChange = (e) => {
    setValue(e.label);
    console.log(e.label);
  };

  const onDescribleChange = (describeOption) => {
    setDescribleOption(describeOption.label);
    console.log(describeOption.label);
  };
  const onInterestChange = (interestOption) => {
    setInterestOption(interestOption);
    console.log(interestOption);
  };
  const onTextChange = (e) => {
    setRemark(e.target.value);
    console.log(remark);
  };

  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e.preventDefault());

    const res = await sendContactForm({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      companyTitle: e.target[2].value,
      companyEmail: e.target[3].value,
      country: value,
      describe: describeOption,
      services: interestOption,
      message: remark,
    });
    console.log(res);
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current;
      console.log(formRef.current);
      handleOpen();
    } else {
      setMessage("Something went wrong! Please try again");

      if (value === undefined) {
        setCountryMessage("Please select Country/Region");

      } else {
        setCountryMessage("");
      }
      if (describeOption === undefined) {
        setDescribleMessage("Please tell us how would you describe yourself?");

      } else {
        setDescribleMessage("");
      }
    
      if (interestOption === undefined) {
        setInterestMessage(
          "Please select which services are you interested in?"
        );
      } else {
        setInterestMessage("");
      }
    }
  };

  const style = {
    control: (base, state) => ({
      ...base,
      border: "1px solid #BFC6C3",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #BFC6C3",
      },
    }),
  };

  return (
    
    <div className="relative w-full bg-[#F5F5F5] flex flex-col justify-left items-left">
      <ThemeProvider theme={theme}>
        <div className="max-w-[1440px] lg:pb-[97px] pb-[70px]">
          <main className="pt-[5rem] border-grey border-t-4 mx-[10%]">
            <header className="">
              <div className="lg:mb-[56px] mb-[12px]">
                <h1 className="font-normal lg:mt-[101px]	lg:text-[82px] lg:leading-[96px] mt-[86px] text-[46px] leading-[32px] text-[#001673]">
                  Contact Us
                </h1>
                <p className="font-normal lg:mt-[49px]	lg:text-[16px]  lg:leading-[28px] mt-[49px]	text-[15px]  leading-[25px]">
                  Thank you for your interest!
                  {message}
                  <span onClick={() => setMessage("")}>&times; </span>
                </p>

                <p className="font-normal lg:mt-[20px]	lg:text-[16px]  lg:leading-[28px] mt-[20px]	text-[15px]  leading-[25px]">
                  Please complete the form below and we’ll be in touch as soon
                  as possible.
                </p>
              </div>
              <h1 className="font-normal text-[18px] mb-[24px] leading-[28px] text-[#E04403]">
                (*Mandatory data)
              </h1>
              <form
                action=""
                className="w-[90%]"
                ref={formRef}
                onSubmit={submitContact}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-first-name"
                    >
                      First Name <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="grid-first-name"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-last-name"
                    >
                      Last Name <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="grid-last-name"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-company-title"
                    >
                      Company Title <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="grid-company-title"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="email"
                    >
                      Company Email <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <input
                      required
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-company-Name"
                    >
                      Company Name <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="grid-company-Name"
                      type="text"
                      required
                    />
                  </div>
                </div>

                <div className="w-full mb-6">
                  <label
                    className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                    htmlFor="grid-describe"
                  >
                    Country/Region <span className="text-[#CBC3BB]">*</span>
                    <span className="text-red-400">{countryMessage}</span>

                  </label>
                  {/* {Country.map((County) => ( */}
                  <Select
                    // key={Country.values}
                    value={Countrys.find(function (Country) {
                      return Country.value === value;
                    })}
                    onChange={onDropdownChange}
                    options={Countrys}
                    required={true}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                      },
                    })}
                    styles={style}
                    id="grid-interested"
                    placeholder={<div>-- Please Select --</div>}
                  />
                </div>
                <div className="w-full mb-6">
                  <label
                    className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                    htmlFor="grid-describe"
                  >
                    How would you describe yourself?                   
                      <span className="text-[#CBC3BB]">*</span>

                    <span className="text-red-400">{describleMessage}</span>


                  </label>
                  <Select
                    value={describes.find(function (describe) {
                      return describe.label === describeOption;
                    })}
                    onChange={onDescribleChange}
                    options={describes}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                      },
                    })}
                    styles={style}
                    id="grid-interested"
                    placeholder={<div>-- Please Select --</div>}
                    required={true}
                  />
                </div>

                <div className="w-full mb-6">
                  <label
                    className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                    htmlFor="grid-describe"
                  >
                    Which services are you interested in? 
                    <span className="text-[#CBC3BB]">*</span>

                    <span className="text-red-400"> {interestMessage} </span>
                  </label>
                  <Select
                    value={interests.find(function (interest) {
                      return interest === interestOption;
                    })}
                    onChange={onInterestChange}
                    options={interests}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      boxShadow: "none",
                      border: "10px solid lightgray",
                      colors: {
                        ...theme.colors,
                      },
                    })}
                    styles={style}
                    id="grid-interested"
                    isMulti
                    placeholder={<div>-- Please Select --</div>}
                    required
                  />
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-Message"
                    >
                      Message <span className="text-[#CBC3BB]">*</span>
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-white text-gray-700 border border-[#BFC6C3] rounded-none py-2 px-4 leading-tight focus:outline-none  "
                      id="grid-Message"
                      rows={4}
                      required
                      value={remark}
                      onChange={onTextChange}
                    />
                  </div>
                </div>

                <div>
                  <button
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    className="lg:mt-[40px] mt-[10px] w-[170px] h-[58px] bg-[#001B71] text-white font-bold text-[14px] leading-[17px]"
                  >
                    {!isShown && <p>Submit</p>}
                    {isShown && (
                      <div className="flex justify-around mx-[31.5px]">
                        <div className="self-center">
                          <p>Submit</p>
                        </div>
                        <div className="pt-1">
                          <Image src={rightArrow} />
                        </div>
                      </div>
                    )}
                  </button>
                </div>
                <div className="self-center">{message}</div>
              </form>
            </header>
            <div>
              {/* <MuiButton onClick={handleOpen}>Open modal</MuiButton> */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute" as "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    boxShadow: 24,
                    pt: 2,
                    px: 4,
                    pb: 3,
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Thank you for your submission
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    We will get back to you soon!
                  </Typography>
                </Box>
              </Modal>
            </div>
            <div>
              <div className="border-t-[1px] border-[#CBC3BB] lg:mt-[78px] mt-[36px]"></div>
              <div className="lg:mt-[53px] mt-[23px]">
                <span className="text-[#CBC3BB] font-medium text-[16px] leading-[28px]">
                  Address
                </span>
                <br />
                <p className="font-medium lg:text-[18px] mt-[17px] lg:leading-[28px] text-[15px] leading-[25px]">
                  Rm 1904, Tung Che Commercial Centre, 246 Des Voeux Road West,
                  Hong Kong
                </p>
              </div>
            </div>
          </main>
        </div>
      </ThemeProvider>
      <Button />
    </div>
  );
}
