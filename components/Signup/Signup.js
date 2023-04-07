import React from "react";

const Signup = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <h1 className="text-5xl text-[green] m-5 ">Sign Up</h1>
          <div className="flex  items-center m-5 mt-10">
            <div className="bg-[black] h-1 w-24 me-5"></div>
            <p>Sign up with</p>
          </div>
          <div className="flex items-center">
            <div className="flex justify-around items-center border p-2 rounded mx-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB"
                alt=""
                width="36px"
              ></img>
              <p className="mx-2">Continue with Google</p>
            </div>
            <div className="flex justify-around items-center border p-2 rounded">
              <img
                src="https://www.citypng.com/public/uploads/preview/-11595349592mdhzsfgakx.png"
                alt=""
                width="36px"
              ></img>
              <p className="mx-2 ">Continue with Facebook</p>
            </div>
          </div>
          <p className="text-center text-3xl font-bold">or</p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-96"
            src="https://i.ibb.co/mhDL5Rb/signup.png"
            alt="Family-logo-template-removebg-preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
