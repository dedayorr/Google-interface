import React from "react";

export const Footer = () => {
  return (
    <div className="text-zinc-500 bg-[#0000009d]">
      <div className="pl-3 pb-[10px] md:text-xl hover:text-blue-500">
        Nigeria
      </div>
      <hr></hr>
      <div className="pt-[10px] flex flex-col items-center text-sm md:text-xl lg:flex-row lg:justify-between lg:p-3">
        <div className="flex space-x-5">
          <div className="hover:text-blue-500">Dark theme: on</div>
          <div className="hover:text-blue-500">Settings</div>
          <div className="hover:text-blue-500">Privacy</div>
          <div className="hover:text-blue-500">Terms</div>
        </div>
        <div className="flex space-x-4">
          <div className="hover:text-blue-500">Advertising</div>
          <div className="hover:text-blue-500">Business</div>
          <div className="hover:text-blue-500">About</div>
        </div>
      </div>
    </div>
  );
};
