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
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_PLAYING
			}
			break;
		case actionTypes.GAME_ACTION_RESUME:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: state.previousGameStatus
			};
			break;
		case actionTypes.GAME_ACTION_EXIT:
		//BUG FIXED
			if (state.gameStatus === gameStatus.GAME_STATUS_EXIT && state.previousGameStatus !== state.gameStatus) {
				return state;
			}
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_EXIT,
			};
			break;
		case actionTypes.GAME_ACTION_OVER:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_OVER
			};
			break;
		case actionTypes.GAME_ACTION_WIN:
			return {
				...state,
				previousGameStatus: state.gameStatus,
				gameStatus: gameStatus.GAME_STATUS_WIN
			};
			break;
		default:
			return state;
	}
};

module.exports = gameStatusReducer;


