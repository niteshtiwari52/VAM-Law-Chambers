import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home"); // Added state for active menu item

  const menuIcons = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about-us",
    },
    {
      id: 3,
      name: "Services",
      url: "/services",
    },
    {
      id: 3,
      name: "Contact",
      url: "/contact-us",
    },
  ];
  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      icons: <FaInstagram size={25} />,
      url: "https://www.instagram.com/",
    },
    {
      id: 2,
      name: "twitter",
      icons: <FaXTwitter size={25} />,
      url: "https://twitter.com/",
    },
    {
      id: 3,
      name: "Linkedin",
      icons: <FaLinkedin size={25} />,
      url: "https://www.linkedin.com/",
    },
    {
      id: 4,
      name: "Youtube",
      icons: <FaYoutube size={25} />,
      url: "https://www.youtube.com/",
    },
  ];

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item.name);
    setIsMenuOpen(false);
    navigate(item.url);
  };
  return (
    <>
      {/* <div className=" mx-5 my-4 flex gap-4 justify-between "> */}
      <div className=" px-5 py-4 flex gap-4 justify-between bg-[#222733]">
        {/* logo */}
        <div className=" flex items-center gap-2">
          <div className="w-12 lg:w-20">
            <img
              className=""
              src="/VamLogos/VamImageLogoDark.png"
              alt="VAM Logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold tracking-widest text-[#e9bc23] lg:text-3xl">
                VAM
              </h3>
              <h3 className="text-xl font-semibold tracking-widest text-[#e9bc23] lg:text-3xl">
                LAW
              </h3>
            </div>
            <h3 className="text-lg font-semibold tracking-widest  text-[#e9bc23]  lg:text-3xl ">
              CHAMBERS
            </h3>
          </div>
        </div>

        <div className=" flex items-center md:hidden">
          {isMenuOpen ? (
            <MdOutlineClose
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={50}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={50}
            />
          )}
        </div>
        {/* menu icon  */}
        <div className=" hidden md:flex w-1/2  justify-center items-center">
          <ul className="flex justify-end w-full  gap-8">
            {menuIcons.map((item) => (
              // active color : text-[#e9bc23]
              <li
                className={`cursor-pointer text-base font-normal ${
                  activeMenuItem === item.name ? "text-[#e9bc23]" : "text-white"
                } hover:text-[#e9bc23]`}
                onClick={() => handleMenuItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile navbar  */}
      <ul
        className={
          isMenuOpen
            ? "z-10 fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#222733] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="p-4 flex items-center gap-2">
          <div className="w-12 lg:w-20">
            <img
              className=""
              src="/VamLogos/VamImageLogoDark.png"
              alt="VAM Logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold tracking-widest text-[#e9bc23] lg:text-3xl">
                VAM
              </h3>
              <h3 className="text-xl font-semibold tracking-widest text-[#e9bc23] lg:text-3xl">
                LAW
              </h3>
            </div>
            <h3 className="text-lg font-semibold tracking-widest  text-[#e9bc23]  lg:text-3xl ">
              CHAMBERS
            </h3>
          </div>
        </div>

        {/* Mobile Navigation Items */}
        {menuIcons.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b text-white hover:bg-[#e9bc23] duration-300 hover:text-black cursor-pointer border-gray-600"
            onClick={() => handleMenuItemClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
