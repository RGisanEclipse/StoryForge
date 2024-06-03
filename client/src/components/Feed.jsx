import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import FeedSidebar from "./helpers/FeedSidebar";
import FeedRightSideBar from "./helpers/FeedRightSideBar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchIcon from "@mui/icons-material/Search";
import CreateIcon from "@mui/icons-material/Create";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../images/StoryForgeLogo.png";
import PersonIcon from "@mui/icons-material/Person";

const isAuthenticated = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(
      "https://storyforge.onrender.com/verify-token",
      {},
      { headers: { Authorization: token } }
    );
    return response.data.success;
  } catch (error) {
    return false;
  }
};

export default function Feed() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      if (!authenticated) {
        localStorage.clear();
        navigate("/login");
      } else {
        try {
          const userId = localStorage.getItem("userID");
          const response = await axios.get("https://storyforge.onrender.com/user-data", {
            headers: { Authorization: localStorage.getItem("token") },
            params: { userId: userId },
          });
          if (response.data) {
            setUserData(response.data);
          } else {
            console.error("Error: No user data received");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          localStorage.clear();
          navigate("/login");
        }
      }
    };
    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-full h-full flex flex-row bg-void">
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
        <FeedSidebar userData={userData} />
      </div>
      <div className="h-full w-full md:w-5/6 xl:w-4/5 py-14 md:py-0">
        <Outlet context={userData} />
      </div>
      <div className="hidden xl:block w-24 max-w-sm xl:w-1/5 h-screen pt-4">
        <FeedRightSideBar />
      </div>
      <div className="fixed bottom-0 left-0 flex justify-between md:hidden w-full h-14 p-2 px-4 items-center bg-void">
        <Link to="/feed">
          <HomeRoundedIcon
            className="text-white cursor-pointer hover:text-fuschia"
            style={{ fontSize: "35px" }}
          />
        </Link>
        <Link to="/explore">
          <SearchIcon
            className="text-white cursor-pointer hover:text-fuschia"
            style={{ fontSize: "35px" }}
          />
        </Link>
        <Link to="/create">
          <CreateIcon
            className="text-white cursor-pointer hover:text-fuschia"
            style={{ fontSize: "35px" }}
          />
        </Link>
        <Link to="/profile">
          <PersonIcon
            className="text-white cursor-pointer hover:text-fuschia"
            style={{ fontSize: "35px" }}
          />
        </Link>
        <LogoutIcon
          className="text-white cursor-pointer hover:text-fuschia"
          style={{ fontSize: "35px" }}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
