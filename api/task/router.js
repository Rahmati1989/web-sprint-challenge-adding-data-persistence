// build your `/api/tasks` router here

// build your `/api/projects` router here
const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/tasks", async (req, res, next) =>{
    try {
        const task = await db.getTasks()
        res.json(task)
    }catch(error){
        next(error)
    }
})


router.post("/tasks", async (req,res,next) => {
try {
    const task = await db.insertTasks(req.body)
    res.status(201).json(task)
}catch(error){
    next(error)
}
})