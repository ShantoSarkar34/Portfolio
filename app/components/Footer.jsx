
import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoTiktok,
} from "react-icons/bi";
import { AiOutlineBehance } from "react-icons/ai";

function Footer() {
  return (
    <section className="h-[12rem] w-full bg-[#111111]">
      <div className="mx-[15rem]">
        <div className="flex justify-between">

          {/* Footer text section - start  */}

          <div className="mt-[6rem]">
            <h2 className="text-[20px] font-semibold text-white tracking-[1px]">
              © Copyright 2019-2021. All rights are reserved.
            </h2>
          </div>

          {/* Footer text section - end  */}

          {/* social media icon section - start  */}
          
          <div className="mt-[6rem] flex gap-3">
            <div>
              <BiLogoFacebook className="text-[32px] text-white
               hover:text-[#B84C60] transition-all duration-300" />
            </div>
            <div>
              <BiLogoTwitter className="text-[32px] text-white
               hover:text-[#B84C60] transition-all duration-300" />
            </div>
            <div className="-mt-1">
              <AiOutlineBehance className="text-[40px] text-white
               hover:text-[#B84C60] transition-all duration-300" />
            </div>
            <div>
              <BiLogoInstagram className="text-[32px] text-white 
               hover:text-[#B84C60] transition-all duration-300" />
            </div>
            <div>
              <BiLogoTiktok className="text-[32px] text-white
               hover:text-[#B84C60] transition-all duration-300" />
            </div>
          </div>

          {/* social media icon section - start  */}

        </div>
      </div>
    </section>
  );
}

export default Footer;
