'use client'
import Link from 'next/link';
import icons from "@/app/utils/icons";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./NavLink";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";

const MENUS = [
  { name: "Products", path: "/" },
  { name: "Solutions", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Resources", path: "/" },
  { name: "Log In", path: "/" },
  { name: "Sign Up Now", path: "/" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <nav className="flex w-full justify-between items-center py-10 px-5 font-custom text-[#78350F]">
        <Link href="/landing_shop/public" className="text-3xl font-semibold">
          Collers
        </Link>

        <ul className="hidden lg:flex flex-row items-center gap-6">
          {MENUS.map((menu, index) => (
              <li key={index} className="navigation-list">
                <NavLink {...menu} />
              </li>
          ))}
        </ul>

        <button
            onClick={handleMenuToggle}
            className="lg:hidden z-10"
            aria-label="Toggle menu"
        >
          <Image src={icons.menuScale} alt="Menu icon" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
              <motion.div
                  ref={menuRef}
                  className="menu z-20 fixed inset-0 bg-white p-5"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <Link href="/landing_shop/public" className="text-3xl font-semibold">
                    Collers
                  </Link>
                  <button
                      onClick={handleMenuToggle}
                      aria-label="Close menu"
                      className="text-2xl font-semibold"
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <ul className="space-y-6 text-lg">
                    {MENUS.map((menu, index) => (
                        <motion.li
                            key={index}
                            className="mobile-navigation"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                          <Link href={menu.path}>{menu.name}</Link>
                        </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
