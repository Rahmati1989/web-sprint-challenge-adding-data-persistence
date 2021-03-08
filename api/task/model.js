// build your `Task` model here

const db = require("../../data/dbConfig")

function getTasks() {
    return db('tasks')
}


function insertTasks(tasks) {
 return db('tasks').insert(tasks).then((ids) => {
      return getTasks();
    });
  }

  module.exports = {
    getTasks,
    insertTasks
  }