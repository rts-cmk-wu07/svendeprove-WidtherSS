import React from "react";
import { FaHome, FaSearch, FaCalendar } from "react-icons/fa";
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div className=" z-50 fixed bottom-0 w-full">
    <div className="bg-[#E9E9E9] h-[56px]">
      <div className="flex items-center justify-around pt-2 ">
          <Link to={"/aktiviteter"} className="border border-black rounded-full p-2">
            <FaHome className="text-black text-2xl" />
          </Link>
          <Link to={"/search"} className="border border-black rounded-full p-2 ml-5">
            <FaSearch className="text-black text-2xl" />
          </Link>
          <Link className="border border-black rounded-full p-2 ml-5">
            <FaCalendar className="text-black text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
