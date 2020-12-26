const actionTypes = require('../../src/constants/game-move-actions');
const moveReducer = require('../../src/reducers/move');
const deepfreeze = require('deepfreeze');

describe('Test move reducer', () => {
	test('', () => {
		const state = {x: 1, y: 1};
		deepfreeze(state);
		expect(moveReducer({}, {type: undefined})).toStrictEqual({});
		expect(moveReducer(state, {type: undefined})).toStrictEqual(state);
		expect(moveReducer(state, {type: actionTypes.MOVE_ACTION_UP})).toStrictEqual({y: 0, x: 1});
		expect(moveReducer(state, {type: actionTypes.MOVE_ACTION_DOWN})).toStrictEqual({y: 2, x: 1});
		expect(moveReducer(state, {type: actionTypes.MOVE_ACTION_LEFT})).toStrictEqual({y: 1, x: 0});
		expect(moveReducer(state, {type: actionTypes.MOVE_ACTION_RIGHT})).toStrictEqual({y: 1, x: 2});
		
	});
	
});
