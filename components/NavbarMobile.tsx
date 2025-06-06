"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import data from "@/data/data.json";

export default function NavbarMobile() {
  const { name, role, profileImage } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed left-1/2 top-4 -translate-x-1/2 z-50 p-2"
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-0 z-40 h-[70%] bg-dark-a10 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Split into two sections: nav links and profile */}
        <div className="h-full flex flex-col">
          {/* Navigation Links */}
          <ul className="flex flex-col items-center justify-start space-y-8 p-4 mt-20">
            <li>
              <Link
                href="/"
                className="text-xl text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-xl text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className="text-xl text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                href="/links"
                className="text-xl text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                Links
              </Link>
            </li>
            <li>
              <Link
                href="/stack"
                className="text-xl text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                Stack
              </Link>
            </li>
          </ul>

          {/* Profile Section - Sticky Bottom */}
          <div className="mt-auto p-4 border-t border-white/10">
            <div className="flex justify-center items-center gap-6">
              <Avatar className="w-20 h-auto">
                <AvatarImage
                  src={profileImage}
                  className="object-cover"
                />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {name}
                </h3>
                <p className="mt-1 text-white/80">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
