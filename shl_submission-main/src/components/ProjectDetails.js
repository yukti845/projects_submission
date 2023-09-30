import axios from "axios"
import { useState, useEffect } from "react";
const base_url="http://localhost:5000/"

const ProjectDetails = (props) => {

    // const response = await axios.get(`${base_url}${props.projectId}`)
    // const project = response.data.data
    // console.log("project deatil component>>>>>", project)
    const [project, setProject] = useState(null);
    const fetchProject = async () => {
        try {
          const response = await axios.get(`${base_url}${props.projectId}`);
          setProject(response.data.data);
        } catch (error) {
          console.error("Error fetching project details:", error);
        }
      };

    
  useEffect(() => {
      fetchProject();
  }, []);

  if (!project) {
    return (
      <div className="bg-[#282c34] text-white rounded shadow-lg p-4 m-4 w-[400px]">
        Loading...
      </div>
    );
  }
  console.log(project)
}

export default ProjectDetails