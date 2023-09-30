const mongoose = require('mongoose')

const SkillsetSchema = mongoose.Schema({
    Frontend: {
        type: [String],
    },
    Backend: {
        type: [String],
    },
    Databases: {
        type: [String]
    } ,
    Infrastructure: {
        type: [String]
    }
})

const ProjectSchema = new mongoose.Schema({})


const Project = mongoose.model('projects', ProjectSchema, 'projects');

module.exports = Project