import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div>
        <div className="max-w-screen-xl mx-auto py-10 flex gap-36">
          <div className="basis-1/2">
            <h1 className="text-[11rem] font-semibold leading-none">
              refokus.
            </h1>
          </div>
          <div className="basis-1/2 flex gap-5 justify-between">
            <div className="flex flex-col text-zinc-400">
              <h3 className="mb-10">Socials</h3>
              <a className="hover:text-white" href="#">
                Instagram
              </a>
              <a className="hover:text-white" href="#">
                Twitter(X?)
              </a>
              <a className="hover:text-white" href="#">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="mb-10 text-violet-600">Sitemap</h3>
              <a href="#">Home</a>
              <a href="#">Work</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="w-[50%] relative pl-10 mt-10 flex flex-col">
              <p className="text-sm font-semibold text-right ">
                Refokus is a pioneering digital agency driven by design and
                empowered by technology.
              </p>
              <img
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt=""
                className="w-24 absolute top-[60%] left-[65%] px-4 py-1 mt-4 bg-violet-600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto flex gap-10 text-sm text-zinc-400 py-5">
        <a className="hover:text-zinc-100" href="#">
          Privacy Policy
        </a>
        <a className="hover:text-zinc-100" href="#">
          Cookie Policy
        </a>
        <a className="hover:text-zinc-100" href="#">
          Impressum
        </a>
        <a className="hover:text-zinc-100" href="#">
          Terms
        </a>
      </div>
    </div>
  );
}

export default Footer;
