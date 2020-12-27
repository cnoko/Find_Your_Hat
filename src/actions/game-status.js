const actionTypes = require('../constants/game-status-actions');
const exit = () => ({type: actionTypes.GAME_ACTION_EXIT});
const playGame = () => ({type: actionTypes.GAME_ACTION_PLAYING});
const gameOver = () => ({type: actionTypes.GAME_ACTION_OVER});
const gameWin = () => ({type: actionTypes.GAME_ACTION_WIN});
const gameResume = () => ({type: actionTypes.GAME_ACTION_RESUME});

module.exports = {
	exit,
	playGame,
	gameResume,
	gameOver,
	gameover: gameOver,
	gameWin
};

