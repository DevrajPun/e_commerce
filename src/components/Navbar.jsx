import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/img/logo-retina.png";
import { Link } from "react-router-dom";

const nav = [
  <div className="md:flex justify-between uppercase px-7 py-8 text-[#435951]">
    <ul className="md:flex gap-8 items-center">
      <li>
        <img src={logo} alt="logo_img" className="md:block hidden w-[95px]" />
      </li>
      <li>shop all</li>
      <li>plants</li>
      <li>cacti</li>
    </ul>
    <ul className="md:flex gap-10 items-center">
      <li>Our Story</li>
      <li>Questions?</li>
      <li>
        <RiShoppingBasketLine className="text-[30px] text-[#586f69]" />
      </li>
      <li>
        <MdAccountCircle className="text-[35px] text-[#586f69]" />
      </li>
    </ul>
  </div>,
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        {/* desktop view */}
        <div className="md:block hidden">{nav}</div>
        {/* mobile view */}
        <div className="flex justify-between p-5 md:hidden">
          <Link to="/">
            <img src={logo} alt="logo_img" className="w-[90px]" />
          </Link>
          <div className="flex items-center gap-8">
            <RiShoppingBasketLine className="text-[30px]" />
            <button className="text-[25px]" onClick={() => setOpen(!open)}>
              <HiMenu />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
