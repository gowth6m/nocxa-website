import useWindowDimensions from "@/utils/window";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NocxaLogo, IconMenu, NocxaIcon } from "./misc/Icons";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navLinks = [
    { name: "Services", href: "services" },
    { name: "Work", href: "work" },
    { name: "Prices", href: "prices" },
    { name: "Company", href: "company" },
    { name: "Careers", href: "careers" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 64) {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {/* BEFORE SCROLL */}
      {visible && (
        <div className="fixed top-2 w-full flex justify-center items-center h-16 bg-transparent">
          <div className="container fixed mx-auto h-16 flex font-museo">
            {/* MOBILE */}
            <div className="flex justify-between items-center w-full md:mx-4 mx-1">
              {/* LOGO */}
              <div className="flex-1-1 md:flex-1 flex justify-start md:w-full mx-0 px-0">
                {true ? (
                  <NocxaLogo
                    secondaryColor="var(--purple)"
                    className="md:mr-auto md:w-auto mx-0 h-8 w-34"
                  />
                ) : (
                  <NocxaIcon
                    secondaryColor="var(--purple)"
                    className="md:mr-auto md:w-auto mx-1 h-14 w-14"
                  />
                )}
              </div>

              <div
                className="m-2 cursor-pointer md:hidden z-50"
                onClick={() => {
                  setMenuOpened(!menuOpened);
                }}
              >
                <IconMenu
                  className="h-8 w-8"
                  fill="white"
                  secondaryColor="var(--purple)"
                  open={menuOpened ? true : false}
                />
              </div>

              {/* MENU */}
              <div className="hidden md:flex flex-row">
                {navLinks.map((item: any) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cssNavLinks}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:flex md:flex-1">
                <Link className="ml-auto sec-button" href="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AFTER SCROLL */}
      {!visible && (
        <motion.div
          className="fixed top-0 w-full flex justify-center items-center h-16 md:bg-[var(--black)] bg-transparent origin-top"
          variants={variants_0}
          animate={!visible ? "transform" : "stop"}
        >
          <div className="container fixed mx-auto h-16 flex font-museo">
            {/* MOBILE */}
            <div className="flex justify-between items-center w-full md:mx-4 mx-1">
              {/* LOGO */}
              <div className="flex-1-1 md:flex-1 flex justify-start md:w-full mx-0 px-0">
                {visible ? (
                  <NocxaLogo
                    secondaryColor="var(--purple)"
                    className="md:mr-auto md:w-auto mx-0 h-8 w-34"
                  />
                ) : (
                  <NocxaIcon
                    secondaryColor="var(--purple)"
                    className="md:mr-auto md:w-auto mx-1 h-14 w-14"
                  />
                )}
              </div>

              <div
                className="m-2 cursor-pointer md:hidden z-50"
                onClick={() => {
                  setMenuOpened(!menuOpened);
                }}
              >
                <IconMenu
                  className="h-8 w-8"
                  fill="white"
                  secondaryColor="var(--purple)"
                  open={menuOpened ? true : false}
                />
              </div>

              {/* MENU */}
              <div className="hidden md:flex flex-row">
                {navLinks.map((item: any) => {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cssNavLinks}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="hidden lg:flex md:flex-1">
                <Link className="ml-auto sec-button" href="/contact">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* MOBILE MENU */}
      {menuOpened && (
        <MobileNavMenu
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          navLinks={navLinks}
        />
      )}
    </>
  );
}

function MobileNavMenu({ menuOpened, setMenuOpened, navLinks }: any) {
  return (
    <motion.div
      className="bg-[var(--black)] w-full h-full fixed origin-top flex flex-col text-center z-40 items-center"
      variants={variants_0}
      animate={menuOpened ? "transform" : "stop"}
    >
      <div className="w-full p-2 flex flex-row justify-between">
        <div className="flex-1-1 md:flex-1 flex justify-start md:w-full mx-0 px-0 my-2">
          <NocxaLogo
            secondaryColor="var(--pink)"
            className="md:mr-auto md:w-auto mx-0 h-8 w-34"
          />
        </div>
        <div
          className="mx-2 my-2 cursor-pointer md:hidden z-50"
          onClick={() => {
            setMenuOpened(!menuOpened);
          }}
        >
          <IconMenu
            className="h-8 w-8"
            fill="white"
            secondaryColor="var(--purple)"
            open={menuOpened ? true : false}
          />
        </div>
      </div>
      <div className="flex flex-col z-40 items-center w-[92%]">
        {navLinks.map((item: any) => {
          return (
            <Link
              key={item.name}
              href={item.href}
              className="text-[var(--lightWhite)] w-full font-semibold text-2xl hover:text-[var(--purple)] p-4 text-left"
            >
              {item.name}{" "}
              <span className="text-[var(--pink)] text-5xl"> .</span>
            </Link>
          );
        })}
      </div>
      <Socials />
      <div className="absolute w-40 h-40 bg-[var(--tintBlack2)] rounded-full intro-moon-circle top-[16%] left-48 z-10"></div>
      <div className="absolute w-80 h-80 bg-[var(--tintBlack)] rounded-full intro-moon-circle-2 top-[48%] left-52 z-10"></div>
    </motion.div>
  );
}

function Socials() {
  return (
    <div className="flex flex-row md:order-3 gap-10 justify-center items-center my-16 w-[92%] z-20">
      <Link
        href="https://github.com/nocxa"
        target="_blank"
        className={socialLinks}
      >
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link
        href="https://www.linkedin.com/company/nocxa"
        target="_blank"
        className={socialLinks}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
      <Link
        href="https://twitter.com/nocxaofficial"
        target="_blank"
        className={socialLinks}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link
        href="https://www.instagram.com/nocxa_official/"
        target="_blank"
        className={socialLinks}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
    </div>
  );
}

// CSS for the NavBar.tsx component
const cssNavLinks =
  "text-[var(--purple)] text-lg font-semibold lg:m-2 hover:text-[var(--lightWhite)] hover:bg-[var(--purple)] rounded-full py-2 px-4";

const socialLinks =
  "h-8 w-8 md:h-12 md:w-12 hover:text-[var(--purple)] text-[var(--lightWhite)]";

const variants_0 = {
  transform: {
    scaleY: [0, 1.1, 1],
    scaleX: [1, 1, 1],
    transition: { duration: 0.5 },
  },
};
