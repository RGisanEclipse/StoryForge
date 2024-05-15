import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/StoryForgeLogo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
export default function FeedSidebar() {
  return (
    <nav className="bg-[#0b0338] p-4 h-full">
      <div className="container mx-auto flex flex-col gap-3">
        <div className="hidden md:flex items-center justify-center xl:justify-start">
          <div className="hidden md:block">
            <img
              src={logo}
              alt="Story Forge Logo"
              className="h-8 w-auto mr-0 xl:mr-4"
            />
          </div>
          <Link
            to="/"
            className="hidden xl:block text-white text-xl font-medium font-montserrat"
          >
            STORY FORGE
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 xl:justify-start">
          <div className="h-16 w-16 xl:h-18 xl:w-18">
            <Avatar style={{ height: "100%", width: "100%" }} />
          </div>
          <div className="hidden xl:flex flex-col">
            <h1 className="text-white text-md">Rishab Guleria</h1>
            <p className="text-gray-400 font-thin text-sm">@RGisanEclipse</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col font-montserrat gap-10 mt-7">
          <div className="flex items-center justify-center xl:justify-start">
            <HomeRoundedIcon
              className="text-white cursor-pointer hover:text-navHover"
              style={{ fontSize: "35px" }}
            />
            <a
              href="#"
              className="hidden xl:block text-white text-xl mx-4 hover:text-navHover"
            >
              Home
            </a>
          </div>
          <div className="flex items-center justify-center xl:justify-start">
            <SearchIcon
              className="text-white cursor-pointer hover:text-navHover"
              style={{ fontSize: "35px" }}
            />
            <a
              href="#"
              className="hidden xl:block text-white text-xl mx-4 hover:text-navHover"
            >
              Explore
            </a>
          </div>
          <div className="flex items-center justify-center xl:justify-start">
            <BookmarksIcon
              className="text-white cursor-pointer hover:text-navHover"
              style={{ fontSize: "35px" }}
            />
            <a
              href="#"
              className="hidden xl:block text-white text-xl mx-4 hover:text-navHover"
            >
              Saved
            </a>
          </div>
          <div className="flex items-center justify-center xl:justify-start">
            <CreateIcon
              className="text-white cursor-pointer hover:text-navHover"
              style={{ fontSize: "35px" }}
            />
            <a
              href="#"
              className="hidden xl:block text-white text-xl mx-4 hover:text-navHover"
            >
              Create Post
            </a>
          </div>
          <div className="flex items-center justify-center xl:justify-start">
            <LogoutIcon
              className="text-white cursor-pointer hover:text-navHover"
              style={{ fontSize: "35px" }}
            />
            <a
              href="#"
              className="hidden xl:block text-white text-xl mx-4 hover:text-navHover"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
