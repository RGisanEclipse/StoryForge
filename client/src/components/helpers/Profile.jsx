import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import RevealY from "../utils/RevealY";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

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
  const [open, setOpen] = useState(false);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [isFollowing, setIsFollowing] = useState(true);

  const handleOpen = () => setOpen(!open);

  const handleFollow = async () => {
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    setIsFollowing(false);
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
          <Button onClick={handleOpen} variant="gradient" className="mt-3">
            Open Dialog
          </Button>
        )}
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader>It's a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
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
