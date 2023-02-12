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
import { NocxaLogo, IconMenu } from "./misc/Icons";

export default function NavBar() {
  const { width } = useWindowDimensions() ?? { width: 0 };
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
    } 
    else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {true && (
        <div
          className={
            visible
              ? "fixed top-0 w-full flex justify-center items-center h-16"
              : "fixed top-0 w-full flex justify-center items-center h-16 bg-[var(--navblack)]"
          }
        >
          <div className="container fixed mx-auto h-16 flex font-museo">
            {/* MOBILE */}
            <div className="flex justify-between items-center w-full mx-2 md:mx-4">
              {/* LOGO */}
              <div className="h-8 md:flex-1 flex justify-start md:w-full">
                <NocxaLogo
                  secondaryColor="var(--purple)"
                  className="md:mr-auto md:w-auto"
                />
              </div>

              <div
                className="m-2 cursor-pointer md:hidden z-50"
                onClick={() => {
                  setMenuOpened(!menuOpened);
                }}
              >
                <IconMenu
                  className=""
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

            {/* MOBILE MENU */}
            {menuOpened && (
              <motion.div
                className="bg-black w-full h-full fixed origin-top flex flex-col text-center z-40 items-center"
                variants={variants_0}
                animate={menuOpened ? "transform" : "stop"}
              >
                <div className="flex flex-col text-center z-40 items-center mt-14">
                  {navLinks.map((item: any) => {
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white font-semibold text-lg my-2 hover:text-[var(--purple)] p-4"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-row flex-1 md:order-3 gap-8 justify-center items-center">
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
              </motion.div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// CSS for the NavBar.tsx component
const cssNavLinks = "text-[var(--purple)] text-lg font-semibold lg:m-2 hover:text-[var(--white)] hover:bg-[var(--purple)] rounded-full py-2 px-4";

const socialLinks = "h-8 w-8 md:h-12 md:w-12 hover:text-[var(--purple)]";

const variants_0 = {
  transform: {
    scaleY: [0, 1.1, 1],
    scaleX: [1, 1, 1],
    transition: { duration: 0.5 },
  },
};
