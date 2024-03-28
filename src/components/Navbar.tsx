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

  return (
    <nav className="w-full flex py-6  bg-purple-800">
      <a
        href="/"
        className="pr-64 pl-12 flex items-center text-gray-200 text-xl"
      >
        <img src={logo} alt="enigma" width={60} height={60} />
        Enigma Bank
      </a>
      <ul className="justify-around list-none sm:flex  hidden items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins text-lg text-gray-200 `}>
            <a
              className="hover:text-white bg duration-300 hover:shadow-2xl"
              href={`#${nav.id}`}
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center p-12">
        <button className="" onClick={toggleMenu}>{toggle ? <ImCross className="w-12 h-w-12"/> : <GiHamburgerMenu className="w-12 h-w-12"/>}</button>
      </div>
    </nav>
  );
};

export default NavBar;
