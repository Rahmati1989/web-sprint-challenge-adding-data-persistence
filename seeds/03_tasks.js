
exports.seed = async function(knex) {
	await knex("tasks").insert([   
    { task_description: "import react app", task_notes: "remember to use npm install", task_completed: true, project_id: 3 },
    { task_description: "add styled-components", task_notes: "you can use different colors, and fonts", task_completed: true, project_id: 4 },
    { task_description: "use knex, and express", task_notes: "this is needed so when creating database", task_completed: true, project_id: 2 },
    { task_description: "use semantic HTML", task_notes: "dont forget to add lang:eng, and not DIVs", task_completed: true, project_id: 1 },
    { task_description: "use flex-box", task_notes: "try to organize model boxes using flex-directions", task_completed: true, project_id: 1 },
    { task_description: "use mobile first design", task_notes: "dont forget to use media queries", task_completed: true, project_id: 1 },
    { task_description: "deploy database using heroku", task_notes: "deploy heroku so the app can be used", task_completed: false, project_id: 2 },
    { task_description: "use state management", task_notes: "use state management so data is well stored in the app", task_completed: true, project_id: 3 },
    { task_description: "you can use CSS or react-strap", task_notes: "if you dont want to use styled-components, just use react-strap", task_completed: true, project_id: 4 },
  ])
}