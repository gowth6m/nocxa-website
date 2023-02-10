import useWindowDimensions from "@/utils/window";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NocxaLogo, IconMenu } from "./Icons";

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
    if (window.scrollY > 56) {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && width! > 768) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      {visible && (
        <div className="container mx-auto h-14 md:h-16 flex">
          {/* MOBILE */}
          <div className="flex justify-between items-center w-full">
            {/* LOGO */}
            <div className="h-8 m-2 md:flex-1 flex justify-start md:w-full">
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

            <div className="hidden md:flex md:flex-1">
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
                      className="text-white font-semibold text-lg m-4 hover:text-[var(--purple)]"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
}

// CSS for the NavBar.tsx component
const cssNavLinks =
  "text-white font-semibold text-lg m-4 hover:text-[var(--purple)]";

const variants_0 = {
  transform: {
    scaleY: [0, 1.1, 1],
    scaleX: [1, 1, 1],
    transition: { duration: 0.5 },
  },
};
