const {
	MOVE_ACTION_UP,   
	MOVE_ACTION_DOWN, 
    MOVE_ACTION_LEFT,
    MOVE_ACTION_RIGHT,
	MOVE_ACTION_SETUP,
    NO_ACTION,
} = require('../constants/game-move-actions');

const initialState = {
	x: 0,
	y: 0
};
const moveReducer = function(state = initialState, action) {
	switch (action.type) {
		case MOVE_ACTION_SETUP:
			return {
				...state,
				y: action.payload.y,
				x: action.payload.x
			};
		case MOVE_ACTION_UP:
			return {
				...state,
				y: state.y -1
			};
		case MOVE_ACTION_DOWN:
			return {
				...state,
				y: state.y+1
			};
		case MOVE_ACTION_LEFT:
			return {
				...state,
				x: state.x-1
			};
		case MOVE_ACTION_RIGHT:
			return {
				...state,
				x: state.x+1
			};
		default:
			return state;
	}
}

module.exports = moveReducer;
