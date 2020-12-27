const {
	HAT,
    HOLE,
    FIELD_CHARACTER,
    PATH_CHARACTER,
}	= require('../src/constants/game-cells.js');

class Filler {
	constructor(options = {}) {
		this.destinationCharacter = options.destinationCharacter || HAT;
		this.wallCharacter = options.wallCharacter || HOLE;
		this.fieldCharacter = options.fieldCharacter || FIELD_CHARACTER;
		this.pathCharacter = options.pathCharacter || PATH_CHARACTER;
	}
	getCellCharacter(cell, x, y, fieldPosition, destionationPosition) {
		if (fieldPosition.x == x && fieldPosition.y == y) {
			return this.fieldCharacter;
		} else if (destionationPosition.x == x && destionationPosition.y == y) {
			return this.destinationCharacter;
		} else if (cell) {
			return this.wallCharacter;
		} else {
			return this.pathCharacter;
		}
	}
	/**
		I don't need
	fill(fieldPosition, destionationPosition, grid) {
		for (let i = 0; i < grid.length; i < i++) {
			for (let j = 0; j < grid[i].length; j++) {
				grid[i][j] = this.getCellCharacter(grid[i][j], x, y, fieldPosition, destionationPosition);
			}
		}
	}
	*/
}


module.exports = Filler;