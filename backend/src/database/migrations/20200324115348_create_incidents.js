
exports.up = function(knex) {  
    return knex.schema.createTable('incidents', function (table){
        table.increments();//.primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable().references('id').inTable('ongs');

        //cria chave estrangeira
        //table.foreign('ong_id').references('id').intable('ongs');
        //table.string('permission_id').notNullable().references('id').inTable('meraki.permissions');

    })
};

exports.down = function(knex) {
    return knex.schema.droptable('incidents');
};
