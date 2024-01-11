"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

import Image from "next/image";
import { imagedata } from "@/imagedata";
import Link from "next/link";
import Menu from "./Menu";
import { Icon } from "@/Icon";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

const controlNavbar = ( )=>{
  if (window.scrollY>200) {
    if(window.scrollY > lastScrollY && !mobileMenu){
      setShow("-translate-y-[80px]")

    }else{
      setShow("shadow-sm")
    }
    setLastScrollY(window.scrollY)
  }else{setShow("translate-y-0")}
}

  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
  return()=>{
    window.removeEventListener("scroll",controlNavbar)
  }
  
  })
  
  return (
    // Header Start
    <header
      className={`shadow-xl flex w-full h-[50px] md:h-[80px] bg-white items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      {/* Wrapper Start */}
      <Wrapper className="h-14 flex justify-between items-center ">
        <Link href={"/"}>
<h1 className="font-bold md:text-3xl text-xl">LOGO</h1>
        </Link>

        {/* Menu Start */}

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
{mobileMenu &&
          <MobileMenu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu} />

}
        {/* Menu End */}
        <div className="space-x-3 flex items-center gap-2 text-black ">
          {/* Heart Icon */}
          <div className="rounded-full  flex justify-center hover:bg-black/5 cursor-pointer relative ">
            <Icon.Io.IoMdHeartEmpty className="m-1 text-lg md:text-2xl" />
            <div className=" h-4 md:h-5 min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute -top-1 left-4 md:left-6 text-white text-xs md:text-sm ">
              <span className="p-1">5</span>
            </div>
          </div>
          {/* Heart Icon */}

          {/* Cart Icon */}
        <Link href={'/cart'}>
        <div  className=" rounded-full  flex justify-center hover:bg-black/5 cursor-pointer relative ">
            <Icon.Bs.BsCart className="m-1 text-lg md:text-xl" />
            <div className=" h-4 md:h-5 min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute -top-1 left-4 md:left-6 text-white text-xs md:text-sm ">
              <span className="p-1">5</span>
            </div>
          </div></Link>

          {/* Cart Icon */}

          <div className="md:hidden rounded-full  flex justify-center hover:bg-black/5 cursor-pointer relative ">
            {mobileMenu ? (
              //  Close Icon

              <Icon.Vsc.VscChromeClose
                className="text-lg"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              //  Close Icon

              //  Three Line Icon

              <Icon.Bi.BiMenuAltRight
                className="text-xl"
                onClick={() => setMobileMenu(true)}
              />

              //  Three Line Icon
            )}
          </div>
        </div>
      </Wrapper>

      {/* Wrapper End */}
    </header>

    // Header end
  );
};

export default Header;
