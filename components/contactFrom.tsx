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
import Header from "../components/contactMenu";

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

const Countrych: OptionType[] = [
  { label: "阿爾巴尼亞", value: "1" },
  { label: "阿爾及利亞", value: "2" },
  { label: "安哥拉", value: "3" },
  { label: "安圭拉", value: "4" },
  { label: "阿根廷", value: "5" },
  { label: "亞美尼亞", value: "6" },
  { label: "阿路巴", value: "7" },
  { label: "澳大利亞", value: "8" },
  { label: "奧地利", value: "9" },
  { label: "亞塞拜然", value: "10" },
  { label: "巴哈馬", value: "11" },
  { label: "巴林", value: "12" },
  { label: "孟加拉", value: "13" },
  { label: "巴貝多", value: "14" },
  { label: "白俄羅斯", value: "15" },
  { label: "比利時", value: "16" },
  { label: "貝里斯", value: "17" },
  { label: "貝南", value: "18" },
  { label: "百慕達", value: "19" },
  { label: "不丹", value: "20" },
  { label: "玻利維亞", value: "21" },
  { label: "波希尼亞及赫塞哥維那", value: "22" },
  { label: "波札那", value: "23" },
  { label: "巴西", value: "24" },
  { label: "汶萊", value: "25" },
  { label: "保加利亞", value: "26" },
  { label: "有吉納法索", value: "27" },
  { label: "蒲隆地", value: "28" },
  { label: "柬埔寨", value: "29" },
  { label: "喀麥隆", value: "30" },
  { label: "加拿大", value: "31" },
  { label: "維德角島", value: "32" },
  { label: "開曼群島", value: "33" },
  { label: "中非共和國", value: "34" },
  { label: "查德", value: "35" },
  { label: "智利", value: "36" },
  { label: "中國大陸", value: "37" },
  { label: "哥倫比亞", value: "38" },
  { label: "剛果", value: "39" },
  { label: "科克群島", value: "40" },
  { label: "哥斯大黎加", value: "41" },
  { label: "象牙海岸", value: "42" },
  { label: "克羅埃西亞", value: "43" },
  { label: "塞浦路斯", value: "44" },
  { label: "捷克", value: "45" },
  { label: "盧森堡", value: "46" },
  { label: "澳門", value: "47" },
  { label: "馬其頓", value: "48" },
  { label: "馬達加斯加", value: "49" },
  { label: "馬拉威", value: "50" },
  { label: "馬來西亞", value: "51" },
  { label: "馬爾地夫", value: "52" },
  { label: "馬利", value: "53" },
  { label: "馬爾他", value: "54" },
  { label: "模里西斯", value: "55" },
  { label: "茅利塔尼亞", value: "56" },
  { label: "墨西哥", value: "57" },
  { label: "摩爾多瓦", value: "58" },
  { label: "蒙古", value: "59" },
  { label: "摩洛哥", value: "60" },
  { label: "緬甸", value: "61" },
  { label: "納米比亞", value: "62" },
  { label: "諾魯", value: "63" },
  { label: "尼泊爾", value: "64" },
  { label: "荷蘭", value: "65" },
  { label: "新喀里多尼亞", value: "66" },
  { label: "紐西蘭", value: "67" },
  { label: "尼日", value: "68" },
  { label: "奈及利亞", value: "69" },
  { label: "挪威", value: "70" },
  { label: "阿曼", value: "71" },
  { label: "巴基斯坦", value: "72" },
  { label: "巴拿馬", value: "73" },
  { label: "巴布亞紐幾內亞", value: "74" },
  { label: "巴拉圭", value: "75" },
  { label: "秘魯", value: "76" },
  { label: "菲律賓", value: "77" },
  { label: "波蘭", value: "78" },
  { label: "葡萄牙", value: "79" },
  { label: "卡達", value: "80" },
  { label: "羅馬尼亞", value: "81" },
  { label: "俄羅斯", value: "82" },
  { label: "盧安達", value: "83" },
  { label: "聖克里斯多福及尼維斯", value: "84" },
  { label: "剛果", value: "85" },
  { label: "丹麥", value: "86" },
  { label: "多明尼加", value: "87" },
  { label: "多米尼克", value: "88" },
  { label: "厄瓜多爾", value: "89" },
  { label: "埃及", value: "90" },
  { label: "薩爾瓦多", value: "91" },
  { label: "厄利垂亞", value: "92" },
  { label: "愛沙尼亞", value: "93" },
  { label: "衣索匹亞", value: "94" },
  { label: "斐濟", value: "95" },
  { label: "芬蘭", value: "96" },
  { label: "法屬玻里尼西亞", value: "97" },
  { label: "法國", value: "98" },
  { label: "加彭", value: "99" },
  { label: "喬治亞", value: "100" },
  { label: "德國", value: "101" },
  { label: "迦納", value: "102" },
  { label: "直布羅陀", value: "103" },
  { label: "英國", value: "104" },
  { label: "希臘", value: "105" },
  { label: "格瑞那達", value: "106" },
  { label: "瓜地馬拉", value: "107" },
  { label: "幾內亞", value: "108" },
  { label: "蓋亞那", value: "109" },
  { label: "海地", value: "110" },
  { label: "宏都拉斯", value: "111" },
  { label: "香港", value: "112" },
  { label: "匈牙利", value: "113" },
  { label: "冰島", value: "114" },
  { label: "印度", value: "115" },
  { label: "印尼", value: "116" },
  { label: "依朗", value: "117" },
  { label: "伊拉克", value: "118" },
  { label: "愛爾蘭", value: "119" },
  { label: "以色列", value: "120" },
  { label: "義大利", value: "121" },
  { label: "牙買加", value: "122" },
  { label: "日本", value: "123" },
  { label: "約旦", value: "124" },
  { label: "肯亞", value: "125" },
  { label: "韓國", value: "126" },
  { label: "科威特", value: "127" },
  { label: "寮國", value: "128" },
  { label: "拉脫維亞", value: "129" },
  { label: "賴索托", value: "130" },
  { label: "聖露西亞", value: "131" },
  { label: "聖文森及格瑞那丁", value: "132" },
  { label: "聖多美及普林西比", value: "133" },
  { label: "沙烏地阿拉伯", value: "134" },
  { label: "塞內加爾", value: "135" },
  { label: "塞席爾", value: "136" },
  { label: "獅子山", value: "137" },
  { label: "新加坡", value: "138" },
  { label: "斯洛伐克", value: "139" },
  { label: "斯洛維尼亞", value: "140" },
  { label: "索羅門群島", value: "141" },
  { label: "索馬利亞", value: "142" },
  { label: "南非", value: "143" },
  { label: "西班牙", value: "144" },
  { label: "斯里蘭卡", value: "145" },
  { label: "蘇丹", value: "146" },
  { label: "蘇利南", value: "147" },
  { label: "史瓦濟蘭", value: "148" },
  { label: "瑞典", value: "149" },
  { label: "瑞士", value: "150" },
  { label: "敘利亞", value: "151" },
  { label: "坦尚尼亞", value: "152" },
  { label: "泰國", value: "153" },
  { label: "多哥", value: "154" },
  { label: "千里達及托貝哥", value: "155" },
  { label: "突尼西亞", value: "156" },
  { label: "土耳其", value: "157" },
  { label: "烏干達", value: "158" },
  { label: "烏克蘭", value: "159" },
  { label: "阿拉伯聯合大公國", value: "160" },
  { label: "美國", value: "161" },
  { label: "烏拉圭", value: "162" },
  { label: "委內瑞拉", value: "163" },
  { label: "越南", value: "164" },
  { label: "西薩摩亞", value: "165" },
  { label: "葉門", value: "166" },
  { label: "南斯拉夫", value: "167" },
  { label: "尚比亞", value: "168" },
  { label: "辛巴威", value: "169" },
];

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

