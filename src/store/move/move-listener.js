const {MOVE_LEFT, MOVE_RIGHT, MOVE_UP, MOVE_DOWN, NO_ACTION} = require('../../../constants/game-actions');
const {INPUT_MOVE_UP, INPUT_MOVE_DOWN, INPUT_MOVE_LEFT, INPUT_MOVE_RIGHT} = require('../../../keyboard-input');
const arrowListener = (key) => {
	if (key.leftArrow) {
		return MOVE_LEFT;
	}
	if (key.rightArrow) {
		return MOVE_RIGHT;
	}
	if (key.upArrow) {
		return MOVE_UP;
	}
	
	if (key.downArrow) {
		return MOVE_DOWN;
	}
	
	return NO_ACTION;
}

const inputListener = (input) => {
		switch (input) {
			case INPUT_MOVE_UP: return MOVE_UP;
			case INPUT_MOVE_DOWN: return MOVE_DOWN;
			case INPUT_MOVE_LEFT: return MOVE_LEFT;
			case INPUT_MOVE_RIGHT: return MOVE_RIGHT;
			default: return NO_ACTION;
		}
};

module.exports = {
	arrowListener,
	inputListener
};