const gameStatusReducer = require('./reducers/game-status');
const moveReducer = require('./reducers/move');
const {combineReducers} = require('redux');
module.exports = combineReducers({
	gameStatus: gameStatusReducer,
	move: moveReducer
})