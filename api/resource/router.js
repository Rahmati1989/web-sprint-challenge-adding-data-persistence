// build your `/api/resources` router here

// build your `/api/projects` router here
const express = require("express")
const db = require("./model")

const router = express.Router()

router.get("/resources", async (req, res, next) =>{
    try {
        const resource = await db.getResources()
        res.json(resource)
    }catch(error){
        next(error)
    }
})


router.post("/resources", async (req,res,next) => {
try {
    const resource = await db.insertResources(req.boy)
    res.status(201).json(resource)
}catch(error){
    next(error)
}
})