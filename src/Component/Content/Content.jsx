import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";

export const Content = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-7 md:gap-8 ">
      <div className="text-white text-5xl md:text-6xl lg:text-8xl lg:font-medium">
        Google
      </div>

      {/* Input field */}
      <div className=" w-[90%] md:w-[70%] lg:w-[45%] border rounded-full flex p-2 md:p-3 items-center justify-center space-x-2 lg:space-x-7">
        <div className="text-zinc-500 md:text-xl">
          <BsSearch />
        </div>
        <input
          className="outline-none text-white bg-[#00000001] flex justify-center items-center w-[80%]"
          type="text"
          placeholder=""
        />
        <div className="text-zinc-500 text-xl md:text-2xl">
          <FiCamera />
        </div>
      </div>

      <div className="text-center">
        <div className="text-zinc-500 md:text-2xl">Google offered in:</div>
        <div className="flex text-blue-500 text-[12px] space-x-3 md:text-xl">
          <p className="hover:underline">Hausa</p>
          <p className="hover:underline">Igbo</p>
          <p className="hover:underline">Ede Yoruba</p>
          <p className="hover:underline">Nigerian Pidgin</p>
        </div>
      </div>
    </div>
  );
};
