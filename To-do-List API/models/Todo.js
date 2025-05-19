const { Model } = require("objection");
const db = require("../db/knex");

Model.knex(db);

class Todo extends Model {
  static get tableName() {
    return "todos";
  }
}

module.exports = Todo;
