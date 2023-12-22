import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex">
      <div className="w-1/3 text-center border-t-2 border-b-2 border-l-2 border-black p-4 ">
        <p className="font-bold">Lorem ipsum</p>
      </div>
      <div className="w-2/3 border-2 border-black p-4 text-right">
        <p className="pr-4 font-bold">Link 1</p>
      </div>
    </div>
  );
};

export default Navbar;
