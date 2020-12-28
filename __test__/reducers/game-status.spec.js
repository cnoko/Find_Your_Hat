const gameStatus = require('../../src/constants/game-status');
const actionTypes = require('../../src/constants/game-status-actions');
const gameStatusReducer = require('../../src/reducers/game-status');
const deepfreeze = require('deepfreeze');
let ret = null;
describe('Test game status reducer', () => {
	test('test undefined action', () => {
		const state = {};
		deepfreeze(state);
		ret = gameStatusReducer(state, {type: undefined});
		expect(ret).toStrictEqual({});
	});
	test('test play action', () => {
		const state = ret;
		deepfreeze(state);

		ret = gameStatusReducer(state, {type: actionTypes.GAME_ACTION_PLAYING});
		expect(ret.gameStatus).toBe(gameStatus.GAME_STATUS_PLAYING);
		expect(ret.previousGameStatus).toBe(undefined);
		
	});
		
	test('test exit action', () => {
		const state = ret;
		deepfreeze(state);
		
		ret = gameStatusReducer(state, {type: actionTypes.GAME_ACTION_EXIT});
		expect(ret.gameStatus).toBe(gameStatus.GAME_STATUS_EXIT);
		expect(ret.previousGameStatus).toBe(gameStatus.GAME_STATUS_PLAYING);
	});

	test('test gameover action', () => {
		const state = ret;
		deepfreeze(state);

		ret = gameStatusReducer(state, {type: actionTypes.GAME_ACTION_OVER});
		expect(ret.gameStatus).toBe(gameStatus.GAME_STATUS_OVER);
		expect(ret.previousGameStatus).toBe(gameStatus.GAME_STATUS_EXIT);
		const state4 = ret;
		deepfreeze(state4);
	});

	test('test win action', () => {
		const state = ret;
		deepfreeze(state);
		
		ret = gameStatusReducer(state, {type: actionTypes.GAME_ACTION_WIN});
		expect(ret.gameStatus).toBe(gameStatus.GAME_STATUS_WIN);
		expect(ret.previousGameStatus).toBe(gameStatus.GAME_STATUS_OVER);
	});

	test('test resume action', () => {	
	///should do undo action swap old with new and vice versa
		const state = ret;
		deepfreeze(state);
		ret = gameStatusReducer(state, {type: actionTypes.GAME_ACTION_RESUME});
		expect(ret.gameStatus).toBe(gameStatus.GAME_STATUS_OVER);
		expect(ret.previousGameStatus).toBe(gameStatus.GAME_STATUS_WIN);
		
	});
	
});
