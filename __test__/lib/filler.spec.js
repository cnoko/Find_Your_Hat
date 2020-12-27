const Filler = require('../../lib/field-filler');
const {
	HAT,
    HOLE,
    FIELD_CHARACTER,
    PATH_CHARACTER,
}	= require('../../src/constants/game-cells.js');
describe('Test filler', () => {
	const arr = [];
	beforeEach(() => {
		arr.splice(0, arr.length);
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++)
				arr.push(1)
	});
	test('initial options', () => {
		const filler = new Filler();
		const filler2 = new Filler({
			destinationCharacter: 'a',
			wallCharacter: 'b',
			fieldCharacter: 'c',
			pathCharacter: 'd'
		});
		expect(filler.destinationCharacter).toStrictEqual(HAT);
		expect(filler.wallCharacter).toStrictEqual(HOLE);
		expect(filler.fieldCharacter).toStrictEqual(FIELD_CHARACTER);
		expect(filler.pathCharacter).toStrictEqual(PATH_CHARACTER);
		
		expect(filler2.destinationCharacter).toStrictEqual('a');
		expect(filler2.wallCharacter).toStrictEqual('b');
		expect(filler2.fieldCharacter).toStrictEqual('c');
		expect(filler2.pathCharacter).toStrictEqual('d');
	});
	
	test('', () => {
		const filler = new Filler();
		expect(filler.getCellCharacter(1, 1, 1, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(HOLE);
		expect(filler.getCellCharacter(0, 1, 1, {x: 1, y: 1}, {x: 2, y: 2})).toStrictEqual(FIELD_CHARACTER);
		expect(filler.getCellCharacter(0, 2, 2, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(HAT);
		expect(filler.getCellCharacter(0, 1, 1, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(PATH_CHARACTER);
	});
	
	test('', () => {
		const filler = new Filler();
		
		expect(filler.getCellCharacter(1, 1, 1, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(HOLE);
		expect(filler.getCellCharacter(0, 1, 1, {x: 1, y: 1}, {x: 2, y: 2})).toStrictEqual(FIELD_CHARACTER);
		expect(filler.getCellCharacter(0, 2, 2, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(HAT);
		expect(filler.getCellCharacter(0, 1, 1, {x: 0, y: 0}, {x: 2, y: 2})).toStrictEqual(PATH_CHARACTER);
	});
});