import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiDonateHeart } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleObject = {
    button: {
      background: "#2A9D8F",
    },
    pColor: {
      background: "#EAF5F4",
    },
    primary: {
      color: "#2A9D8F",
    },
  };

  return (
    <div>
      {/* firstblock */}
      <nav
        style={styleObject.pColor}
        className="md:block z-20 top-0 backdrop-filter backdrop-blur hidden shadow-sm w-full "
      >
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-6 md:mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <h1 className="flex items-center button font-bold text-xl cursor-pointer">
                    <img
                      className="md:w-12 w-14"
                      src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                      alt="project-logo"
                      border="0"
                    />
                    <p className="text-black">Organization Manager</p>
                  </h1>
                </Link>
              </div>
              <div className="flex items-center">
                <div class="relative flex justify-end items-center mr-6 my-2">
                  <input
                    type="search"
                    class=" md:w-72 rounded-md"
                    placeholder="Organization Search"
                  />
                  <div class="absolute pin-r pin-t mt-3 mr-4 ">
                    <p className="text-black cursor-pointer mb-2">
                      <BsSearch />
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    style={styleObject.button}
                    href="/"
                    className="cursor-pointer flex items-center text-white px-3 py-2 rounded-md text-sm  font-medium "
                  >
                    <BiDonateHeart /> Donate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* responsive-mobile */}
      <nav className="md:hidden mx-2 shadow-sm w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex bg-opacity-60 z-20 top-0 backdrop-filter backdrop-blur  shadow-sm w-full fixed items-center md:mx-20 justify-between">
              <div className="flex justify-center items-center flex-shrink-0">
                <div className="mr-10 flex md:hidden ">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    style={styleObject.button}
                    className=" inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <Link href="/">
                  <h1 className="flex items-center button font-bold text-xl cursor-pointer">
                    <p className="text-black">Organization Manager</p>
                  </h1>
                </Link>
              </div>
              <div>
                <Link href="/" className="cursor-pointer flex items-center ">
                  <img
                    className="md:w-12 w-14"
                    src="https://i.ibb.co/Bw1TVQS/project-logo.png"
                    alt="project-logo"
                    border="0"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <nav className="shadow-sm bg-opacity-60 z-20 top-0 backdrop-filter backdrop-blur  w-full ">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden  " id="mobile-menu">
              <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/"
                  className="cursor-pointer text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/Organization"
                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Organization
                </Link>

                <Link
                  href="/Vision"
                  className="cursor-pointer  text-black  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Vision
                </Link>
                <Link
                  href="/Contract"
                  className="cursor-pointer  text-black   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contract
                </Link>

                <Link
                  style={styleObject.button}
                  href="/"
                  className="cursor-pointer flex items-center text-white w-24 px-3 py-2 rounded-md text-sm  font-medium "
                >
                  <BiDonateHeart /> Donate
                </Link>
              </div>
            </div>
          )}
        </Transition>
        <div className="flex mt-20 justify-start">
          <div className="text-black mx-10">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="cursor-pointer  font-semibold px-3 py-2 text-md "
                >
                  Home
                </Link>
                <Link
                  href="/Organization"
                  className="cursor-pointer   px-3 py-2 rounded-md text-sm font-medium"
                >
                  Organization
                </Link>
                <Link
                  href="/Vision"
                  className="cursor-pointer    px-3 py-2 rounded-md text-sm font-medium"
                >
                  Vision
                </Link>

                <Link
                  href="/Contract"
                  className="cursor-pointer   px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contract
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
