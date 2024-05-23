import React, { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import StoryEditor from "./StoryEditor";
export default function Create() {
  const [previewImage, setPreviewImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{scrollbarWidth: "none"}} className="h-full w-full p-5 flex flex-col overflow-y-auto">
      <h1 className="text-2xl text-white text-center">Create Story</h1>
      <div className="flex gap-5 flex-wrap">
        <div className="sm:col-span-4 w-full">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-white"
          >
            Title
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                RGisanEclipse/
              </span>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 max-w-32"
                placeholder="StoryName"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="block text-sm font-medium leading-6 text-gray-200">
            Upload Cover
          </h1>
          <div className="flex w-full items-center">
            <Label
              htmlFor="dropzone-file"
              className="relative flex h-40 w-80 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-100 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 overflow-hidden"
            >
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {!previewImage && (
                <svg
                  className="mb-4 h-8 w-8 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              )}
              <p className="mb-2 text-sm text-gray-300">
                <span className="font-semibold">Click to upload</span>
              </p>
              <FileInput
                id="dropzone-file"
                className="hidden"
                onChange={handleFileChange}
              />
            </Label>
          </div>
        </div>
        <StoryEditor/>
      </div>
    </div>
  );
}
