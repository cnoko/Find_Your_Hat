const actionTypes = require('../../src/constants/game-move-actions');
const {
	moveUp,
	moveDown,
	moveLeft,
	moveRight
} = require('../../src/actions/move');

describe('Test move actions', () => {
	test('Test move up', () => {
		expect(moveUp().type).toBe(actionTypes.MOVE_ACTION_UP);
	});
	test('Test move down', () => {
		expect(moveDown().type).toBe(actionTypes.MOVE_ACTION_DOWN);
	});
	test('Test move left', () => {
		expect(moveLeft().type).toBe(actionTypes.MOVE_ACTION_LEFT);
	});
	test('Test move right', () => {
		expect(moveRight().type).toBe(actionTypes.MOVE_ACTION_RIGHT);
	});
});
