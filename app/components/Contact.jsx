
import React from "react";
import Link from "next/link";
import { BsInfoLg } from "react-icons/bs";
import { AiOutlineInfo } from "react-icons/ai";

function Contact() {
  return (
    <section className="h-[79rem] w-full bg-black">
      <div className="mx-[15rem]">
        <div className="pt-[8rem]">
          <p className="text-[30px] text-[#B84C60] uppercase ">contact</p>
          <h1 className="pt-1 text-[40px] font-extrabold text-white tracking-[1px]">
            Get in Touch
          </h1>
        </div>

        {/* contact text - start  */}

        <div className="mt-[8rem]">
          <p className="text-[22px] text-[#9e9c9c] tracking-[1px] leading-[40px]">
            Please fill out the form on this section to contact with me. Or
            <br /> call between 9:00 a.m. and 8:00 p.m. ET, Monday through
            <br /> Friday
          </p>
        </div>
        <div className="flex justify-between sm:grid-cols-1">
          <div className="mt-10">

            {/* input (Name) - start  */}
            <div className=" ">
              <p className="pb-2 text-[22px]  font-semibold tracking-[1px] text-white">
                Name
              </p>
              <input
                type="text"
                className="h-[50px] w-[650px] border-[1px] border-dotted border-[#9e9c9c] bg-black
                text-[20px] text-[#B84C60] p-4 focus:outline-none "
              />
            </div>

            {/* input (Email) - start  */}
            <div className="mt-7 ">
              <p className="pb-2 text-[22px] font-semibold tracking-[1px] text-white">
                Email
              </p>
              <input
                type="text"
                className="h-[50px] w-[650px] border-[1px] border-dotted border-[#9e9c9c] bg-black
                text-[20px] text-[#B84C60] p-4 focus:outline-none"
              />
            </div>

            {/* input (message) - start  */}
            <div className="mt-7 ">
              <p className="pb-2 text-[22px] font-semibold tracking-[1px] text-white">
                Message
              </p>
              <input
                type="text"
                className="h-[150px] w-[650px] border-[1px] border-dotted border-[#9e9c9c] bg-black 
                text-[20px] text-[#B84C60] p-4 focus:outline-none"
              />
            </div>

            {/* send button - start  */}
            <div className="mt-[4rem]">
              <Link
                href={"#"}
                className="text-[22px] font-semibold text-white p-5 px-16 border-2 border-[#ad364c] bg-[#B84C60] 
                          hover:bg-[#ad364c]  transition-all duration-300"
              >
                Send Message
              </Link>
            </div>
            {/* send button - start  */}
          </div>
          
          {/* error section - start  */}
          <div className="mt-[80px]">
            <div className="h-[480px] w-[620px] bg-[#E8EAED]">
              <div className="pt-[8rem] flex items-center justify-center ">
                <AiOutlineInfo className="text-[50px] text-white rotate-180 bg-[#757575] rounded-full" />
              </div>
              <h3 className="mt-5 text-[32px] text-[#3C4043] text-center">
                Oops! Something went wrong.
              </h3>
              <p className="mt-10 text-[17px] text-[#3C4043] text-center">
                This page didn't load Google Maps correctly. See the
                <br /> JavaScript console for technical details.
              </p>
            </div>
          </div>
          {/* error section - start  */}

        </div>
      </div>
    </section>
  );
}

export default Contact;
