const gameStatus = require('../constants/game-status');
const actionTypes = require('../constants/game-status-actions');
const initialState = {
	gameStatus: gameStatus.GAME_STATUS_PLAYING,
	previousGameStatus: gameStatus.GAME_STATUS_PLAYING
}
const gameStatusReducer = (state = initialState, action) => {

	switch(action.type) {
		case actionTypes.GAME_ACTION_PLAYING:
			return {
				...state,
				previousGameStatus: gameStatus.GAME_STATUS_PLAYING,
				gameStatus: gameStatus.GAME_STATUS_PLAYING
			}
		case actionTypes.GAME_ACTION_RESUME:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: state.previousGameStatus,
			}
		case actionTypes.GAME_ACTION_EXIT: 
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_EXIT,
			};
		case actionTypes.GAME_ACTION_OVER:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_OVER
			};
		case actionTypes.GAME_ACTION_WIN:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_WIN
			};
		default:
			return state;
	}
};

module.exports = gameStatusReducer;


