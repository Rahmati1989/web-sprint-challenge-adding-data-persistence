// build your `Resource` model here
const db = require("../../data/dbConfig")

function getResources() {
    return db('resources')
}

// function getResourcesById(resource_id) {
//     return db("resources")
//     .where({ resource_id })
//     .first();
// }

function insertResources(resources) {
   return db('resources').insert(resources).then((ids) => {
      return getResources();
    });
  }

  module.exports = {
    getResources,
    insertResources,
  }