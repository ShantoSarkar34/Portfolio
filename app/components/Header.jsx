
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../img/logo.png";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      setScroll(scrollHeight);

      if (scrollHeight >= 140) {
        setScroll(true);
      } else {
        setScroll(false);
      }

      // You can perform additional actions with the scroll height here
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`h-[6rem] w-full transition-all duration-300 z-50 fixed  ${
        scroll ? " bg-black" : "bg-transparent"
      }`}
    >
      <div className="mx-[15rem]">
        <div className="flex justify-between">

          {/* logo - img is here  */}

          <div className="mt-5">
            <Image
              src={img1}
              height={65}
              width={65}
              alt="logo"
            />
          </div>

          {/* Navigation bar - start  */}

          <div className="mt-9">
            <ul className="flex gap-10 tracking-[1.5px]">
              <li className="text-[20px] font-bold text-white hover:text-[#B84C60]
                transition-all duration-200">
                <Link href={"#"}>Home</Link>
              </li>
              <li className="text-[20px] font-bold text-[#B84C60]">
                <Link href={"#"}>About</Link>
              </li>
              <li className="text-[20px] font-bold text-white hover:text-[#B84C60]
                transition-all duration-200">
                <Link href={"#"}>services</Link>
              </li>
              <li className="text-[20px] font-bold text-white hover:text-[#B84C60]
                transition-all duration-200">
                <Link href={"#"}>Portfolio</Link>
              </li>
              <li className="text-[20px] font-bold text-white hover:text-[#B84C60]
                transition-all duration-200 ">
                <Link href={"#"}>News</Link>
              </li>
              <li className="text-[20px] font-bold text-white hover:text-[#B84C60]
                transition-all duration-200">
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Navigation bar - start  */}
          
        </div>
      </div>
    </section>
  );
}

export default Header;
