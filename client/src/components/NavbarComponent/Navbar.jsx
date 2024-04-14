import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIcons = [
    {
      id: 1,
      name: "Home",
      url: "",
    },
    {
      id: 2,
      name: "About",
      url: "",
    },
    {
      id: 3,
      name: "Contact",
      url: "",
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
  return (
    <>
      <div className=" mx-3 flex gap-4 justify-between md:0">
        {/* logo */}
        <div className=" flex items-center gap-2">
          <div className="w-20">
            <img className="" src="/VamLogos/VamImageLogo.png" alt="VAM Logo" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-2xl font-normal tracking-wider my-1 md:text-3xl">
              VAM Law
            </h3>
            <h3 className="text-2xl font-normal my-1 md:text-3xl ">Chambers</h3>
          </div>
        </div>

        <div className=" flex items-center md:hidden">
          {isMenuOpen ? (
            <MdOutlineClose
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={50}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              size={50}
            />
          )}
        </div>
        {/* menu icon  */}
        <div className=" hidden md:flex w-1/2  justify-center items-center">
          <ul className="flex w-full  justify-evenly">
            {menuIcons.map((item) => (
              <li className="text-xl font-normal">{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// {/* <div className="  w-full container mx-auto px-4 flex justify-between gap-8  items-center">
// <div className=" flex items-center gap-2">
//   <div>
//     {/* Logo */}
//     <img className="w-full" src="/VAMLogos/VAMImageLogo.png" alt="" />
//   </div>
//   <h3 className="text-xl md:text-3xl flex flex-col gap-1">
//     <span className="tracking-wider">VAM Law</span>
//     <span>Chambers</span>
//   </h3>
// </div>
// <div className="md:hidden">
//   <GiHamburgerMenu size={50} />
// </div>
// <div className="hidden md:block  w-1/2 border border-red-400">
//   <div className="flex">
//     {/* contact details */}
//     <div>
//       <span className="text-lg">+91 9294349229</span>
//     </div>

//     {/* social Media icons */}
//     {/* <div className="flex items-center p-2 gap-2 justify-center rounded-md  ">
//     {socialMedia.map((item) => (
//       <a
//         className="transition hover:opacity-75"
//         target="_blank"
//         rel="noreferrer"
//         href={item.url}
//         key={item.id}
//       >
//         {item.icons}
//       </a>
//     ))}
//   </div> */}
//   </div>
//   <div className="">
//     <ul className="flex justify-evenly">
//       <li>
//         <a href="#">Home</a>
//       </li>
//       <li>
//         <a href="#">About</a>
//       </li>
//       <li>
//         <a href="#">Services</a>
//       </li>
//       <li>
//         <a href="#">Contact</a>
//       </li>
//     </ul>
//   </div>
// </div>
// </div> */}
