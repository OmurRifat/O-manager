import Head from "next/head";

import { Inter } from "next/font/google";

import Navber from "./Navber/Navber";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Unity Builders</title>
      </Head>
      <Navber></Navber>
      {/* <form className="hidden md:block">
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm rounded-lg "
            placeholder="Search Your Organization"
            required
          />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className=""></BsSearch>
          </div>
        </div>
      </form>
      <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-5 py-3 rounded-lg ml-4  inline-flex items-center">
        <BiDonateHeart className="text-3xl"></BiDonateHeart>
        <span>Donate</span>
      </button> */}
    </>
  );
}
