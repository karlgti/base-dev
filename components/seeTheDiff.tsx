import React from "react";

const seeTheDiff = () => {
  return (
    <>
      <button className="bg-[#00953B] text-xl text-white font-bold p-5  flex float-right">
        <div>
          <p>
            See The
            <br />
            Differentiator
          </p>
        </div>

        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="my-auto ml-7"
        >
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
        </svg>
      </button>
    </>
  );
};

export default seeTheDiff;
