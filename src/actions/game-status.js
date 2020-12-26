const actionTypes = require('../constants/game-status-actions');
const exit = () => ({type: actionTypes.GAME_ACTION_EXIT});
const playing = () => ({type: actionTypes.GAME_ACTION_PLAYING});
const gameOver = () => ({type: actionTypes.GAME_ACTION_OVER});
const gameWin = () => ({type: actionTypes.GAME_ACTION_WIN});

module.exports = {
	exit,
	playing,
	resume: playing,
	gameOver,
	gameover: gameOver,
	gameWin
};

