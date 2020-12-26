const {NO_ACTION} = require('../constants/game-move-actions');
const {
	moveUp,
	moveDown,
	moveLeft,
	moveRight
} = require('../actions/move');
const inputs = require('../constants/keyboard-input');
const arrowListener = (key) => {
	if (key.leftArrow) {
		return moveLeft();
	}
	if (key.rightArrow) {
		return moveRight();
	}
	if (key.upArrow) {
		return moveUp();
	}
	
	if (key.downArrow) {
		return moveDown();
	}
	
	return NO_ACTION;
}

const inputListener = (input) => {
		switch (input.toLowerCase()) {
			case inputs.INPUT_MOVE_UP: return moveUp();
			case inputs.INPUT_MOVE_DOWN: return moveDown();
			case inputs.INPUT_MOVE_LEFT: return moveLeft();
			case inputs.INPUT_MOVE_RIGHT: return moveRight();
			default: return NO_ACTION;
		}
};

module.exports = {
	arrowListener,
	inputListener
};