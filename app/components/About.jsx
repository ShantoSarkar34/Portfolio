
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../img/profile.jpg";
import {
  BsFillGiftFill,
  BsCalendar2Check,
  BsBook,
  BsTelephone,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { PiStudentFill, PiGameController } from "react-icons/pi";
import { FiMail } from "react-icons/fi";

function About() {
  return (
    <section className="h-[64rem] w-full bg-black">
      <div className="mx-[15rem]">
        <div className="pt-[8rem]">
          <p className="text-[24px] text-[#B84C60]">BIOGRAPHY</p>
          <h1 className="pt-1 text-[45px] font-bold text-white">About Me</h1>
        </div>
        <div className="pt-[8rem]">
          <div className="flex gap-16">

            {/*flex 1 img section - start */}

            <div className="h-[520px] w-[435px] border-[12px] border-[#333333]">
              <Image
                src={img1}
                height={300}
                width={300}
                alt="profile"
                className="-mt-[3rem] -ml-[1.5rem] h-[520px] w-[440px] "
              />
            </div>

            {/*flex 1 img section - end */}

            {/* flex 2 text section - start */}

            <div>
              <h2 className="text-[30px] font-semibold text-white ">
                I'm Albert Walkers and
                <span className="text-[#B84C60]"> Web Developer</span>
              </h2>
              <p className="mt-8 text-[22px] text-[#7F7F7F] leading-[40px]">
                Hi! My name is
                <span className="text-[#BB4C60]"> Albert Walkers</span>. I am a
                Web Developer, and I'm very
                <br /> passionate and dedicated to my work. With 20 years
                experience as a<br /> professional Web developer, I have
                acquired the skills and knowledge
                <br /> necessary to make your project a success.
              </p>

              {/* flex 2 text section - end  */}

              {/* flex 2 address section - start */}

              <div className="mt-8 flex gap-7">
                <div>
                  <div className="flex gap-3">
                    <div className="mt-[2px]">
                      <BsFillGiftFill className="text-[22px] text-[#B84C60]" />
                    </div>
                    <div className="text-[22px] font-bold text-white tracking-[1px]">
                      Birthday:
                      <span className="text-[#7F7F7F]"> 01.07.1990</span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <div className=" mt-[12px]">
                      <MdLocationOn className="-ml-[5px] text-[32px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1px]">
                      Location:
                      <span className="text-[#7F7F7F] hover:border-b-2 hover:border-[#999797]
                        ml-2 pb-1">44 Place, Plano, USA
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <div className="mt-[14px]">
                      <BsBook className="text-[25px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1px]">
                      Study:
                      <span className="text-[#7F7F7F] hover:border-b-2 hover:border-[#999797] ml-2 pb-1">Univercity of Chicago
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <div className="mt-[14px]">
                      <FiMail className="text-[25px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1.5px]">
                      Mail:
                      <span className="text-[#7F7F7F] hover:border-b-2 hover:border-[#999797] ml-2 pb-1">mymail@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-3">
                    <div className="ml-[3px] mt-[4px]">
                      <BsCalendar2Check className="text-[22px] text-[#B84C60]" />
                    </div>
                    <div className="text-[22px] font-bold text-white tracking-[1px]">
                      Age:<span className="text-[#7F7F7F]"> 30</span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <div className="mt-[12px]">
                      <PiGameController className="text-[30px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1px]">
                      Interests:
                      <span className="text-[#7F7F7F]">
                        {" "}
                        Playstation, Reading
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex gap-2">
                    <div className="mt-[12px]">
                      <PiStudentFill className="text-[30px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1px]">
                      Degree:<span className="text-[#7F7F7F]"> Master</span>
                    </div>
                  </div>

                  <div className=" mt-2 flex gap-3">
                    <div className="ml-[3px] mt-[12px]">
                      <BsTelephone className="text-[26px] text-[#B84C60]" />
                    </div>
                    <div className="mt-3 text-[22px] font-bold text-white tracking-[1.5px]">
                      Phone:
                      <span className="text-[#7F7F7F] hover:border-b-2 hover:border-[#999797] ml-2 pb-1">+77 022 177 05 05
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* flex 2 address section - end  */}

              {/* Download button - start */}

              <div className="mt-[4rem]">
                <Link
                  href={"#"}
                  className="text-[22px] font-semibold text-white p-5 px-16
                       border-2 border-[#ad364c] bg-[#B84C60] 
                       hover:bg-[#ad364c] white  transition-all
                       duration-300"
                >
                  Download CV
                </Link>
              </div>

              {/* Download button - end  */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
