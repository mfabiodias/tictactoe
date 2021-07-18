const model = require('../model');

const gameData = () => model.getGameData();
const gameReset = () => model.resetGameData();
const gameUpdate = (name) => model.updateGameData(name);

module.exports = { gameData, gameReset, gameUpdate}