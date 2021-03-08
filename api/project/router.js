// build your `/api/projects` router here
const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/projects", async (req, res, next) =>{
    try {
        const project = await db.getProjects()
        res.json(project)
    }catch(error){
        next(error)
    }
})


router.post("/projects", async (req,res,next) => {
try {
    const project = await db.insertProjects(req.body)
    res.status(201).json(project)
}catch(error){
    next(error)
}
})
module.exports = router;