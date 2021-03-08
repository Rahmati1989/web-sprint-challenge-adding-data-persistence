
exports.seed = async function(knex) {
await knex("projects").insert([
  {project_name: "Make Website", project_description: "Website for County", project_completed: true},
  {project_name: "Build Website", project_description: "Portfolio for myself", project_completed: true},
  {project_name: "Make Database", project_description: "Database for County", project_completed: false},
  {project_name: "Make a Database", project_description: "Database for myself", project_completed: true}
])
}