const router = require('express').Router()
const {getProjects, getEachProject} = require("../controllers/projects")

router.get("/", getProjects)
router.get("/:projectId", getEachProject)

module.exports = router