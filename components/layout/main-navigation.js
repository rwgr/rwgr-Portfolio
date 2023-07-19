import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { navLinks } from "../../content/index.js";
import closeIcon from "../../assets/icons/closeIcon.svg";
import menuIcon from "../../assets/icons/menuIcon.svg";
import logo from "../../assets/logo1.svg";
import { useContext, useState } from "react";

import ActiveContext from "../../store/activeContext.js";

function MainNavigation() {
  const activeCtx = useContext(ActiveContext);

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="font-extrabold bg-primaryBlue flex justify-between min-h-fit items-center w-full px-8 fixed top-0 z-20 shadow-xl text-white">
      <div className="p-2 flex gap-4 items-center">
        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
          <Image
            src={logo}
            width={80}
            height="auto"
            alt="Robin's Portfolio Logo"
            className="cursor-pointer object-contain"
          />
        </Link>
        <h1 className="text-lg">Robin&apos;s Portfolio</h1>
      </div>
      <nav>
        <ul className="list-none sm:flex hidden flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  activeCtx.activeSection === link.title
                    ? "text-highlightGreen"
                    : "text-white"
                } hover:text-highlightGreen text-xl font-medium cursor-pointer`}
              >
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => activeCtx.setActive(link.title)}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggleMenu ? closeIcon : menuIcon}
            alt="Menu"
            width={40}
            height={40}
            className="object-contain cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div
            className={`${
              !toggleMenu ? "hidden" : "flex"
            } p-6 bg-secondaryBlue border-l-4 border-b-4 border-highlightGreen shadow-xl absolute top-20 right-0 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none  flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      activeCtx.activeSection === link.title
                        ? "text-highlightGreen"
                        : "text-white"
                    } hover:text-highlightGreen text-lg font-medium cursor-pointer`}
                  >
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => {
                        setToggleMenu(!toggleMenu);
                        activeCtx.setActive(link.title);
                      }}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
