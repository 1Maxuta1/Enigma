import { useState } from "react";
import logo from "../assets/logo.png";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  // const handleSmoothScroll = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <nav className="w-full flex py-4 bg-gradient-to-br from-purple-900 to-purple-700 navbar">
      <a
        href="/"
        className=" font-poppins mr-64 ml-12 flex items-center text-gray-200 text-3xl"
      >
        <img src={logo} alt="enigma" width={60} height={60} />
        Enigma Bank
      </a>
      <ul className="justify-around list-none md:flex  hidden items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-lg text-gray-200 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a
              className="hover:text-blue-300 duration-300 cursor-pointer hover:shadow-2xl"
              href={`#${nav.id}`}
              onClick={(e) => {
                e.preventDefault(); 
                // handleSmoothScroll(nav.id);
              }}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1 justify-end items-center mr-12">
        <button onClick={toggleMenu}>
          {toggle ? (
            <ImCross className="w-6 h-6 text-white" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-purple-950 rounded-lg md:hidden absolute right-0 mx-4 my-2 top-24 min-w-[140px] z-[100] sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center ">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[24px] text-gray-200  hover:text-blue-300 duration-300 ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }
                }`}
            >
              <a
                className="hover:text-blue-300 duration-300 cursor-pointer hover:shadow-2xl"
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault(); 
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
