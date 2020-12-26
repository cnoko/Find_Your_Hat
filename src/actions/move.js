const actionTypes = require('../constants/game-move-actions');
const moveUp = () => ({type: actionTypes.MOVE_ACTION_UP});
const moveDown = () => ({type: actionTypes.MOVE_ACTION_DOWN});
const moveLeft = () => ({type: actionTypes.MOVE_ACTION_LEFT});
const moveRight = () => ({type: actionTypes.MOVE_ACTION_RIGHT});

module.exports = {
	moveUp,
	moveDown,
	moveLeft,
	moveRight
};

