import React from "react";
import { AxiosResponse } from "axios";
import type { GetServerSideProps } from "next";
import { IArt } from "../types";
import { fetchArticle } from "../http";
import twi from "../public/img/square-twitter.svg";
import Link from "next/link";
import Image from "next/image";

export default function twitter({ article }) {
  console.log(article.includes.media);

  return (
    <>
      {article.data.map((content, i) => (
        <div key={i} className="mx-[10%] mt-5">
          <div className="grid justify-center grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="block cursor-pointer border-t-[4px] pt-[14px] lg:border-t-[8px] border-b-[1px] border-[#4D008C] sm:max-w-full group hover:no-underline focus:no-underline lg:grid bg-white-900">
              
              {article.includes.media.map((Items, sIndex) => (
                <div key={sIndex}>
                  <img src={Items.url} className="lg:w-[300px] lg:h-[180px]" />
                </div>
              ))}

              <div>
                <p className="font-[600]	text-[10px] lg:text-[13px]  mt-[5px] leading-[14px]">
                  Investment / Outlook Brief
                </p>

                <p className="font-[800] h-7 lg:h-16 lg:mt-[10px] mt-[5px] text-[14px] leading-[18px] lg:text-[21px] lg:leading-[28px] group-hover:underline group-focus:underline">
                  {content.text}
                </p>
              </div>
              <div className="relative flex lg:mt-[60px] mt-[40px] lg:hiddden justify-between">
                <div className="lg:hidden">
                  <a
                    href="https://www.linkedin.com/company/base-am/"
                    className="text-gray-600"
                  >
                    <Image
                      src={twi}
                      width={31}
                      height={31}
                      className="cursor-pointer"
                      alt="Base Asset Management"
                    />
                  </a>
                </div>

                <div className="hidden lg:block absolute bottom-0 left-0">
                  <Link
                    href="https://www.linkedin.com/company/base-am/"
                    className="text-gray-600"
                  >
                    <Image
                      src={twi}
                      width={31}
                      height={31}
                      className="cursor-pointer"
                      alt="Base Asset Management"
                    />
                  </Link>
                </div>

                <div className="absolute bottom-0 right-0 font-medium	text-[8px] pt-3 leading-[12px] lg:text-[12px] lg:leading-[22px] text-[#000000]">
                  {content.created_at}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: article }: AxiosResponse<IArt> = await fetchArticle();

  return {
    props: {
      article,
    },
  };
};
