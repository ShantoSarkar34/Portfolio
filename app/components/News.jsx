
import React from "react";
import Image from "next/image";
import img1 from "../img/news1.jpg";
import img2 from "../img/news2.jpg";
import img3 from "../img/news3.jpg";

function News() {
  return (
    <section className="h-[64rem] w-full bg-[#111111]">
      <div className="mx-[15rem]">
        <div className="pt-[8rem]">
          <p className="text-[30px] text-[#B84C60] uppercase ">news</p>
          <h1 className="pt-1 text-[40px] font-extrabold text-white tracking-[1px]">
            Latest News
          </h1>
        </div>

        {/* news gellary - start  */}

        <div className="mt-[8rem] ">
          <div className="mt-[2rem] flex justify-between">

            {/* news image 1 - start */}
            <div>
              <div className=" relative overflow-hidden bg-cover bg-no-repeat">
              <Image src={img1} alt="news 1" className="h-[320px] w-[400px] transition duration-[400ms] ease-in-out hover:scale-110 hover:rotate-3" />
              </div>
              <h3 className="mt-8 text-[28px] text-white transition-all duration-300 hover:text-[#B84C60]">
                Developers watch out for
                <br /> these burnout symptoms
              </h3>
              <p className="mt-9 text-[15px] font-semibold tracking-[0.5px] italic text-[#8d8d8d]">
                BY <span className=" transition-all duration-200 hover:text-[#B84C60]"> ALEX WATSON</span> / 20
                MARCH 2020
              </p>
            </div>

            {/* news image 1 - end  */}

            {/* news image 2 - start */}

            <div>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image src={img2} alt="news 2" className="h-[320px] w-[400px] transition duration-[400ms] ease-in-out hover:scale-110 hover:rotate-3" />
              </div>
              <h3 className="mt-8 text-[28px] text-white transition-all duration-300 hover:text-[#B84C60]">
                How to be appreciated for
                <br /> your hard work as a<br /> developer
              </h3>
              <p className="mt-9 text-[15px] font-semibold tracking-[0.5px] italic text-[#7F7F7F]">
                BY <span className="transition-all duration-200 hover:text-[#B84C60]"> BROOK KENNEDY</span> / 20
                MARCH 2020
              </p>
            </div>

            {/* news image 2 - end */}

            {/* news image 3 - start */}

            <div>
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <Image src={img3} alt="news 3" className="h-[320px] w-[400px] transition duration-[400ms] ease-in-out hover:scale-110 hover:rotate-6" />
              </div>
              <h3 className="mt-8 text-[28px] text-white transition-all duration-300 hover:text-[#B84C60]">
                How designers and
                <br /> developers can collaborate
                <br /> better
              </h3>
              <p className="mt-9 text-[15px] font-semibold tracking-[0.5px] italic text-[#7F7F7F]">
                BY <span className=" transition-all duration-200 hover:text-[#B84C60]"> PAOLA ATKINS</span> / 20
                MARCH 2020
              </p>
            </div>

            {/* news image 3 - end */}

          </div>
        </div>

        {/* news gellary - end  */}

      </div>
    </section>
  );
}

export default News;
