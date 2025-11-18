import { useState } from "react";
import ProjectSection from "../components/ProjectSection";

function ProjectsToggleBtn() {
  const [visible, setVisible] = useState(false);
  const changeVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="relative">
      <button
        onClick={changeVisibility}
        className={`${visible ? "fixed top-20 right-8 z-50" : ""} px-4 py-2 bg-blue-500 text-white font-bold text-sm tracking-wide rounded hover:bg-blue-600 transition-colors`}
      >
        {visible ? "Hide" : "Preview"}
      </button>
      {visible && <ProjectSection />}
    </div>
  );
}

export default ProjectsToggleBtn;
