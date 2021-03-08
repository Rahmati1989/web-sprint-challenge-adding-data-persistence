// build your `Project` model here
const db = require("../../data/dbConfig")

function getProjects() {
    return db("projects")
}

function insertProjects(projects) {
 return db('projects').insert(projects).then((ids) => {
      return getProjects();
    });
  }


module.exports = {
    getProjects,
    insertProjects,
   
}