const interestsch: interestType[] = [
  { value: 1, label: "諮詢服務" },
  { value: 2, label: "全權委託賬戶" },
  { value: 3, label: "投資基金" },
];

const describes: describeType[] = [
  { value: 1, label: "Investment Advisor" },
  { value: 2, label: "Asset Owner / Institutional Investor" },
  { value: 3, label: "Individual / Corporate Investor" },
];

const describesch: describeType[] = [
  { value: 1, label: "投資顧問" },
  { value: 2, label: "資產所有者 / 機構投資者" },
  { value: 3, label: "個人 / 企業投資者" },
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
  const [selectLang, setselectLang] = useState(false);

  const handleCh = () => {
    setselectLang(true);
  };

  const handleEN = () => {
    setselectLang(false);
  };

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
      {
        !selectLang
          ? setMessage("Thank you for your valuable comment!")
          : setMessage("感謝您的寶貴意見！");
      }

      formRef.current;
      console.log(formRef.current);
      handleOpen();
    } else {
      {
        !selectLang
          ? setMessage("Something went wrong! Please try again")
          : setMessage("出了些問題！ 請再試一遍");
      }

      if (value === undefined) {
        {
          !selectLang
            ? setCountryMessage("Please select Country / Region")
            : setCountryMessage("請選擇國家/地區");
        }
      } else {
        setCountryMessage("");
      }
      if (describeOption === undefined) {
        {
          !selectLang
            ? setDescribleMessage(
                "Please tell us how would you describe yourself?"
              )
            : setDescribleMessage("請告訴我們您如何形容自己？");
        }
      } else {
        setDescribleMessage("");
      }

      if (interestOption === undefined) {
        {
          !selectLang
            ? setInterestMessage(
                "Please select which services are you interested in?"
              )
            : setInterestMessage("請選擇您對哪些服務感興趣？");
        }
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
    <>
      <Header handleCh={handleCh} handleEN={handleEN} />
      <div className="relative w-full bg-[#F5F5F5] flex flex-col justify-left items-left">
        <ThemeProvider theme={theme}>
          <div className="max-w-[1440px] lg:pb-[97px] pb-[70px]">
            <main className="pt-[5rem] border-grey border-t-4 mx-[10%]">
              <header className="">
                <div className="lg:mb-[56px] mb-[12px]">
                  <h1 className="font-normal lg:mt-[101px]	lg:text-[82px] lg:leading-[96px] mt-[86px] text-[46px] leading-[32px] text-[#001673]">
                    {!selectLang ? "Contact Us" : "聯絡我們"}
                  </h1>
                  <p className="font-normal lg:mt-[49px]	lg:text-[16px]  lg:leading-[28px] mt-[49px]	text-[15px]  leading-[25px]">
                    {!selectLang
                      ? "Thank you for your interest!"
                      : "感謝您的關注!"}
                    {message}
                    <span onClick={() => setMessage("")}></span>
                  </p>

                  <p className="font-normal lg:mt-[20px]	lg:text-[16px]  lg:leading-[28px] mt-[20px]	text-[15px]  leading-[25px]">
                    {!selectLang
                      ? "Please complete the form below and we’ll be in touch as soon as possible."
                      : "請填寫下表，我們會盡快與您聯繫。"}
                  </p>
                </div>
                <h1 className="font-normal text-[18px] mb-[24px] leading-[28px] text-[#E04403]">
                  {!selectLang ? "*Mandatory data" : "必須填寫"}
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
                        {!selectLang ? "First Name" : "名字"}
                        <span className="text-[#CBC3BB]">*</span>
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
                        {!selectLang ? "Last Name" : "姓氏"}{" "}
                        <span className="text-[#CBC3BB]">*</span>
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
                        {!selectLang ? "Company Title" : "公司職位"}
                        <span className="text-[#CBC3BB]">*</span>
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
                        {!selectLang ? "Company Email" : "公司電子郵箱"}{" "}
                        <span className="text-[#CBC3BB]">*</span>
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
                        {!selectLang ? "Company Name" : "公司名稱"}{" "}
                        <span className="text-[#CBC3BB]">*</span>
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
                      {!selectLang ? "Country / Region" : "國家 / 地區"}{" "}
                      <span className="text-[#CBC3BB]">*</span>
                      <span className="text-red-400">{countryMessage}</span>
                    </label>
                    {/* {Country.map((County) => ( */}
                    {!selectLang ? (
                      <Select
                        // key={Country.values}
                        value={Countrys.find(function (Country) {
                          return Country.value === value;
                        })}
                        onChange={onDropdownChange}
                        options={Countrys}
                        required
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                          },
                        })}
                        styles={style}
                        id="grid-interested"
                        placeholder={
                          <div>
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}
                          </div>
                        }
                      />
                    ) : (
                      <Select
                        value={Countrys.find(function (Country) {
                          return Country.value === value;
                        })}
                        onChange={onDropdownChange}
                        options={Countrych}
                        required
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                          },
                        })}
                        styles={style}
                        id="grid-interested"
                        placeholder={
                          <div>
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}
                          </div>
                        }
                      />
                    )}
                  </div>

                  <div className="w-full mb-6">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-describe"
                    >
                      {!selectLang
                        ? "How would you describe yourself?"
                        : "你會如何形容自己 ？"}
                      <span className="text-[#CBC3BB]">*</span>
                      <span className="text-red-400">{describleMessage}</span>
                    </label>
                    {!selectLang ? (
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
                        required
                        placeholder={
                          <div>
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}
                          </div>
                        }
                      />
                    ) : (
                      <Select
                        value={describes.find(function (describe) {
                          return describe.label === describeOption;
                        })}
                        onChange={onDescribleChange}
                        options={describesch}
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          colors: {
                            ...theme.colors,
                          },
                        })}
                        styles={style}
                        id="grid-interested"
                        placeholder={
                          <div>
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}
                          </div>
                        }
                        required
                      />
                    )}
                  </div>

                  <div className="w-full mb-6">
                    <label
                      className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                      htmlFor="grid-describe"
                    >
                      {!selectLang
                        ? "Which services are you interested in?"
                        : "您對哪些服務感興趣 ？"}
                      <span className="text-[#CBC3BB]">*</span>
                      <span className="text-red-400"> {interestMessage} </span>
                    </label>
                    {!selectLang ? (
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
                        placeholder={
                          <div>
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}
                          </div>
                        }
                        required
                      />
                    ) : (
                      <Select
                        value={interests.find(function (interest) {
                          return interest === interestOption;
                        })}
                        onChange={onInterestChange}
                        options={interestsch}
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
                        placeholder={
                          <div>
                            {" "}
                            {!selectLang
                              ? "-- Please Select --"
                              : "-- 請選擇 --"}{" "}
                          </div>
                        }
                        required
                      />
                    )}
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="text-black-500 text-[16px] leading-[30px] font-normal dark:text-black"
                        htmlFor="grid-Message"
                      >
                        {!selectLang ? "Message" : "留言"}{" "}
                        <span className="text-[#CBC3BB]">*</span>
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
                      {!isShown && <p>{!selectLang ? "Submit" : "提交"}</p>}
                      {isShown && (
                        <div className="flex justify-around mx-[31.5px]">
                          <div className="self-center">
                            <p>{!selectLang ? "Submit" : "提交"}</p>
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
                      {!selectLang
                        ? "Thank you for your submission"
                        : "感謝您提交"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {!selectLang
                        ? "We will get back to you soon!"
                        : "我們會盡快回复您！"}
                    </Typography>
                  </Box>
                </Modal>
              </div>
              <div>
                <div className="border-t-[1px] border-[#CBC3BB] lg:mt-[78px] mt-[36px]"></div>
                <div className="lg:mt-[53px] mt-[23px]">
                  <span className="text-[#CBC3BB] font-medium text-[16px] leading-[28px]">
                    {!selectLang ? "Address" : "地址"}
                  </span>
                  <br />
                  <p className="font-medium lg:text-[18px] mt-[17px] lg:leading-[28px] text-[15px] leading-[25px]">
                    {!selectLang
                      ? "Rm 1904, Tung Che Commercial Centre, 246 Des Voeux Road West, Hong Kong"
                      : "香港德輔道西246號東慈商業中心1904室"}
                  </p>
                </div>
              </div>
            </main>
          </div>
        </ThemeProvider>
        <Button />
      </div>
    </>
  );
}
