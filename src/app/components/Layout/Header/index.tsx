"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

import Logo from "./Logo";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";
import Signin from "@/app/components/Auth/SignIn";
import SignUp from "@/app/components/Auth/SignUp";
import { headerItem } from "@/app/types/menu";

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<headerItem[]>([]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setHeaderData(data.HeaderData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // 1. Memoized Scroll Handler
  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 80);
  }, []);

  // 2. Memoized Click Outside Handler (Fixes the ESLint error)
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Node;

      if (signInRef.current && !signInRef.current.contains(target)) {
        setIsSignInOpen(false);
      }
      if (signUpRef.current && !signUpRef.current.contains(target)) {
        setIsSignUpOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    },
    [navbarOpen],
  ); // navbarOpen is a dependency here

  // 3. Event Listener Effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll, handleClickOutside]); // Dependencies are now stable

  // 4. Body Scroll Lock Effect
  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`z-40 w-full transition-all fixed top-0 duration-300 ${
        sticky ? "shadow-lg bg-white py-3" : "shadow-none bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex grow items-center gap-8 justify-start md:ml-20">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Sign In Trigger */}
            <button
              className="hidden lg:block bg-transparent text-primary border border-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full font-medium transition-colors"
              onClick={() => setIsSignInOpen(true)}
            >
              Sign In
            </button>

            {/* Sign Up Trigger */}
            <button
              className="hidden lg:block bg-primary text-white hover:bg-transparent hover:text-primary border border-primary px-6 py-2 rounded-full font-medium transition-colors"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign Up
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>
      </div>

      {/* --- Modals and Overlays --- */}

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div
            ref={signInRef}
            className="relative w-full max-w-md bg-white rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md shadow-2xl"
          >
            <button
              onClick={() => setIsSignInOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              aria-label="Close Sign In"
            >
              <Icon icon="tabler:x" className="text-2xl" />
            </button>
            <Signin />
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div
            ref={signUpRef}
            className="relative w-full max-w-md bg-white rounded-lg px-8 pt-14 pb-8 text-center bg-dark_grey/90 backdrop-blur-md shadow-2xl"
          >
            <button
              onClick={() => setIsSignUpOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              aria-label="Close Sign Up"
            >
              <Icon icon="tabler:x" className="text-2xl" />
            </button>
            <SignUp />
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {navbarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" />
      )}

      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs z-50 ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Logo />
          <button
            onClick={() => setNavbarOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <Icon icon="tabler:x" className="text-2xl" />
          </button>
        </div>

        <nav className="flex flex-col p-4">
          {headerData.map((item, index) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-6 flex flex-col gap-4">
            <button
              className="w-full border border-primary text-primary px-4 py-2 rounded-lg"
              onClick={() => {
                setIsSignInOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign In
            </button>
            <button
              className="w-full bg-primary text-white px-4 py-2 rounded-lg"
              onClick={() => {
                setIsSignUpOpen(true);
                setNavbarOpen(false);
              }}
            >
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
