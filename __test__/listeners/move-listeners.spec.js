const {NO_ACTION} = require('../../src/constants/game-move-actions');
const {
	moveUp,
	moveDown,
	moveLeft,
	moveRight
} = require('../../src/actions/move');
const inputs = require('../../src/constants/keyboard-input');
const {arrowListener, inputListener} = require('../../src/listeners/move-keyboard')
const moveListener = require('../../src/listeners/move')

describe('Test move listeners', () => {
	test('Test arrow listener', () => {
		expect(arrowListener({upArrow: true})).toStrictEqual(moveUp());
		expect(arrowListener({downArrow: true})).toStrictEqual(moveDown());
		expect(arrowListener({leftArrow: true})).toStrictEqual(moveLeft());
		expect(arrowListener({rightArrow: true})).toStrictEqual(moveRight());
		expect(arrowListener({})).toBe(NO_ACTION);
	});
	
	
	test('Test keyboard listener', () => {
		expect(inputListener(inputs.INPUT_MOVE_UP)).toStrictEqual(moveUp());
		expect(inputListener(inputs.INPUT_MOVE_DOWN)).toStrictEqual(moveDown());
		expect(inputListener(inputs.INPUT_MOVE_LEFT)).toStrictEqual(moveLeft());
		expect(inputListener(inputs.INPUT_MOVE_RIGHT)).toStrictEqual(moveRight());
		expect(inputListener('')).toBe(NO_ACTION);
	});
	
	test('Test keyboard listener upper case', () => {
		expect(inputListener(inputs.INPUT_MOVE_UP.toUpperCase())).toStrictEqual(moveUp());
		expect(inputListener(inputs.INPUT_MOVE_DOWN.toUpperCase())).toStrictEqual(moveDown());
		expect(inputListener(inputs.INPUT_MOVE_LEFT.toUpperCase())).toStrictEqual(moveLeft());
		expect(inputListener(inputs.INPUT_MOVE_RIGHT.toUpperCase())).toStrictEqual(moveRight());
	});
	
	describe('Test listener', () => {
		const dispatcher = jest.fn().mockImplementation(action => {
				if (action === NO_ACTION) {
					return false;
				}
				return action;
			});
		
		afterEach(() => {
			dispatcher.mockClear();
		});
		test('always listen arrows in first place', () => {
			const data = {
					'key': {
							upArrow: true
						}, 
					'input': inputs.INPUT_MOVE_DOWN, 
					'result': moveUp()
			};
			const listener = jest.fn(func => func(data['input'], data['key']));
			moveListener(listener, dispatcher);
			expect(listener.mock.calls.length).toBe(1);
			expect(dispatcher.mock.calls.length).toBe(1);
			expect(dispatcher.mock.calls[0][0]).toStrictEqual(data['result']);
			expect(dispatcher.mock.results[0].value).toStrictEqual(data['result']);
		});
		
		
		test('always listen keyboard in second place', () => {
			const data = {
					'key': {}, 
					'input': inputs.INPUT_MOVE_DOWN, 
					'result': moveDown()
			};
			const listener = jest.fn(func => func(data['input'], data['key']));
			moveListener(listener, dispatcher);
			expect(listener.mock.calls.length).toBe(1);
			expect(dispatcher.mock.calls.length).toBe(1);
			expect(dispatcher.mock.calls[0][0]).toStrictEqual(data['result']);
			expect(dispatcher.mock.results[0].value).toStrictEqual(data['result']);
		});
		
		test('doesn not do anything', () => {
			const data = {
					'key': {}, 
					'input': ''
			};
			const listener = jest.fn(func => func(data['input'], data['key']));
			moveListener(listener, dispatcher);
			expect(listener.mock.calls.length).toBe(1);
			expect(dispatcher.mock.calls.length).toBe(0);
		});
	});
});
