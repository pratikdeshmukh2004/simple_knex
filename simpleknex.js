// Mysql Server With Knex...
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'pratik',
        database: 'simpleknex'
    }
});


// Create Table
function create_table() {
    knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            console.log('creating...');
            return knex.schema.createTable('users', function (t) {
                t.increments('id').primary();
                t.string('first_name', 100);
                t.string('last_name', 100);
            });
        }else{
            console.log("already...");
        }
    });
}

function drop_table(){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log("delted...");
            return knex.schema.dropTable('users')
        }
        else{
            console.log("table not found...");
        }
    });
}

function insert_data(){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log("inserted...");
            return knex('users').insert({first_name: 'Pratik', last_name: 'Deshmukh'})
        }
        else{
            console.log("table not found...");
        }
    });
}

function update_data(id){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log("updated...");
            return knex('users').update({first_name: 'Anand', last_name: 'Patel'}).where('id', id)
        }
        else{
            console.log("table not found...");
        }
    });
}


function delete_by_id(id){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log(`data deleted by id:${id} successfully...`);
            return knex('users').where('id', id).del()
        }
        else{
            console.log("table not found...");
        }
    });
}

function unique_name(){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log("alter table successfully...");
            return knex.schema.alterTable('users', function(t) {
                t.unique('first_name')
              })
        }
        else{
            console.log("table not found...");
        }
    });
}


function drop_unique_name(){
    knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            console.log("alter table successfully...");
            return knex.schema.alterTable('users', function(t) {
                t.dropUnique('first_name')
              })
        }
        else{
            console.log("table not found...");
        }
    });
}



// create_table()
// drop_table()
// insert_data()
// update_data(1)
// delete_by_id(1)
// unique_name()
// drop_unique_name()