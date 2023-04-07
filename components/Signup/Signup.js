import React from "react";

const Signup = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="border">
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
          <div className="">
          
<form>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

          </div>
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
