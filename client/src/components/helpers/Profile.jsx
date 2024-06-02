import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import RevealY from "../utils/RevealY";
import { Button, Dialog } from "@material-tailwind/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import openedEyeImage from "../../images/Open-Eye.png";
import closedEyeImage from "../../images/Closed-Eye.png";
import DisplayPost from "./DisplayPost";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
];

export default function Profile(props) {
  const userData = useOutletContext();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [isFollowing, setIsFollowing] = useState(true);
  const bannerInput = useRef();
  const bannerImage = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleOpen = () => setOpen(!open);
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const toggleReEnterPasswordVisibility = () => {
    setReEnterPasswordVisible((prevState) => !prevState);
  };
  const handleFollow = async () => {
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    setIsFollowing(false);
  };

  const handleBannerImageChange = () => {
    const file = bannerInput.current.files[0];
    if (file) {
      console.log("File added");
      const reader = new FileReader();
      reader.onloadend = () => {
        bannerImage.current.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    if (password === rePassword) {
      const file = bannerInput.current.files[0];
      const updateProfileData = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        file: file,
        userID: localStorage.getItem("userID"),
      };
      axios
      .post("https://storyforge.onrender.com/editProfile", updateProfileData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if(response.status===200){
          alert("Profile updated successfully");
        }
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
    }
  };

  if (!userData) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div
      className="text-white h-full w-full p-5 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <Avatar src={userData.avatarSrc} sx={{ width: 100, height: 100 }} />
        <div className="text-white font-montserrat text-2xl">
          {userData.firstName} {userData.lastName}
        </div>
        <div className="text-gray-400 font-montserrat text-lg">
          @{userData.userName}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-2">
        <div className="flex flex-row gap-5 lg:gap-10">
          <div className="flex gap-2 lg:text-xl font-manrope">
            12
            <span>Posts</span>
          </div>
          <div className="flex gap-2 lg:text-xl font-manrope">
            16
            <span>Followers</span>
          </div>
          <div className="flex gap-2 lg:text-xl font-manrope">
            16
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        {!isCurrentUser ? (
          isFollowing ? (
            <Button
              className="rounded-full mt-3"
              color="blue-gray"
              onClick={handleUnfollow}
            >
              Following
            </Button>
          ) : (
            <Button
              className="rounded-full mt-3"
              color="blue"
              onClick={handleFollow}
            >
              Follow
            </Button>
          )
        ) : (
          <Button
            onClick={handleOpen}
            className="rounded-full mt-3"
            color="blue-gray"
          >
            Edit Profile
          </Button>
        )}
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="bg-[#0e0816] text-white max-h-[80%] rounded-lg"
        >
          <div className="flex flex-col p-2 gap-3">
            <div className="relative flex justify-center items-center">
              <img
                src={userData.avatarSrc}
                className="bg-stark object-cover brightness-50"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                ref={bannerImage}
              />
              <input
                type="file"
                className="hidden"
                id="banner"
                accept="image/*"
                ref={bannerInput}
                onChange={handleBannerImageChange}
              />
              <label
                htmlFor="banner"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              >
                <AddAPhotoIcon />
              </label>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="First Name"
                style={{
                  border: "none",
                  borderBottom: "0.5px solid lightgray",
                  outline: "none !important",
                }}
                className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Last Name"
                style={{
                  border: "none",
                  borderBottom: "0.5px solid lightgray",
                  outline: "none !important",
                }}
                className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                style={{
                  border: "none",
                  borderBottom: "0.5px solid lightgray",
                  outline: "none !important",
                }}
                className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <div className="mb-4 relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  style={{
                    border: "none",
                    borderBottom: "0.5px solid lightgray",
                  }}
                  className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={passwordVisible ? openedEyeImage : closedEyeImage}
                    alt={passwordVisible ? "Hide password" : "Show password"}
                    className="h-5 w-5 text-gray-400"
                  />
                </button>
              </div>
              <div className="mb-4 relative">
                <input
                  type={reEnterPasswordVisible ? "text" : "password"}
                  id="re-enter-password"
                  name="re-enter-password"
                  placeholder="Re-Enter Password"
                  style={{
                    border: "none",
                    borderBottom: "0.5px solid lightgray",
                  }}
                  className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                  onClick={toggleReEnterPasswordVisibility}
                >
                  <img
                    src={
                      reEnterPasswordVisible ? openedEyeImage : closedEyeImage
                    }
                    alt={
                      reEnterPasswordVisible ? "Hide password" : "Show password"
                    }
                    className="h-5 w-5 text-gray-400"
                  />
                </button>
              </div>
            </div>
            <Button
              color="blue"
              onClick={() => {
                handleOpen();
                handleUpdateProfile();
              }}
            >
              <span>Confirm</span>
            </Button>
          </div>
        </Dialog>
      </div>
      <RevealY>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images.map((src, index) => (
            <div key={index}>
              <DisplayPost image={src} />
            </div>
          ))}
        </div>
      </RevealY>
    </div>
  );
}
