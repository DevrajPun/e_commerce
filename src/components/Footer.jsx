import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-retina.png";

function Footer() {
  return (
    <>
      <div className="bg-[#f1f5f4]">
        <div className="md:w-11/12 mx-auto md:flex justify-evenly p-10">
          <div className="md:w-3/12">
            <div className="flex justify-center md:justify-start ">
              <img
                src={logo}
                alt="logo_img"
                className="w-[40%] my-4  md:my-0"
              />
            </div>
            <p className="md:pr-10 text-center md:text-start text-[14.5px] leading-[28px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <br />
          <br />
          <div className="md:w-3/12 text-center md:text-start">
            <h1 className="font-serif text-xl text-black mb-5">Quick Links</h1>
            <ul className="space-y-1 ">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Plants</Link>
              </li>
              <li>
                <Link to="/">Cacti</Link>
              </li>
              <li>
                <Link to="/">Cart</Link>
              </li>
              <li>
                <Link to="/">My account</Link>
              </li>
            </ul>
          </div>
          <br />
          <div className="md:w-3/12 text-center md:text-start">
            <h1 className="font-serif text-xl text-black mb-5 ">Our Socials</h1>
            <div className="flex gap-5 justify-center md:justify-start">
              <i class="fa-brands fa-facebook-f bg-white text-black text-[15px] py-2 px-[10px]"></i>
              <i class="fa-brands fa-instagram  bg-white text-black text-[15px] py-2 px-[10px]"></i>
              <i class="fa-brands fa-twitter  bg-white text-black text-[15px] py-2 px-2"></i>
            </div>
          </div>
          <br />
          <br />
          <div className="md:w-3/12 text-center md:text-start">
            <h1 className="font-serif text-xl text-black mb-5">
              Subscribe to Our <br className="hidden md:block" /> Newsletter
            </h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Your email address..."
              className="w-[300px] md:w-[250px] h-12 border border-gray-300 p-4"
            />
            <button className="uppercase text-white bg-[#586f69] hover:bg-[#427466] py-2 px-7 text-sm my-5">
              Subscribe
            </button>
          </div>
        </div>
        <hr />
        <div className="md:p-12 p-8 text-[14px] text-center md:text-start">
          <p>Copyright © 2024 eGrow Plants | Powered by eGrow Plants</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
