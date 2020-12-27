const Maze = require('../../lib/maze-generator');
}const {
	HAT,
    HOLE,
    FIELD_CHARACTER,
    PATH_CHARACTER,
}	= require('../src/constants/game-cells.js');
describe('Test filler', () => {
	const arr;
	beforeEach(() => {
		
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
		
		expect(filler.destinationCharacter).toStrictEqual('a');
		expect(filler.wallCharacter).toStrictEqual('b');
		expect(filler.fieldCharacter).toStrictEqual('c');
		expect(filler.pathCharacter).toStrictEqual('d');
	});
	
	test('hat', () => {
		const filler = new Filler();
		filler
	});
});