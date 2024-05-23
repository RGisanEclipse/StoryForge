import React from "react";
import { Outlet } from "react-router-dom";
import FeedSidebar from "./helpers/FeedSidebar";
import FeedRightSideBar from "./helpers/FeedRightSideBar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../images/StoryForgeLogo.png";
import PersonIcon from "@mui/icons-material/Person";
export default function Feed() {
  return (
    <div className="w-screen h-screen flex flex-row bg-[#0b0338]">
      <div className="fixed top-0 left-0 flex items-center justify-center md:hidden w-full h-14 p-2 px-4 gap-3">
        <img
          src={logo}
          alt="Story Forge Logo"
          className="h-8 w-auto mr-0 xl:mr-4"
        />
        <h1 className="text-white text-xl font-medium font-montserrat">
          STORY FORGE
        </h1>
      </div>
      <div className="hidden md:block w-1/6 max-w-sm xl:w-1/5 h-full">
        <FeedSidebar />
      </div>
      <div className="h-full w-full md:w-4/5 py-14 md:py-0">
        <Outlet />
      </div>
      <div className="hidden xl:block w-24 max-w-sm xl:w-1/5 h-screen pt-4">
        <FeedRightSideBar/>
      </div>
      <div className="fixed bottom-0 left-0 flex justify-between md:hidden w-full h-14 p-2 px-4 items-center">
        <HomeRoundedIcon
          className="text-white cursor-pointer hover:text-navHover"
          style={{ fontSize: "35px" }}
        />
        <SearchIcon
          className="text-white cursor-pointer hover:text-navHover"
          style={{ fontSize: "35px" }}
        />
        <CreateIcon
          className="text-white cursor-pointer hover:text-navHover"
          style={{ fontSize: "35px" }}
        />
        <PersonIcon
          className="text-white cursor-pointer hover:text-navHover"
          style={{ fontSize: "35px" }}
        />
        <LogoutIcon
          className="text-white cursor-pointer hover:text-navHover"
          style={{ fontSize: "35px" }}
        />
      </div>
    </div>
  );
}
