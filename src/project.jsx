const projects = [
  {
    title: "Billing App",
    description: "A React-based app for managing invoices and payments with Firebase.",
    technologies: ["React", "Firebase", "Material UI"],
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition">
    <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
    <p className="text-gray-600 mt-2">{project.description}</p>
  </div>
);

const Project = () => {
  return (
    <div className=" py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;