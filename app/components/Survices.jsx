
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { BsCodeSquare, BsShare } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

function Survices() {
  return (
    <section className="h-[105rem] w-full bg-[#111111]">
      <div className="mx-[15rem]">
        <div className="pt-[8rem]">
          <p className="text-[30px] text-[#B84C60] uppercase ">services</p>
          <h1 className="pt-1 text-[40px] font-extrabold text-white tracking-[1px]">
            Quality Services
          </h1>
        </div>

        {/* survice cart section - start  */}

        <div className="pt-[8rem] grid grid-cols-3 gap-20">

          {/* cart 1 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300">
            <div className="m-10">
              <div className="mt-14">
                <HiLightBulb className="text-[95px] text-[#B84C60]" />
              </div>
              <h3 className="mt-10 text-[25px] font-semibold text-white tracking-[1px]">
                Creative Design
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 1 - end  */}

          {/* cart 2 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300">
            <div className="m-10">
              <div className="mt-16">
                <BsCodeSquare className=" text-[70px] text-[#B84C60]" />
              </div>
              <h3 className="mt-12 text-[25px] font-semibold text-white tracking-[1px]">
                Web Development
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 2 - end  */}

          {/* cart 3 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300 ">
            <div className="m-10">
              <div className="mt-16">
                <FaPaperPlane className=" text-[70px] text-[#B84C60]" />
              </div>
              <h3 className="mt-12 text-[25px] font-semibold text-white tracking-[1px]">
                Brand Identity
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 3 - end  */}

          {/* cart 4 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300 ">
            <div className="m-10">
              <div className="mt-16">
                <SiAdobephotoshop className=" text-[70px] text-[#B84C60]" />
              </div>
              <h3 className="mt-12 text-[25px] font-semibold text-white tracking-[1px]">
                Adobe Photoshop
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 4 - end  */}

          {/* cart 5 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300 ">
            <div className="m-10">
              <div className="mt-16">
                <SiAdobeillustrator className=" text-[70px] text-[#B84C60]" />
              </div>
              <h3 className="mt-12 text-[25px] font-semibold text-white tracking-[1px]">
                Adobe Illustrator
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 5 - end  */}

          {/* cart 6 - start  */}

          <div className="h-[470px] w-[380px] bg-black shadow-3xl hover:shadow-4xl transition-all duration-300 ">
            <div className="m-10">
              <div className="mt-16">
                <BsShare className=" text-[70px] text-[#B84C60]" />
              </div>
              <h3 className="mt-12 text-[25px] font-semibold text-white tracking-[1px]">
                Social Media
              </h3>
              <p className="mt-8 text-[24px] text-[#B4B4B4] leading-[40px]">
                Web design is a similar
                <br /> process of creation, with
                <br /> the intention of
                <br /> presenting...
              </p>
            </div>
          </div>

          {/* cart 6 - end  */}

        </div>
        {/* survice cart section - start  */}

        {/* text - start  */}
        <div className="mt-[8rem]">
          <h2 className="text-[28px] font-semibold text-[#B4B4B4] ">
            Are you interested in working with me?
            <span className="font-bold text-white border-b-2 border-[#3d3d3d] hover:border-white ml-2 pb-1
             transition-all duration-200">Let's started now
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Survices;
