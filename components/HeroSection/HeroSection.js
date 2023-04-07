import React from "react";
import { RxVideo } from "react-icons/rx";

const HeroSection = () => {
  const styleObject = {
    background: {
      background: "rgba(42, 157, 143, 0.1)",
    },
    button: {
      background: "#2A9D8F",
    },
  };
  return (
    // clip-path: polygon(100% 0, 100% 100%, 74% 79%, 0 79%, 0 0)
    <div
      id="clipping"
      style={styleObject.background}
      className="text-black md:mx-20 mx-10"
    >
      <div className="flex p-5 mx-7 my-10 items-center justify-center">
        <div>
          <h1 className="font-bold text-4xl">
            Empower Communities. Create Change. Join Our Non-Profit
          </h1>
          <p>
            Every donation and volunteer effort makes a tangible impact in the
            lives of those we serve. Be part of the solution today.
          </p>
          <div>
            <button
              style={styleObject.button}
              className="flex mt-2 text-white rounded-lg p-1 items-center justify-center"
            >
              Sign Up
            </button>
            <button
              style={styleObject.button}
              className="flex mt-2 text-white rounded-lg p-1 items-center justify-center"
            >
              Our Vision <RxVideo className="mt-1 mx-1"></RxVideo>
            </button>
          </div>
        </div>
        <div className="flex hidden mt-72 -z-30">
          <p>Vision</p>
          <p>Vision</p>
          <p>Vision</p>
          <p>Vision</p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/RzzH2KN/Rectangle-137.png"
            alt="Rectangle-137"
            border="0"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
