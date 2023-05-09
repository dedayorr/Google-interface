import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
// import { AllApps } from "../AllApps/AllApps";

export const NavBar = () => {
  return (
    <>
      {/* Mobile view */}
      <div className="text-zinc-500 flex justify-between p-2 md:p-5 lg:hidden">
        <div className="flex space-x-4 items-center md:space-x-6 md:text-2xl">
          <div className="text-2xl">
            <RxHamburgerMenu />
          </div>
          
          <div className="hover:text-blue-400 hover:underline ">ALL</div>
          <div className="hover:text-blue-400 hover:underline">IMAGES</div>
        </div>
        <div className="flex items-center space-x-4 md:space-x-6 md:text-2xl">
          <div className="text-2xl md:text-3xl">
            <TbGridDots />
          </div>
          {/* <AllApps/> */}
          <div className="bg-blue-400 p-2 text-sm rounded-sm text-black md:p-4 md:text-xl">
            Sign in
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className=" hidden md:hidden lg:flex text-zinc-500 ">
        <div className="absolute right-[0%] flex float-right p-3 items-center space-x-4">
        <div className="hover:text-blue-500">Gmail</div>
        <div className="hover:text-blue-500">Images</div>
        <div className="text-2xl hover">
          <TbGridDots />
        </div>
        <div className="bg-blue-400 p-2 text-black rounded-md">Sign in</div>
        </div>
      </div>
    </>
  );
};
