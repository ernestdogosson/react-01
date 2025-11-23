import Project from "./Projects.jsx";
import ProjectsData from "../data/ProjectData.jsx";

function ProjectSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="mb-16 text-center">
        <h3 className="text-sm text-blue-500">PROJECTS</h3>
        <h2 className="text-4xl font-bold">My Recent Work</h2>
        <h3 className="text-gray-600">A selection of projects I've built</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProjectsData.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            description={project.projectDescription}
            info={project.projectInfo}
            challenges={project.challenges}
            skillsLearned={project.skillsLearned}
            bgImage={project.bgImage}
            bgSize={index === 2 ? "contain" : "cover"}
            techStack={project.techStack}
            githubRepo={project.githubRepo}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
