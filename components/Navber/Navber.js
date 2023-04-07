import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiDonateHeart } from "react-icons/bi";
const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleObject = {
    button: {
      background: "#2A9D8F",
    },
    pColor: {
      color: "#656565",
    },
    primary: {
      color: "#2A9D8F",
    },
  };

  return (
    <div>
      <nav style={styleObject.button} className=" shadow-sm   w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center mx-6 md:mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <h1 className=" flex items-center button font-bold text-xl cursor-pointer">
                    <img
                      className="md:w-24 w-14"
                      src="https://i.ibb.co/WnH0G6q/Family-logo-template-removebg-preview.png"
                      alt="Family-logo-template-removebg-preview"
                      border="0"
                    />
                    <p>Brighter Tomorrow</p>
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className="cursor-pointer text-white  font-semibold px-3 py-2 text-md "
                  >
                    Home
                  </Link>
                  <Link
                    href="/Organization"
                    className="cursor-pointer text-white  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Organization
                  </Link>
                  <Link
                    href="/Vision"
                    className="cursor-pointer  text-white   px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Vision
                  </Link>

                  <Link
                    href="/Contract"
                    className="cursor-pointer text-white  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contract
                  </Link>
                  <Link
                    href="/"
                    className="cursor-pointer flex items-center text-white px-3 py-2 rounded-md text-sm bg-amber-400 font-medium "
                  >
                    <BiDonateHeart /> Donate
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                style={styleObject.button}
                className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
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
          </div>
        </div>

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
            <div className="md:hidden bg-sky-600" id="mobile-menu">
              <div
                ref={ref}
                style={styleObject.button}
                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link
                  href="/"
                  className="cursor-pointer text-white  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/Organization"
                  className="cursor-pointer  text-white  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Organization
                </Link>

                <Link
                  href="/Vision"
                  className="cursor-pointer  text-white  block px-3 py-2 rounded-md text-base font-medium"
                >
                  Vision
                </Link>
                <Link
                  href="/Contract"
                  className="cursor-pointer  text-white   block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contract
                </Link>

                <Link
                  href="/"
                  className="cursor-pointer flex items-center text-white w-24 px-3 py-2 rounded-md text-sm bg-amber-400 font-medium "
                >
                  <BiDonateHeart /> Donate
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Navber;
