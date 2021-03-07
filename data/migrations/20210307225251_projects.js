exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
		table.increments("project_id")
        table.text("project_name").notNull().unique()
        table.text("project_description")
        table.boolean("project_completed").notNull().defaultTo(false)
    })
    
    await knex.schema.createTable("resources", (table) => {
		table.increments("resource_id")
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
    })
    
    await knex.schema.createTable("tasks", (table) => {
        table.increments("task_id")
        table.text("task_description").notNull().unique()
        table.text("task_notes")
        table.boolean("task_completed").notNull().defaultTo(false)
        table
            .integer("project_id")
            .references("project_id")
            .inTable("projects")
            // .onDelete("SET NULL")
            // .onUpdate("CASCADE")
    })
    
    await knex.schema.createTable("project_resource", (table) => {
        table
            .integer("project_id")
            .references("project_id")
            .inTable("projects")
            // .onDelete("CASCADE")
            // .onUpdate("CASCADE")
            .notNull()
        table
            .integer("resource_id")
            .references("resource_id")
            .inTable("resources")
            // .onDelete("CASCADE")
            // .onUpdate("CASCADE")
            .notNull()
            table.primary(["project_id", "resource_id"])
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resource")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};