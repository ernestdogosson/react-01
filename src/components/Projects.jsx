function Project({
  name,
  description,
  githubRepo,
  info,
  challenges,
  skillsLearned,
  bgImage,
  techStack,
  bgSize = "cover",
  bgPosition = "center",
}) {
  return (
    <div className="h-[480px] shadow-xl rounded-2xl border border-gray-300 p-6 flex flex-col justify-end hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out cursor-pointer relative group overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-300 group-hover:blur-sm"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: bgSize,
          backgroundPosition: bgPosition,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 opacity-60 group-hover:opacity-95 transition-all duration-300 z-10"></div>

      <div className="z-40 group-hover:absolute group-hover:top-6 group-hover:left-0 group-hover:right-0 transition-all duration-500 ease-out">
        <h2 className="text-2xl font-bold mb-4 text-white text-center drop-shadow-lg">
          {name}
        </h2>
      </div>

      <div className="z-40 leading-6 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[400px] group-hover:opacity-100 text-gray-100 text-sm text-center group-hover:mb-4 group-hover:mt-4 transition-all duration-500 ease-out">
        <div className="mb-3">
          <h3 className="font-bold text-cyan-300 text-xs uppercase tracking-wider mb-1">
            Description
          </h3>
          <p className="leading-relaxed">{description}</p>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-blue-300 text-xs uppercase tracking-wider mb-1">
            About Project
          </h3>
          <p className="leading-relaxed">{info}</p>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-green-300 text-xs uppercase tracking-wider mb-1">
            Challenges
          </h3>
          <p className="leading-relaxed">{challenges}</p>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-purple-300 text-xs uppercase tracking-wider mb-1">
            Skills Learned
          </h3>
          <p className="leading-relaxed">{skillsLearned}</p>
        </div>
        <div className="font-medium">
          <span className="font-bold text-yellow-300">Tech Stack:</span>{" "}
          {techStack ? techStack.join(", ") : "N/A"}
        </div>
      </div>

      <div className="flex gap-4 z-40 justify-center">
        <button
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 rounded-lg text-white hover:from-blue-600 hover:to-blue-700 text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          View Details
        </button>
        <a
          href={githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-2.5 rounded-lg text-white hover:from-green-600 hover:to-green-700 text-sm font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Project;
