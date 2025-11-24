function ProjectPopup({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl w-full max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex">
          <div className=" w-1/2 relative overflow-hidden border-r border-r-gray-50-100">
            <img
              src={project.bgImage}
              alt={project.name}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="p-8 w-1/2 relative">
            <div className="mb-2">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                About This Project
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.details.longDescription}
              </p>
            </div>

            {project.details.features && (
              <div className="mb-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.details.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.details.designNotes && (
              <div className="mb-2">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Design Notes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.details.designNotes}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* GitHub Link */}
            {project.githubRepo && (
              <div className="pt-6 flex">
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 w-1/2 text-center py-3 rounded text-white mx-auto text-sm hover:from-green-600 hover:to-green-700 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  View on GitHub
                </a>
              </div>
            )}

            <button
              className="close-btn absolute top-4 right-8 border w-9 h-9 rounded text-gray-500 hover:shadow-md hover:bg-gray-50 transition"
              onClick={onClose}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;
