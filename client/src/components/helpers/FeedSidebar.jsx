import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/StoryForgeLogo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import RevealNX from "../utils/RevealNX";
export default function FeedSidebar() {
  return (
    <nav className="p-4 h-full">
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
        <RevealNX>
          <div className="flex items-center justify-center gap-5 xl:justify-start">
            <div className="h-16 w-16 xl:h-18 xl:w-18">
              <Avatar
                style={{ height: "100%", width: "100%" }}
                src={
                  "https://pbs.twimg.com/profile_images/1676116130275143680/BkUKyvp7_400x400.jpg"
                }
              />
            </div>
            <div className="hidden xl:flex flex-col">
              <h1 className="text-white text-md">Rishab Guleria</h1>
              <p className="text-gray-400 font-thin text-sm">@RGisanEclipse</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col font-montserrat gap-10 mt-7">
            <SidebarItem
              icon={<HomeRoundedIcon style={{ fontSize: "35px" }} />}
              text="Home"
            />
            <SidebarItem
              icon={<SearchIcon style={{ fontSize: "35px" }} />}
              text="Explore"
            />
            <SidebarItem
              icon={<BookmarksIcon style={{ fontSize: "35px" }} />}
              text="Saved"
            />
            <SidebarItem
              icon={<CreateIcon style={{ fontSize: "35px" }} />}
              text="Create Story"
            />
            <SidebarItem
              icon={<LogoutIcon style={{ fontSize: "35px" }} />}
              text="Log Out"
            />
          </div>
        </RevealNX>
      </div>
    </nav>
  );
}
function SidebarItem({ icon, text }) {
  return (
    <div className="flex items-center justify-center xl:justify-start text-white hover:text-navHover cursor-pointer">
      {icon}
      <span className="text-xl mx-4 hidden xl:block">{text}</span>
    </div>
  );
}
