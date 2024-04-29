import React, { useState, useEffect } from "react";
import logo from "../StoryForgeLogo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);
  return (
    <nav className="bg-[#0b0338] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="hidden md:block">
            <img
              src={logo}
              alt="Story Forge Logo"
              className="h-10 w-auto mr-2"
            />
          </div>
          <Link to="/" className="text-white text-xl font-bold">
            STORY FORGE
          </Link>
        </div>
        <div className="hidden md:flex font-orbitron">
          <a href="#" className="text-white mx-4 hover:text-navHover">
            Browse
          </a>
          <a href="#" className="text-white mx-4 hover:text-navHover">
            Community
          </a>
          <a href="#" className="text-white mx-4 hover:text-navHover">
            Write
          </a>
          <Link to="/login" className="text-white mx-4 hover:text-navHover">
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <img src={logo} alt="Burger Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-50 transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-10 bg-[#0b0338] w-48 lg:w-96 transform font-orbitron ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="py-4 px-2">
          <a
            href="#"
            className="block text-white px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse
          </a>
          <a
            href="#"
            className="block text-white px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </a>
          <a
            href="#"
            className="block text-white px-4 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Write
          </a>
          <Link to="/login" className="block text-white px-4 py-2">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
