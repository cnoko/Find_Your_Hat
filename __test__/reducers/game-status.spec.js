const gameStatus = require('../../src/constants/game-status');
const actionTypes = require('../../src/constants/game-status-actions');
const gameStatusReducer = require('../../src/reducers/game-status');
const deepfreeze = require('deepfreeze');
describe('Test game status reducer', () => {
	test('', () => {
		const state = {};
		
		deepfreeze(state);
		expect(gameStatusReducer(state, {type: undefined})).toStrictEqual({});
		expect(gameStatusReducer(state, {type: actionTypes.GAME_ACTION_PLAYING}).gameStatus).toBe(gameStatus.GAME_STATUS_PLAYING);
	expect(gameStatusReducer(state, {type: actionTypes.GAME_ACTION_EXIT}).gameStatus).toBe(gameStatus.GAME_STATUS_EXIT);
		expect(gameStatusReducer(state, {type: actionTypes.GAME_ACTION_WIN}).gameStatus).toBe(gameStatus.GAME_STATUS_WIN);
	expect(gameStatusReducer(state, {type: actionTypes.GAME_ACTION_OVER}).gameStatus).toBe(gameStatus.GAME_STATUS_OVER);
		
	});
	
});
