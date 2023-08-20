
import React from "react";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import img1 from "../img/profile.jpg";
function Hero() {
  return (
    <section className="h-[64rem] w-full customBg">
      <div className="mx-[15rem] ">
        
        {/* profile img - start */}

        <div className="pt-[15rem] flex items-center justify-center">
          <div className="h-[250px] w-[250px] border-[10px] border-opacity-50 border-[#162E3C] rounded-full">
            <Image
              src={img1}
              height={300}
              width={300}
              alt="profile"
              className="h-[235px] w-[250px] rounded-full"
            />
          </div>
        </div>

        {/* profile img - end */}

        <h1 className="mt-10 text-[60px] font-bold text-white text-center ">
          ALBERT
          <span className="text-[#B84C60]"> WALKERS</span>
        </h1>
        <h3 className="mt-5 text-[32px] font-semibold text-center text-white">
          I'm a Web Developer
        </h3>

        {/* icon section - start */}

        <div className="mt-[8rem] flex items-center justify-center">
          <button type="button">
            <BsArrowDown className="p-2 text-[70px] text-[#B84C60] rounded-full transition-all duration-300 hover:bg-black 
              animate-bounce" />
          </button>
        </div>

        {/* icon section - end */}
      </div>
    </section>
  );
}

export default Hero;
