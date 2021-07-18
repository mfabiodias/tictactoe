const knex  = require('../database');
const table = "game_data";

const getGameData    = () => knex.select().table(table);
const resetGameData  = () => knex(table).update({score: 0});
const updateGameData = async (name) => {
    let user  = await knex(table).where({name}).first();
    let score = parseInt(user.score) + 1;

    const update = await knex(table).where({name}).update({score});

    if(update) {
        return score
    } else {
        return user.score;
    }
}

module.exports = { getGameData, updateGameData, resetGameData }



