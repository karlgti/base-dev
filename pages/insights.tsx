import { useState, useEffect } from "react";
import Image from "next/image";
import mypic from "../public/img/banner/BAM_Pic4.gif";
import Button from "../components/backToTop";
import Footer from "components/footer";
import Header from "../components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import arrow from "../public/img/Arrow 2.png";
import { AxiosResponse } from "axios";
import type { GetServerSideProps, NextPage } from "next";
import { IArticle, ICollectionResponse, IPagination } from "../types";
import Link from "next/link";
import { fetchArticles } from "../http";


interface IPropTypes {
  insights: {
    items: IArticle[],
    pagination: IPagination,
  };
}

const Blog: NextPage<IPropTypes> = ({ insights }) => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [visible, setVisible] = useState(12);

  const showMore = () => {
    setVisible((prevState) => prevState + 4);
  };


  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
    },
  });
  const [visible, setVisible] = useState(9);

  const showMore = () => {
    setVisible((prevState) => prevState + 4);
  };
  return (
    <>
      <div className="w-full">
        <ThemeProvider theme={theme}>
          <Header bg={"#4D008C !important"} />
          <div className="bg-[#4D008C] lg:px-[144px] px-[5%]">
            <div className="lg:max-w-[1200px] m-0 m-auto pt-[90px] lg:pt-[110px] flex justify-between">
              <div className="self-center">
                <h1 className="lg:font-light lg:text-[48px] lg:leading-[60px] text-white font-[300] text-[26px] leading-[32px]">
                  Views. Trends. Observations. <br />
                  And more.
                </h1>
              </div>

              <div className="self-center py-[10px] hidden lg:block">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={350}
                  height={350}
                />
              </div>

              <div className="self-center lg:hidden py-[27px]">
                <Image
                  src={mypic}
                  alt="TheDifferentiator"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F0F0F0] px-[5%] lg:px-[144px] ">
            <div className="max-w-[1200px] lg:pt-[76px] lg:pb-[90px] pb-[1px] pt-[44px] m-0 m-auto">
              <div className="">
                {
                  <h1 className="text-black font-semibold	lg:text-[26px] text-[18px] leading-[24px]">
                    Featured Insights
                  </h1>
                }
              </div>
              <div className="lg:flex mt-[16px]">

                {insights.items.map((content, i) => (
                  <>
                    {content.attributes.blog_id == 1 && (
                      <Link
                        key={i}
                        href={
                          content.attributes.blog_link
                            ? content.attributes.blog_link
                            : "#"
                        }
                      >
                        <div className="relative cursor-pointer lg:w-[65%] lg:mr-[16px] lg:border-t-[8px] border-t-[4px] border-b-[1px] border-[#4D008C]">
                          <div className="mt-[13px] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900 pb-[70px]">
                            <img
                              src={`${content.attributes.blog_image.data.attributes.url}`}
                              width={760}
                              height={434}
                              className="cursor-pointer"
                              alt="Base Asset Management"
                            />
                            <div className="">
                              <div className="font-[600]	lg:text-[14px] text-[14px] lg:mt-[20px] mt-[px] leading-[30px] lg:leading-[30px]">
                                {content.attributes.blog_theme} /{" "}
                                {content.attributes.blog_topic}
                              </div>

                              <div className="font-extrabold mt-[5px]	lg:text-[42px] lg:leading-[56px] text-[24px] leading-[32px] lg:no-underline underline group-hover:underline group-focus:underline">
                                {content.attributes.blog_subject}
                              </div>

                              <div className="font-normal ml-[17px] lg:ml-0 mt-[15px] lg:mt-[32px] lg:text-[16px] text-[13px] leading-[21px] lg:leading-[32px]">
                                <ol className="list-disc lg:list-inside">
                                  In this monthly outlook brief, our Chief Investment Officer Chris Leung shared BASE’s view on:
                                  <br /> <li>

                                    The overall market trend remains in line with our house view.</li>
                                  <li>The rally since November was not sustainable as investors are more emotional-driven or FOMO; we remain bearish in the medium term.</li>
                                  <li>We expect most countries to report worse-than-expected economic or earnings forecasts soon; this would be the beginning stage of the recession-led correction.</li>
                                  <li> 2023 will be about Recession and Earnings.
                                  </li>
                                </ol>
                              </div>

                              <br />
                              <br className="hidden lg:block" />
                              <div className="font-normal	lg:text-[16px] text-[13px] leading-[21px] lg:leading-[28px]">
                                {/* Other markets (Dow/HSI/Crypto) behaved similarly
                                but on different amplitude as expected too. */}
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-0 w-full">
                            <div className="flex justify-between">
                              <div>
                                <Link
                                  href={
                                    content.attributes.platform_link
                                      ? content.attributes.platform_link
                                      : "#"
                                  }
                                  className="text-gray-600"
                                >
                                  <Image
                                    src={`${content.attributes.blog_platform.data.attributes.url}`}
                                    width={31}
                                    height={31}
                                    className="cursor-pointer"
                                    alt="Base Asset Management"
                                  />
                                </Link>
                              </div>
                              <div className="font-medium text-[12px] pt-[14px] leading-[22px] text-[#000000]">
                                {content.attributes.blog_date}
                              </div>
                            </div>
                          </div>

                        </div>
                      </Link>
                    )}
                  </>
                ))}

                <div className="lg:w-[35%] ml-[16px] hidden lg:block  border-t-[8px] border-[#4D008C]">
                  {insights.items.map((content, i) => (
                    <>
                      {content.attributes.blog_id >= 2 &&
                        content.attributes.blog_id <= 3 && (
                          <Link
                            key={i}
                            href={
                              content.attributes.blog_link
                                ? content.attributes.blog_link
                                : "#"
                            }
                          >
                            <div className="block mt-[13px] cursor-pointer border-b-[0.8px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
                              <img
                                src={`${content.attributes.blog_image.data.attributes.url}`}
                                width={430}
                                height={280}
                                className="cursor-pointer"
                                alt="Base Asset Management"
                              />
                              <div className="">
                                <p className="font-semibold	text-[12px] mt-[16px] leading-[14px]">
                                  {content.attributes.blog_theme} /{" "}
                                  {content.attributes.blog_topic}
                                </p>

                                <p className="font-extrabold	mt-[5px] text-[20px] leading-[28px] group-hover:underline group-focus:underline">
                                  {content.attributes.blog_subject}
                                </p>
                              </div>
                              <div className="relative flex mt-[120px] justify-between">
                                <div className="absolute bottom-0 left-0">
                                  <Link
                                    href={
                                      content.attributes.platform_link
                                        ? content.attributes.platform_link
                                        : "#"
                                    }
                                    className="text-gray-600"
                                  >
                                    <Image
                                      src={`${content.attributes.blog_platform.data.attributes.url}`}
                                      width={31}
                                      height={31}
                                      className="cursor-pointer"
                                      alt="Base Asset Management"
                                    />
                                  </Link>
                                </div>
                                <div className="font-medium	text-[12px] pt-3 absolute bottom-0 right-0 leading-[22px] text-[#000000]">
                                  {content.attributes.blog_date}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )}
                    </>
                  ))}
                </div>
              </div>

              <div className="container lg:hidden mt-[38px]">

                <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {insights.items.map((content, i) => (
                    <>
                      {content.attributes.blog_id >= 2 &&
                        content.attributes.blog_id <= 3 && (
                          <Link
                            key={i}
                            href={
                              content.attributes.blog_link
                                ? content.attributes.blog_link
                                : "#"
                            }
                          >
                            <div
                              key={i}
                              className="block cursor-pointer border-t-[4px] pt-[14px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                            >
                              <div>
                                <img
                                  src={`${content.attributes.blog_image.data.attributes.url}`}
                                  className="w-[300px] h-[120px]"
                                />
                              </div>
                              <div className="">
                                <div className="font-[600]	text-[10px] lg:text-[13px]  mt-[5px] leading-[14px]">
                                  {content.attributes.blog_theme} /{" "}
                                  {content.attributes.blog_topic}
                                </div>

                                <div className="font-[800] h-10 lg:h-16 lg:mt-[10px] mt-[5px] text-[14px] leading-[18px] lg:text-[21px] lg:leading-[28px] group-hover:underline group-focus:underline">
                                  {content.attributes.blog_subject}
                                </div>
                              </div>
                              <div className="relative flex lg:mt-[60px] mt-[30px] mt-10 lg:hiddden justify-between">
                                <div className="lg:hidden">
                                  <Link
                                    href={
                                      content.attributes.platform_link
                                        ? content.attributes.platform_link
                                        : "#"
                                    }
                                    className="text-gray-600"
                                  >
                                    <Image
                                      src={`${content.attributes.blog_platform.data.attributes.url}`}
                                      width={31}
                                      height={31}
                                      className="cursor-pointer"
                                      alt="Base Asset Management"
                                    />
                                  </Link>
                                </div>



                                <div className="hidden lg:block absolute bottom-0 left-0">
                                  <Link
                                    href={
                                      content.attributes.platform_link
                                        ? content.attributes.platform_link
                                        : "#"
                                    }
                                    className="text-gray-600"
                                  >
                                    <Image
                                      src={`${content.attributes.blog_platform.data.attributes.url}`}
                                      width={31}
                                      height={31}
                                      className="cursor-pointer"
                                      alt="Base Asset Management"
                                    />
                                  </Link>
                                </div>

                                <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                                  {content.attributes.blog_date}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )}
                    </>
                  ))}
                </div>
              </div>

              <div className="container mt-[38px]">

                <div className="grid justify-center grid-cols-2 gap-6 lg:grid-cols-4">
                  {insights.items.map((content, i) => (
                    <>
                      {content.attributes.blog_id >= 4 &&
                        content.attributes.blog_id < visible && (
                          <Link
                            key={i}
                            href={
                              content.attributes.blog_link
                                ? content.attributes.blog_link
                                : "#"
                            }
                          >
                            <div
                              key={i}
                              className="block cursor-pointer border-t-[4px] pt-[14px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900"
                            >
                              <div>
                                <img
                                  src={`${content.attributes.blog_image?.data.attributes.url}`}
                                  className="lg:w-[300px] lg:h-[180px]"
                                />
                              </div>
                              <div className="">
                                <div className="font-[600]	text-[10px] lg:text-[13px]  mt-[5px] leading-[14px]">
                                  {content.attributes.blog_theme} /{" "}
                                  {content.attributes.blog_topic}
                                </div>

                                <div className="font-[800] lg:h-16 h-7 lg:mt-[10px] mt-[5px] text-[14px] leading-[18px] lg:text-[21px] lg:leading-[28px] group-hover:underline group-focus:underline">
                                  {content.attributes.blog_subject}
                                </div>
                              </div>
                              <div className="relative flex lg:mt-[60px] mt-[40px] lg:hiddden justify-between w-full">
                                <div className="lg:hidden">
                                  <Link
                                    href={
                                      content.attributes.platform_link
                                        ? content.attributes.platform_link
                                        : "#"
                                    }
                                    className="text-gray-600"
                                  >
                                    <Image
                                      src={`${content.attributes.blog_platform?.data.attributes.url}`}
                                      width={31}
                                      height={31}
                                      className="cursor-pointer"
                                      alt="Base Asset Management"
                                    />
                                  </Link>
                                </div>

                                <div className="hidden lg:block absolute bottom-0 left-0">
                                  <Link
                                    href={
                                      content.attributes.platform_link
                                        ? `${content.attributes.platform_link}`
                                        : "#"
                                    }
                                    className="text-gray-600"
                                  >
                                    <Image
                                      src={`${content.attributes.blog_platform.data.attributes.url}`}
                                      width={31}
                                      height={31}
                                      className="cursor-pointer"
                                      alt="Base Asset Management"
                                    />
                                  </Link>
                                </div>

                                <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                                  {content.attributes.blog_date}
                                </div>
                              </div>
                            </div>
                          </Link>
                        )}

                    </>
                  ))}
                </div>


                {visible - 1 <= insights.items.length ? (

                  <>
                    <div
                      onClick={showMore}
                      className="cursor-pointer lg:hidden flex justify-center mt-[42px] lg:mt-[150px]"
                    >
                      <Image src={arrow} width={22} height={11} />
                    </div>
                    <div
                      onClick={showMore}
                      className="cursor-pointer hidden lg:flex flex justify-center mt-[42px] lg:mt-[150px]"
                    >
                      <Image src={arrow} width={56} height={29} />
                    </div>

                    <div className="flex mb-[50px] lg:mb-[0px] mt-5 lg:mt-[23px] justify-center">
                      <button
                        onClick={showMore}
                        type="button"
                        className="hover:underline flex flex-col font-bold justify-center text-[18px] leading-[18px] lg:text-[24px] lg:leading-[28px]"
                      >
                        <p>Load more</p>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className=" mt-[42px] lg:mt-[150px]" />
                )}
              </div>
            </div>
          </div>
        </ThemeProvider>
        <Button />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticles();

  return {
    props: {
      insights: {
        items: articles.data,
        pagination: articles.meta.pagination,
      },
    },
  };
};
export default Blog;
