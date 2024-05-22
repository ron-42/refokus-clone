import React, { useState, useEffect } from "react";
import Button from "./Button";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto p-3 flex items-center justify-between font-satoshi-variable border-b-[1px] border-zinc-700 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900 bg-opacity-80 backdrop-blur-md" : "bg-zinc-900"
      }`}
    >
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="Logo"
        />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={index} className="text-sm flex items-center gap-1">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00ff19" }}
                    className="inline-block w-1 h-1 bg-green-400 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button title={"Start a Project"} />
    </div>
  );
}

export default Navbar;
