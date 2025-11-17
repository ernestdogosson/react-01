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
        <Project
          name={ProjectsData[0].name}
          description={ProjectsData[0].projectDescription}
          info={ProjectsData[0].projectInfo}
          challenges={ProjectsData[0].challenges}
          skillsLearned={ProjectsData[0].skillsLearned}
          githubRepo={ProjectsData[0].githubRepo}
          bgImage={ProjectsData[0].bgImage}
          techStack={ProjectsData[0].techStack}
        />

        <Project
          name={ProjectsData[1].name}
          description={ProjectsData[1].projectDescription}
          info={ProjectsData[1].projectInfo}
          challenges={ProjectsData[1].challenges}
          skillsLearned={ProjectsData[1].skillsLearned}
          githubRepo={ProjectsData[1].githubRepo}
          bgImage={ProjectsData[1].bgImage}
          techStack={ProjectsData[1].techStack}
        />

        <Project
          name={ProjectsData[2].name}
          description={ProjectsData[2].projectDescription}
          info={ProjectsData[2].projectInfo}
          challenges={ProjectsData[2].challenges}
          skillsLearned={ProjectsData[2].skillsLearned}
          githubRepo={ProjectsData[2].githubRepo}
          bgImage={ProjectsData[2].bgImage}
          techStack={ProjectsData[2].techStack}
          bgSize="contain"
          bgPosition="center"
        />
      </div>
    </div>
  );
}

export default ProjectSection;
