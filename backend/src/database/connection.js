const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //acessa o development, pois lá tem mais outros dois lugares que posso acessar

module.exports = connection