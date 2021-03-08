exports.seed = async function(knex) {
	await knex("resources").insert([   
    { resource_name: "Web Developer", resource_description: "Web Developer will develop the website" },
    { resource_name: "Web a Developer", resource_description: "Web a Devloper team will develop website" },
    { resource_name: "Database Devloper", resource_description: "Database Devloper will create the database" },
    { resource_name: "Database Officer", resource_description: "Will manage backend" },
    { resource_name: "software license", resource_description: "This is needed to create the web page" },
  ])
}
