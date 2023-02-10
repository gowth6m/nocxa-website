import useWindowDimensions from "@/utils/window";
import Link from "next/link";
import React, { useState } from "react";
import NocxaLogo, { IconMenu } from "./Icons";

export default function NavBar() {
  const { width } = useWindowDimensions() ?? { width: 0 };
  const [menuOpened, setMenuOpened] = useState(false);

  return (
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
          className="m-2 cursor-pointer md:hidden"
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
          <Link href="/services" className={cssNavLinks}>
            Services
          </Link>
          <Link href="/work" className={cssNavLinks}>
            Work
          </Link>
          <Link href="/prices" className={cssNavLinks}>
            Prices
          </Link>
          <Link href="/about" className={cssNavLinks}>
            Company
          </Link>
          <Link href="/about" className={cssNavLinks}>
            Careers
          </Link>
        </div>

        <div className="hidden md:flex md:flex-1">
          <Link className="ml-auto sec-button" href="/contact">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}

// CSS for the NavBar.tsx component
const cssNavLinks =
  "text-white font-bold text-lg m-2 hover:text-[var(--purple)]";
