import profilepPic from "../assets/profilePic.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100">
      <div
        id="home"
        className="min-h-[80vh] pt-24 px-8 flex justify-center items-center relative"
      >
        <div className="z-10 text-center">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-gray-500">
            <img
              src={profilepPic}
              alt="Profile Picture"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Ernest Dogo</h1>
          <p className="text-2xl text-gray-600 mb-2">FrontEnd Developer</p>
          <p className="text-lg text-gray-500 mb-8">
            Building beautiful digital experiences
          </p>
        </div>
      </div>

      <div className="py-12 bg-white border-y border-gray-300 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-sm text-blue-500 mb-6 ">
            TECHNOLOGIES & TOOLS
          </h3>
          <div className="relative flex overflow-hidden">
            <div className="flex animate-scroll-smooth whitespace-nowrap">
              <span className="text-lg inline-flex items-center gap-3 px-2">
                <span className="text-orange-700 font-medium">HTML</span>
                <span>&bull;</span>
                <span className="text-blue-700 font-medium">CSS</span>
                <span>&bull;</span>
                <span className="text-amber-600 font-medium">JavaScript</span>
                <span>&bull;</span>
                <span className="text-cyan-700 font-medium">React</span>
                <span>&bull;</span>
                <span className="text-teal-700 font-medium">Tailwind</span>
                <span>&bull;</span>
                <span className="text-purple-700 font-medium">Bootstrap</span>
                <span>&bull;</span>
                <span className="text-red-700 font-medium">Git</span>
                <span>&bull;</span>
              </span>
              <span className="text-lg inline-flex items-center gap-3 px-2">
                <span className="text-orange-700 font-medium">HTML</span>
                <span>&bull;</span>
                <span className="text-blue-700 font-medium">CSS</span>
                <span>&bull;</span>
                <span className="text-amber-600 font-medium">JavaScript</span>
                <span>&bull;</span>
                <span className="text-cyan-700 font-medium">React</span>
                <span>&bull;</span>
                <span className="text-teal-700 font-medium">Tailwind</span>
                <span>&bull;</span>
                <span className="text-purple-700 font-medium">Bootstrap</span>
                <span>&bull;</span>
                <span className="text-red-700 font-medium">Git</span>
                <span>&bull;</span>
              </span>
              <span className="text-lg inline-flex items-center gap-3 px-2">
                <span className="text-orange-700 font-medium">HTML</span>
                <span>&bull;</span>
                <span className="text-blue-700 font-medium">CSS</span>
                <span>&bull;</span>
                <span className="text-amber-600 font-medium">JavaScript</span>
                <span>&bull;</span>
                <span className="text-cyan-700 font-medium">React</span>
                <span>&bull;</span>
                <span className="text-teal-700 font-medium">Tailwind</span>
                <span>&bull;</span>
                <span className="text-purple-700 font-medium">Bootstrap</span>
                <span>&bull;</span>
                <span className="text-red-700 font-medium">Git</span>
                <span>&bull;</span>
              </span>
              <span className="text-lg inline-flex items-center gap-3 px-2">
                <span className="text-orange-700 font-medium">HTML</span>
                <span>&bull;</span>
                <span className="text-blue-700 font-medium">CSS</span>
                <span>&bull;</span>
                <span className="text-amber-600 font-medium">JavaScript</span>
                <span>&bull;</span>
                <span className="text-cyan-700 font-medium">React</span>
                <span>&bull;</span>
                <span className="text-teal-700 font-medium">Tailwind</span>
                <span>&bull;</span>
                <span className="text-purple-700 font-medium">Bootstrap</span>
                <span>&bull;</span>
                <span className="text-red-700 font-medium">Git</span>
                <span>&bull;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
