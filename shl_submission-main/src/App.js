import logo from './logo.svg';
import './App.css';
import ProjectCard from './components/ProjectCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectDetails from './components/ProjectDetails';
import searchoutline from './search-outline.svg';

const base_url = "http://localhost:5000/"

function App() {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectSelected, setIsProjectSelected] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([])
  const [display, setDisplay] = useState(null);

  const getProjects = async () => {
    const response = await axios.get(base_url)

    setProjects(response.data.data)
    setFilteredProjects(response.data.data)
    console.log(response, "Res");
  }

  useEffect(() => {
    getProjects()
  }, [])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='flex'>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-white text-black rounded px-4 py-2 mb-6 outline-none"
        />
        <img className='relative right-10 bottom-3' src={searchoutline} width='30px' />
        </div>
      </header>
      {searchQuery && <div> <p> Search results for '{searchQuery}' </p> <br></br></div> }
      <div className='flex flex-wrap items-center justify-center'>
      <br></br>
        {
          projects.length > 0 ? (
            filteredProjects?.filter(item => {
              const { Title, Technologies } = item.Project;
              const { Frontend, Backend, Databases } = item.Technical_Skillset;
              
              // Check if the query matches project title, technologies, or technical skillset
              return (
                Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                Technologies.toLowerCase().includes(searchQuery.toLowerCase()) ||
                Frontend.toLowerCase().includes(searchQuery.toLowerCase()) ||
                Backend.toLowerCase().includes(searchQuery.toLowerCase()) ||
                Databases.toLowerCase().includes(searchQuery.toLowerCase())
              )
              }).map((project) => {
              return (
                <>
                  <div className="bg-[#282c34] text-white rounded shadow-lg p-4 m-4 w-[271px] cursor-pointer" onClick={() => setDisplay(project?._id)}>
                    <h2 className="text-lg font-bold mb-2">{project.Project.Title}</h2>
                    <p><strong className="text-left text-[#61dafb]">Technologies:</strong></p>
                    <p className='mb-1'> {project.Project.Technologies.slice(0,30)}</p>
                    <p><strong className="text-[#61dafb]">Frontend Skills:</strong></p>
                    <p className='mb-1'> {project.Technical_Skillset.Frontend.slice(0,30)}</p>
                    <p><strong className="text-[#61dafb]">Backend Skills:</strong></p>
                    <p className='mb-1'> {project.Technical_Skillset.Backend.slice(0,30)}</p>
                    <p><strong className="text-[#61dafb]">Databases:</strong></p>
                    <p className='mb-1'> {project.Technical_Skillset.Databases ? project.Technical_Skillset.Databases : "-"}</p>
                    <p><strong className="text-[#61dafb]">Infrastructure:</strong></p>
                    <p className='mb-1'> {project.Technical_Skillset.Infrastructre ? project.Technical_Skillset.Infrastructre : "-"}</p>
                  </div>

                  {
                    (display === project?._id) && <ProjectCard project={project} setDisplay={setDisplay} />
                  }
                </>
              )
            })
          ) : (
            <p>Loading projects...</p>
          )
        }
        {isProjectSelected && <ProjectDetails projectId={selectedProject} />}
      </div>
    </div>
  );
}

export default App;
