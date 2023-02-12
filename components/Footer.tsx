import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";
import { NocxaLogo } from "./misc/Icons";

export default function Footer() {
  return (
    <div className="my-8 mb-10">
      <div className="container w-full mx-auto">
        <div className="flex flex-col md:flex-row md:gap-4 gap-12 px-2">
          <div className="flex flex-1 flex-row flex-wrap gap-4 md:order-2 justify-center items-center">
            <Link className="hover:text-[var(--purple)]" href="#about">
              Services
            </Link>
            <Link className="hover:text-[var(--purple)]" href="#about">
              About Us
            </Link>
            <Link href="/" className="hover:text-[var(--purple)]">
              Our Work
            </Link>
            <Link href="/" className="hover:text-[var(--purple)]">
              The Team
            </Link>
            <Link href="/" className="hover:text-[var(--purple)]">
              Careers
            </Link>
            <Link href="/" className="hover:text-[var(--purple)]">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[var(--purple)]">
              Cookie Policy
            </Link>
          </div>
          <div className="flex flex-row flex-1 md:order-3 gap-8 justify-center items-center">
            <Link
              href="https://github.com/nocxa"
              target="_blank"
              className="h-8 w-8 hover:text-[var(--purple)]"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/nocxa"
              target="_blank"
              className="h-8 w-8 hover:text-[var(--purple)]"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://twitter.com/nocxaofficial"
              target="_blank"
              className="h-8 w-8 hover:text-[var(--purple)]"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              href="https://www.instagram.com/nocxa_official/"
              target="_blank"
              className="h-8 w-8 hover:text-[var(--purple)]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
          <div className="flex-1 flex md:order-1 flex-col justify-center items-center gap-4">
            <div className="h-10">
              <NocxaLogo secondaryColor="var(--purple)" />
            </div>
            <div className="footer-brand-text">
              2019 &copy; Noxca All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
