import React from "react";
export default function Create() {
  return (
    <div className="h-full w-full p-5 flex flex-col items-center">
      <h1 className="text-3xl text-white">Create Story</h1>
      <div className="sm:col-span-4">
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
              className="focus:outline-none block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="StoryName"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
