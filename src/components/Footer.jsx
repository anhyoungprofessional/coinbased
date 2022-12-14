import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-container bg-gray-900 text-white p-8 lg:p-2 lg:h-screen">
      <div className="footer-body-container w-3/4 lg:w-full m-auto">
        <div className="footer-header">
          <img className="logo-img w-12 " alt="" />
          <p className="px-2 font-extrabold text-3xl">COINBASED</p>
        </div>
        <div className="my-4 flex justify-between lg:flex-col">
          <ul className="grid grid-cols-3 child-li:p-2 grid-rows-4 lg:block font-bold">
            <li>
              <a href="">ABOUT COINBASED</a>
            </li>
            <li>
              <a href="">CAREERS</a>
            </li>
            <li>
              <a href="">INVESTMENT STRATEGIES</a>
            </li>
            <li>
              <a href="">PRODUCTS</a>
            </li>
            <li>
              <a href="">FEES</a>
            </li>
            <li>
              <a href="">BLOG</a>
            </li>
          </ul>
          <div className="w-1/3 text-slate-400 text-lg lg:w-full">
            <p>
              In markets around the world, we work relentlessly to uncover and
              capture new opportunities. Across a range of investment
              strategies, we deploy capital with the goal of delivering market
              leading investment results to our capital partners.
            </p>
          </div>
        </div>
        <div className="flex justify-between text-slate-400 lg:flex-col gap-4">
          <ul className="flex gap-4 text-3xl lg:gap-8">
            <FaTwitter />
            <FaLinkedin /> <FaFacebookSquare />
            <FaInstagram />
          </ul>
          <ul className="flex w-1/4 justify-between lg:w-full">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Disclosures</a>
            </li>
          </ul>
          <div className="w-1/3 lg:w-full">
            <p className="text-sm">
              Copyright ?? Coinbased Enterprise Americas LLC or one of its
              affiliates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
