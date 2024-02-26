"use client";

import unitLogoBlack from "@public/images/unit-logo-black.svg";
import unitLogoWhite from "@public/images/unit-logo-white.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { height } = useWindowSize();
  const checkScroll = () => {
    if (height !== null && window.scrollY >= height) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  return (
    <div
      className={cn(
        "w-full fixed top-0 z-50",
        isScrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "w-full px-12 xl:px-24 flex items-center gap-x-8 py-6 left-0 right-0 font-medium font-poppins transition-all",
          isScrolled ? "text-unit-black" : "text-white",
        )}
      >
        <Image
          src={isScrolled ? unitLogoBlack : unitLogoWhite}
          alt="Unit Network"
          width={48}
          height={48}
          priority
          className="mr-auto"
        />
        <Link href="#">Unit Network</Link>
        <Link href="#">Events</Link>
        <Link href="#">FAQ</Link>
      </div>
    </div>
  );
}

export default Navbar;
