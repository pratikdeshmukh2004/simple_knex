// Mysql Server With Knex...
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "jayHindDosto",
    database: "simpleknex",
  },
});

// Create table
function create_table() {
  knex.schema.hasTable("users").then(function (exists) {
    if (!exists) {
      console.log({ Success: `users table created successfully.` });
      return knex.schema.createTable("users", function (t) {
        t.increments("id").primary();
        t.string("first_name", 100);
        t.string("last_name", 100);
      });
    } else {
      console.log({ Sorry: `users table already exist!` });
    }
  });
}

// Drop table
function drop_table() {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `users table deleted successfully.` });
      return knex.schema.dropTable("users");
    } else {
      console.log({ Sorry: `users table not found.` });
    }
  });
}

// Insert data into the users table
function insert_data() {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `data inserted into users table.` });
      return knex("users").insert({
        first_name: "Pratik",
        last_name: "Deshmukh",
      });
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}

// Update users table by id
function update_data(id) {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `users data updated successfully.` });
      return knex("users")
        .update({ first_name: "Anand", last_name: "Patel" })
        .where("id", id);
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}

// Delete users data by id
function delete_by_id(id) {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `data deleted by id:${id} successfully.` });
      return knex("users").where("id", id).del();
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}

// Set an unique name of users column
function unique_name() {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `alter table successfully...` });
      return knex.schema.alterTable("users", function (t) {
        t.unique("first_name");
      });
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}

// Disable an unique functionality of users column
function drop_unique_name() {
  knex.schema.hasTable("users").then(function (exists) {
    if (exists) {
      console.log({ Success: `alter unique_name successfully...` });
      return knex.schema.alterTable("users", function (t) {
        t.dropUnique("first_name");
      });
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
}

// For using the upper functionality you have to call these functions

create_table();
// drop_table()
// insert_data()
// update_data(1)
// delete_by_id(1)
// unique_name()
// drop_unique_name()
