const ProjectCard = ({ project, setDisplay}) => {
  const closeModal = () => {
    setDisplay(null);
    document.body.classList.remove('overflow-hidden'); // Enable scrolling on the background content
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50  bg-black bg-opacity-50">
        <div className="bg-[#282c34] text-white rounded shadow-lg p-4 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{project.Project.Title}</h2>
            <button
              className="text-[#61dafb] hover:text-[#61dafb] focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
            {/* <h2 className="text-lg font-semibold mb-2">{project.Project.Title}</h2> */}
            <p><strong className="text-left text-[#61dafb]">Technologies:</strong></p>
            <p className="mb-2"> {project.Project.Technologies}</p>
            <p><strong className="text-[#61dafb]">Frontend Skills:</strong></p>
            <p className="mb-2"> {project.Technical_Skillset.Frontend}</p>
            <p><strong className="text-[#61dafb]">Backend Skills:</strong></p>
            <p className="mb-2"> {project.Technical_Skillset.Backend}</p>
            <p><strong className="text-[#61dafb]">Databases:</strong></p>
            <p className="mb-2"> {project.Technical_Skillset.Databases ? project.Technical_Skillset.Databases : "-"}</p>
            <p><strong className="text-[#61dafb]">Infrastructure:</strong></p>
            <p className="mb-2"> {project.Technical_Skillset.Infrastructure ? project.Technical_Skillset.Infrastructure : "-"}</p>
            <p><strong className="text-[#61dafb]">Availability:</strong> </p>
            <p className="mb-2"> {project.Other_Information.Availability}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard