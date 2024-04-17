export default function HomeSectionTwo() {
  return (
    <div>
      <div className="flex flex-col items-center py-16 gap-5 px-5">
        <h1 className="text-5xl font-medium text-center md:text-left">
          How StoryForge Works
        </h1>
        <p className="text-xl text-center lg:text-left">
          Get your story discovered through the power of community and
          technology on StoryForge.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row py-5 px-5 items-center gap-8 lg:justify-center lg:items-start">
        <div className="flex flex-row gap-10 w-96 transition duration-200 ease-in-out transform hover:scale-105">
          <div className="text-8xl font-extrabold">1</div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Create</h2>
            <p className="w-56">
              Share your original story on StoryForge. Find the writing
              resources you need to craft a story only you can tell.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 w-96 transition duration-200 ease-in-out transform hover:scale-105">
          <div className="text-8xl font-extrabold">2</div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Build</h2>
            <p className="w-56">
              Establish a global fan base as your story gains readership and
              momentum. Connect with other like-minded writers through
              storytelling.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-10 w-96 transition duration-200 ease-in-out transform hover:scale-105">
          <div className="text-8xl font-extrabold">3</div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold">Amplify</h2>
            <p className="w-56">
              Gain StoryForge Star status and get your story published or
              adapted into film or television with StoryForge Studios!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
