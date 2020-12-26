const actionTypes = require('../../src/constants/game-status-actions');
const st = require('../../src/constants/game-status');
const {
	exit,
	playing,
	gameOver,
	gameWin
} = require('../../src/actions/game-status');

describe('Test game status actions', () => {
	test('game action exiting', () => {
		expect(exit().type).toBe(actionTypes.GAME_ACTION_EXIT);
	});
	test('game action wining', () => {
		expect(gameWin().type).toBe(actionTypes.GAME_ACTION_WIN);
	});
	test('game action game over', () => {
		expect(gameOver().type).toBe(actionTypes.GAME_ACTION_OVER);
	});
	test('game action playing', () => {
		expect(playing().type).toBe(actionTypes.GAME_ACTION_PLAYING);
	});
});
