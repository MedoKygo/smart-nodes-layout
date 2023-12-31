import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import {RiDashboardFill} from 'react-icons/ri'

const SideBar = () => {
  const [open, setOpen] = useState(false);
  let menus = [
    "Dashboard",
    "Pages",
    "Media",
    "Projecs",
    "Analytics",
    "Inbox",
    "Profile",
    "Setting",
    "Logout",
  ];
  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            } `}
          >
            Blog
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 px-4 py-2 ${
            !open ? "px-2.5" : "px-4"
          }`}
        >
          <BsSearch className="text-white text-lg  block float-left cursor-pointer" />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <ul>
          {menus.map((menu) => (
            <li
              key={menu}
              className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-ligh-white rounded-md mt-2"
            >
              <span className="text-2xl block float-left">
                <RiDashboardFill/>
              </span>
              <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default SideBar;