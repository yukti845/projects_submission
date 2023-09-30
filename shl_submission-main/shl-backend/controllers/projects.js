const Project = require("../model/Project")

const getProjects = async(req, res) => {
    try {

        console.log("api called!!!!!")
        const page = parseInt(req.query.page) || 1
        const pageSize = parseInt(req.query.pageSize) || 10
        const criteria = req.query.criteria || ""
        const value = req.query.value || ""

        const skip = (page - 1) * pageSize


        const projectsFound = await Project.find({}).sort({"Project.Title":1}).collation( { locale: "en_US", numericOrdering: true })
        // .skip(skip).limit(pageSize);

        return res.status(200).json({
            success: true,
            data: projectsFound,
        })
    }
    catch(error) {
        return res.status(400).send(error)
    }
}

const getEachProject = async(req, res) => {
    try{
        const {projectId} = req.params

        const projectFound = await Project.findById(projectId)

        return res.status(200).json({
            success: true,
            data: projectFound
        })
    } 
    catch(error) {
        return res.status(400).send(error)
    }
}

module.exports = {getProjects, getEachProject}