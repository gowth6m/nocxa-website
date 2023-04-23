import { NocxaIcon } from "@/components/misc/Icons";
import Link from "next/link";
import React from "react";

export default function maintenance() {
  return (
    <div className="h-[100vh] font-museo">
      <div className="flex flex-col justify-center align-middle items-center h-full w-full gap-4">
        <div className="grad-bg-text text-6xl">
          Website is under maintenance
        </div>
        <p className="font-museo text-2xl">
          We are currently working on the website. Please check back later.
        </p>
        <Link href={"/"}>
          <NocxaIcon className="w-[10em] h-48" />
        </Link>
      </div>
    </div>
  );
}
