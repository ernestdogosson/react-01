function Home() {
  return (
    <div>
      <div
        id="home"
        className="min-h-screen pt-24 px-8 flex justify-center items-center relative bg-white"
      >
        {/* <div className="w-72 h-72 bg-gradient-to-br from-slate-300 to-yellow-300 rounded-full blur-md absolute top-32 left-7 animate-spin"></div>
          <div className="w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-md absolute bottom-8 right-1/4 animate-pulse"></div>
          <div className="w-32 h-32 bg-gradient-to-br from-teal-300 to-indigo-400 rounded-full blur-md absolute top-24 right-0 animate-bounce"></div>*/}

        <div className="z-10 text-center">
          {/* <div className="w-48 h-48 bg-gray-400 rounded-full shadow-xl mb-8 border-4 border-white hover:scale-110 hover:rotate-6 overflow-hidden transition-all duration-500 mx-auto">
              <img
                src="colorful-sky-clouds-6016x3900-23267.png"
                alt="colorful sky"
                className="w-full h-full"
              />
            </div>*/}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Ernest Dogo</h1>
          <p className="text-2xl text-gray-600 mb-2">FrontEnd Developer</p>
          <p className="text-lg text-gray-500 mb-8">
            Building beautiful digital experiences
          </p>
          <div className="flex justify-center gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:shadow-lg hover:-translate-y-1 transition-all">
              View My Work
            </button>
            <button className="bg-white text-gray-700 border px-4 py-2 rounded hover:scale-105 hover:shadow-lg hover:-translate-y-1 transition-all">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
