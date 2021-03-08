// build your `Project` model here
const db = require("../../data/dbConfig")

function getProjects() {
    return db("projects")
}

// function getProjectsById(project_id){
// return db("projects")
// .select(["projects.*"])
// .where("projects.project_id",project_id)
// .first()
// }

// function getProjectResources(id) {
//     return db("project_resource as pr")
//      .innerJoin("projects as p", "p.project_id", "pr.project_id")
//      .innerJoin("resources as r", "r.resource_id", "pr.resource_id")
//      .where("p.projectid", project_id)
//      .select(["p.project_id", "p.project_name", "r.resource_name" ])
// }

// function getResourcesFromProjects(id) {
//     return db("project_resource as pr")
//      .innerJoin("projects as p", "p.project_id", "pr.project_id")
//      .innerJoin("resources as r", "r.resource_id", "pr.resource_id")
//      .where("r.resource_id", resource_id)
//      .select(["r.resource_id", "r.resource_name", "p.project_name"  ])
// }

function insertProjects(projects) {
    return db('projects').insert(projects).then((ids) => {
      return getProjectsById(ids[0]);
    });
  }

  // function insertResourcesToProjects(resources) {
  //   return db('resources as r')
  //   .innerJoin("projects as t", "t.task_id", "r.project_id")
  //   .insert(resources).then((ids) => {
  //     return getResourcesById(ids[0]);
  //   });
  // }

module.exports = {
    getProjects,
    insertProjects,
   
}