import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchFunction from "./SwitchFunction";
import UPIImg from "../assets/Method-Mastercard.png";
import ApplePayImg from "../assets/Method-ApplePay.png";
import CartImg from "../assets/Method-Cart.png";
import DiscoverImg from "../assets/Method-Discover.png";
import MasterCardImg from "../assets/Method-Mastercard.png";
import VisaImg from "../assets/Method-Visa.png";

const Footer = () => {
  const [isAbove700, setIsAbove700] = useState(false);

  const handleAbove700Change = (isAbove) => {
    setIsAbove700(isAbove);
  };

  return (
    <footer>
      <>
        <SwitchFunction onAbove700Change={handleAbove700Change} />

        <div
          className={`flex ${
            isAbove700 ? "gap-10 justify-between mb-10" : "flex-col"
          }`}
        >
          <div
            className={`mt-12 px-10 flex flex-col ${
              isAbove700 ? "items-start w-5/12" : "items-center"
            }`}
          >
            <p className="text-white text-4xl font-bold mb-5">
              Dezign<span className="custom-font blue-custom-text">Plex</span>
            </p>

            <p
              className={`text-xs text-gray-400 ${
                isAbove700 ? "-mt-2" : "text-center px-5"
              }`}
            >
              DesignHub, your all-in-one digital partner, excels in
              user-friendly web and app design, development, and comprehensive
              branding services for success.
            </p>

            <div className="flex gap-4 mt-5">
              <p
                className={`text-white font-semibold underline ${
                  isAbove700 && "text-xs"
                }`}
              >
                9310038567
              </p>
              <p
                className={`text-gray-400 font-semibold ${
                  isAbove700 && "text-xs"
                }`}
              >
                or
              </p>
              <p
                className={`text-white font-semibold underline ${
                  isAbove700 && "text-xs"
                }`}
              >
                Proxy@gmail.com
              </p>
            </div>
          </div>

          <div
            className={`flex justify-between px-10 mt-14 ${
              isAbove700 ? "w-6/12" : ""
            }`}
          >
            <div>
              <p className="mb-5 text-white text-sm font-bold">Helps</p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Contact</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Faqs</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Terms & Condition</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Privacy Policy</Link>
              </p>
            </div>

            <div>
              <p className="mb-5 text-white text-sm font-bold">Design Hub</p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Get Started</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Our Work</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Services</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Portfolio</Link>
              </p>
            </div>

            <div>
              <p className="mb-5 text-white text-sm font-bold">Categories</p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Web Design</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">App Design</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Branding</Link>
              </p>
              <p className="my-2 text-white text-sm">
                <Link to="/">Development</Link>
              </p>
            </div>
          </div>
        </div>

        {isAbove700 ? (
          <div
            className="flex justify-between items-center h-12 mt-8 px-10"
            style={{ background: "rgba(26, 26, 26, 1)" }}
          >
            <p className="text-xs" style={{ color: "rgba(128, 128, 128, 1)" }}>
              Design Hub © 2023. All Rights Reserved
            </p>
            <div className="flex">
              <img className="w-5 mx-px" src={ApplePayImg} alt=" " />
              <img className="w-5 mx-px" src={UPIImg} alt=" " />
              <img className="w-5 mx-px" src={VisaImg} alt=" " />
              <img className="w-5 mx-px" src={DiscoverImg} alt=" " />
              <img className="w-5 mx-px" src={MasterCardImg} alt=" " />
              <img className="w-5 mx-px" src={CartImg} alt=" " />
            </div>
          </div>
        ) : (
          <div
            className="flex justify-center items-center h-12 mt-8"
            style={{ background: "rgba(26, 26, 26, 1)" }}
          >
            <p style={{ color: "rgba(128, 128, 128, 1)" }}>
              Design Hub © 2023. All Rights Reserved
            </p>
          </div>
        )}
      </>
    </footer>
  );
};

export default Footer;
