
exports.seed = async function(knex) {
await knex("projects").insert([
  {project_name: "Make Website", project_description: "Website for County", completed: true},
  {project_name: "Build Website", project_description: "Portfolio for myself", completed: true},
  {project_name: "Make Database", project_description: "Database for County", completed: false},
  {project_name: "Make Database", project_description: "Database for myself", completed: true}
])
}