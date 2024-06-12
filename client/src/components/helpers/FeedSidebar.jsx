import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/StoryForgeLogo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar } from "@mui/material";
import RevealNX from "../utils/RevealNX";

export default function FeedSidebar(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="p-4 h-full overflow-y-auto" style={{ borderRight: "0.5px solid #3b3b3b", scrollbarWidth: "none"}}>
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
            {props.userData && (
              <div className="h-16 w-16 xl:h-18 xl:w-18">
                <Avatar
                  style={{ height: "100%", width: "100%" }}
                  src={props.userData.avatarSrc}
                />
              </div>
            )}
            <div className="hidden xl:flex flex-col">
              {props.userData && (
                <>
                  <h1 className="text-white text-md">
                    {props.userData.firstName} {props.userData.lastName}
                  </h1>
                  <p className="text-gray-400 font-thin text-sm">
                    @{props.userData.userName}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:flex flex-col font-montserrat gap-10 mt-7">
            <SidebarItem
              icon={<HomeRoundedIcon style={{ fontSize: "35px" }} />}
              text="Home"
              to="/feed"
            />
            <SidebarItem
              icon={<PersonIcon style={{ fontSize: "35px" }} />}
              text="Profile"
              to="/profile"
            />
            <SidebarItem
              icon={<SearchIcon style={{ fontSize: "35px" }} />}
              text="Explore"
              to="/explore"
            />
            <SidebarItem
              icon={<BookmarksIcon style={{ fontSize: "35px" }} />}
              text="Saved"
              to="/saved"
            />
            <SidebarItem
              icon={<CreateIcon style={{ fontSize: "35px" }} />}
              text="Create Story"
              to="/create"
            />
            <div onClick={handleLogout}>
              <SidebarItem
                icon={<LogoutIcon style={{ fontSize: "35px" }} />}
                text="Log Out"
              />
            </div>
          </div>
        </RevealNX>
      </div>
    </nav>
  );
}

function SidebarItem({ icon, text, to }) {
  return (
    <Link to={to}>
      <div className="flex items-center justify-center xl:justify-start text-white hover:text-fuschia cursor-pointer">
        {icon}
        <span className="text-xl mx-4 hidden xl:block">{text}</span>
      </div>
    </Link>
  );
}
