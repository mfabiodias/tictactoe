const knex  = require('../database');
const table = "game_data";

const getGameData    = () => knex.select().table(table);
const resetGameData  = async () => {
    await knex(table).update({score: 0})
    return await getGameData();
};
const updateGameData = async (name) => {
    let user  = await knex(table).where({name}).first();
    let score = parseInt(user.score) + 1;

    await knex(table).where({name}).update({score});
    return await getGameData();
}

module.exports = { getGameData, updateGameData, resetGameData }



