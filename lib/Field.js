const {
	HAT,
    HOLE,
    FIELD_CHARACTER,
    PATH_CHARACTER,
}	= require('../constants/game_cells.js');

class Field {
	constructor(mazeGenerator) {
		this.mazeGenerator = new mazeGenerator();
	}
	
	generateField() {
		
	}
	
}

module.exports = Field;