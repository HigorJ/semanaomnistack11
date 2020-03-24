exports.up = function(knex) {
    //Criação da tabela
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //2 é o size, tamanho do texto
    })
};  

exports.down = function(knex) {
    //Se der algum erro, o que é pra desfazer
    return knex.schema.dropTable('ongs');
};
