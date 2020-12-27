const Maze = require('../../lib/maze-generator');
var PF = require('pathfinding');
var Field = require('../../lib/Field');
describe('Testing field', () => {
	const fullGrid = (new Array(10)).fill((new Array(10)).fill(1))
	test('default difficulty should be 100%', () => {
		const field = new Field();
		expect(field.difficulty).toBe(100);
	});
	
	test('default startPosition should be 0,0', () => {
		const field = new Field();
		expect(field.startPosition.x).toBe(0);
		expect(field.startPosition.y).toBe(0);
	});
	
	test('default endPosition should be 0,0', () => {
		const field = new Field();
		expect(field.endPosition.x).toBe(0);
		expect(field.endPosition.y).toBe(0);
	});
	
	test('default dimenssion should be 10', () => {
		const field = new Field();
		expect(field.dimenssion).toBe(10);
	});
	
	
	test('default auto generate start position', () => {
		const field = new Field();
		expect(field.autoStartPosition).toBe(true);
	});
	
	test('default auto generate end position', () => {
		const field = new Field();
		expect(field.autoEndPosition).toBe(true);
	});
	
	
	test('default auto generate end position', () => {
		const field = new Field();
		expect(field.autoEndPosition).toBe(true);
	});
	
	test('throws on difficulty', () => {
		expect(() => {
			const field = new Field();
			field.difficulty = -10;
		}).toThrow();
		
		expect(() => {
			const field = new Field();
			field.difficulty = 200;
		}).toThrow();
	});
	
	
	test('get random position', () => {
		const field = new Field();
		const fn = jest.fn();
		field._findRandomPosition = fn;
		field._setStartPosition();
		field._setEndPosition();
		expect(fn.mock.calls.length).toBe(2);
	});
	
	test('test _wallCounter', () => {
		const dim = fullGrid.length;
		const field = new Field({dimenssion: dim});
		expect(() => {
			field._wallCounter();;
		}).toThrow();
		field.grid = fullGrid;
		const result = field._wallCounter();
		
		expect(result).toBe(dim**2);
	});
	
	test('should generate random position', () => {
		const field = new Field();
		const spy = jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
		const result = field._getRandomPosition();
		expect(result.x).toBe(result.y);
		expect(spy.mock.calls.length).toBeGreaterThan(1);
		spy.mockRestore();
	});
	
	
	test('test _reduceFieldsRandomly', () => {
		const field = new Field({dimenssion: fullGrid.length});
		const spy = jest.spyOn(field, '_getRandomPosition');
		const grid = fullGrid.map(a => a.map(b => 1));
		field.grid = grid;
		expect(field._wallCounter()).toBe(fullGrid.length**2);
		field._reduceFieldsRandomly(50);
		expect(field._wallCounter()).toBe((fullGrid.length**2)/2);
		expect(spy.mock.calls.length).toBeGreaterThan(1);
		spy.mockRestore();
	});
	
	
	test('test newGame', () => {
		const initialState = {
				startPosition: {
					x: 3, 
					y: 2
				}, 
				endPosition: {
					x: 5,
					y: 7
				}, 
				autoStartPosition: false,
				autoEndPosition: false,
				dimenssion: fullGrid.length
			};
		const field = new Field(initialState);
		field.newGame();
		const pfGrid = new PF.Grid(field._grid);
		const finder = new PF.AStarFinder();
		const result = finder.findPath(initialState.startPosition.x, initialState.startPosition.y, initialState.endPosition.x, initialState.endPosition.y, pfGrid);
		expect(field.startPosition).toStrictEqual(initialState.startPosition);
		expect(field.endPosition).toStrictEqual(initialState.endPosition);
		expect(result.length).not.toBe(0);
		

	});
});