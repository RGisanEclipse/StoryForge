import React, { useState, useRef } from "react";
import { Avatar } from "@mui/material";
import RevealY from "../utils/RevealY";
import { Button, Dialog } from "@material-tailwind/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import openedEyeImage from "../../images/Open-Eye.png";
import closedEyeImage from "../../images/Closed-Eye.png";
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

export default function Profile() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [reEnterPasswordVisible, setReEnterPasswordVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(true);
  const [isFollowing, setIsFollowing] = useState(true);
  const bannerInput = useRef();
  const bannerImage = useRef(null);
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
    console.log("In handleBannerImageChange");
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
  return (
    <div
      className="text-white h-full w-full p-5 overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex justify-center flex-col items-center gap-2">
        <Avatar src="" sx={{ width: 100, height: 100 }} />
        <div className="text-white font-montserrat text-2xl">
          Rishab Guleria
        </div>
        <div className="text-gray-400 font-montserrat text-lg">
          @RGisanEclipse
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
                src=""
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
                id="name"
                name="name"
                placeholder="Username"
                style={{
                  border: "none",
                  borderBottom: "0.5px solid lightgray",
                  outline: "none !important"
                }}
                className="mt-1 p-2 w-80 bg-transparent focus:outline-none text-gray-200 placeholder:font-manrope font-manrope"
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
            <Button color="blue" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </div>
        </Dialog>
      </div>
      <RevealY>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {images.map((src, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </RevealY>
    </div>
  );
}
