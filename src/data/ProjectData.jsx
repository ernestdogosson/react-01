import travleAgency from "../assets/travelAgency.png";
import wordGame from "../assets/word-game.png";
import movieLibrary from "../assets/movieLibrary.png";

const ProjectsData = [
  {
    name: "Travel Agency Website",
    githubRepo: "https://github.com/ernestdogosson/assignment-15",
    techStack: ["HTML", "Bootstrap", "CSS"],
    projectDescription:
      "Responsive travel agency showcasing destinations and packages.",

    projectInfo:
      "Explore destinations, view packages, and navigate About, Services, Gallery, and Contact sections.",

    skillsLearned:
      "Multi-section layouts, Bootstrap grid utilities, and responsive design techniques.",

    challenges:
      "Layout alignment, optimized spacing and responsiveness across all pages.",
    bgImage: travleAgency,
  },

  {
    name: "Word Typing Game",
    githubRepo: "https://github.com/ernestdogosson/js-07",
    techStack: ["HTML", "CSS", "JavaScript"],
    projectDescription: "Fast-paced typing game with timer challenges.",

    projectInfo:
      "Type randomly generated words before time runs out. Correct answers add bonus time and increase score.",

    skillsLearned:
      "DOM manipulation, event handling, timers, random generation, and game loop logic.",

    challenges:
      "Timer resets, score tracking, input detection, and UI state synchronization.",
    bgImage: wordGame,
  },

  {
    name: "Movie Library App",
    githubRepo: "https://github.com/ernestdogosson/js-06",
    techStack: ["JavaScript", "HTML", "CSS"],
    projectDescription: "Track and organize your movie collection.",

    projectInfo:
      "Browse, add, delete movies, and mark them as watched or unwatched with dynamic UI updates.",

    skillsLearned:
      "Dynamic lists with JavaScript, user interactions, and DOM updates without frameworks.",

    challenges:
      "Dynamic rendering, state management with arrays/objects, and watch status toggling.",
    bgImage: movieLibrary,
  },
];

export default ProjectsData;
