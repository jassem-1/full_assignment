"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { signOut } from "next-auth/react";
import logo from "../assets/logos/logo.svg";
import Button from "./button";

interface NavLink {
  id: string;
  title: string;
}

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  const [active, setActive] = useState<string>("about");
  const [toggle, setToggle] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const navLinks: NavLink[] = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "works", title: "Works" },
    { id: "blog", title: "Blog" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActive(id);

    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 0;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };

  const handleToggle = () => {
    console.log("toggle!!!");
    setToggle(!toggle);
  };

  const handleAuthAction = () => {
    if (isLoggedIn) {
      signOut({ callbackUrl: "/login" });
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <nav
      className={`w-full jost-font  flex p-2 
        justify-center items-center h-14 fixed top-0  transition-transform duration-500 z-50 bg-white
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }
      `}
    >
      <div className="flex items-center w-full md:max-w-[700px]  xl:max-w-[1050px] justify-between gap-x-4 p-3">
        <Image
          src={logo}
          alt="logo"
          className="sm:w-[44px] sm:h-[52px] w-8 h-10"
        />
        <ul className="list-none md:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer md:text-sm xl:text-[16px] relative ${
                active === nav.id ? "text-[#6138BD]" : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            >
              <a
                href={`#${nav.id}`}
                className="flex items-center"
                onClick={(e) => handleNavClick(e, nav.id)}
                aria-current={active === nav.id ? "page" : undefined}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          label={isLoggedIn ? "Logout" : "Sign In"}
          onClick={handleAuthAction}
        />
      </div>
      <div className="md:hidden flex justify-end items-center">
        {toggle ? (
          <div className=" z-50">
            <FaTimes
              className="w-[18px] h-[18px] text-black cursor-pointer "
              onClick={handleToggle}
            />
          </div>
        ) : (
          <div className=" z-50">
            <FaBars
              className="w-[18px] h-[18px] hover:scale-150 text-black cursor-pointer z-50"
              onClick={handleToggle}
            />{" "}
          </div>
        )}
        <div
          className={`p-6 bg-gray-100 absolute transition-transform duration-500 ease-in-out right-0 h-screen w-1/4 z-40 top-12
   ${toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col mt-10">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.id ? "text-geay-600" : "text-gray-400"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => {
                    handleNavClick(e, nav.id);
                    setToggle(false);
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
