import logo from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { footerLinks } from "../constants";

const Footer = () => {

  return (
    <footer className="text-white px-16">
      <div className="flex justify-between">
        <div>
          <a
            href="/"
            className=" font-poppins flex items-center text-gray-200 text-3xl"
          >
            <img src={logo} alt="enigma" width={60} height={60} />
            Enigma Bank
          </a>
          <p className="w-1/2 text-gray-300">
            An innovative approach to simplifying payments, ensuring their
            reliability and security.
          </p>
        </div>
        <div className="flex flex-col md:justify-end md:flex-row gap-y-3 md:gap-y-0 md:gap-x-6 ss:my-0 my-4 min-w-[150px]">
          {footerLinks.map((footerLink) => (
          <div key={footerLink.title}>
              <a   href={`#${footerLink.id}`} className="cursor-pointer hover:text-blue-300 duration-300 ease-out">
                {footerLink.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-6 lg:pt-0">
        Copyright © 2024 Enigma Bank. All Rights Reserved.{" "}
      </div>
      <div className="flex-row flex justify-center gap-x-5 py-4">
        <a className="w-10 text-xl"
          target="_blank"
          href="https://www.linkedin.com/"
        >
          <FaLinkedin className=" hover:text-blue-300 duration-300 cursor-pointer" />
        </a>
        <a className="w-10 text-xl"
          target="_blank"
          href="https://twitter.com/home"
        >
          <BsTwitterX className=" hover:text-blue-300 duration-300 cursor-pointer" />
        </a>
        <a className="w-10 text-xl"
          target="_blank"
          href="https://www.facebook.com/"
        >
          <FaFacebook className=" hover:text-blue-300 duration-300 cursor-pointer" />
        </a>
        <a className="w-10 text-xl"
          target="_blank"
          href="https://www.instagram.com/"
        >
          <FaInstagram className=" hover:text-blue-300 duration-300 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
