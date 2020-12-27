const {
	HAT,
    HOLE,
    FIELD_CHARACTER,
    PATH_CHARACTER,
}	= require('../src/constants/game-cells.js');
const Maze = require('./maze-generator');
const PF = require('pathfinding');

class Field {
	constructor(opts = {}) {
		this.config(opts);
	}
	
	config(opts) {
		this.dimenssion = opts.dimenssion || 10;
		this.startPosition = opts.startPosition || {x: 0, y: 0};
		this.endPosition = opts.endPosition || {x: 0, y: 0};
		this.difficulty = opts.difficulty || 100;
		this.autoStartPosition = opts.hasOwnProperty('autoStartPosition') ? opts.autoStartPosition : true;
		this.autoEndPosition = opts.hasOwnProperty('autoEndPosition') ? opts.autoStartPosition : true;
	}
	
	get difficulty() {
		return this._difficulty;
	}
	
	set difficulty(percent) {
		if (percent < 0 || percent > 100) {
			throw new Error("You must provide percent between 0 and 100.");
		}
		
		this._difficulty = percent;
	} 
	
	newGame() {
		const generator = new Maze(this.dimenssion);
		let condition;
		do {
			generator.generateMaze();
			this.grid = generator.maze.map(a => a.map(b => (b ? 0 : 1)));
			if (this.difficulty < 100) {
				this._reduceFieldsRandomly(100 - this.difficulty);
			}
			this._setStartPosition();
			this._setEndPosition();
			if (this.startPosition.x === this.endPosition.x 
				&& this.startPosition.y === this.endPosition.y) {
				continue;
			}
		} while(!this._testPath());
		
		
	}
	
	_setStartPosition() {
		if (this.autoStartPosition) {
			this.startPosition = this._findRandomPosition();
			return;
		}
		
		if (this.grid[this.startPosition.x][this.startPosition.y]) {
			this.grid[this.startPosition.x][this.startPosition.y] = 0;
		}

	}
	_testPath() {
		const pathFinderGrid = new PF.Grid(this.grid);
		const finder = new PF.AStarFinder();
		const result = finder.findPath(this.startPosition.x, this.startPosition.y, this.endPosition.x, this.endPosition.y, pathFinderGrid);
		return result.length > 0 ? true : false;
	}
	
	_setEndPosition() {
		if (this.autoEndPosition) {
			this.endPosition = this._findRandomPosition();
			return;
		}
		if (this.grid[this.endPosition.x][this.endPosition.y]) {
			this.grid[this.endPosition.x][this.endPosition.y] = 0;
		}
		return;

	}
	
	_findRandomPosition() {
		let foundPosition = false, position;
		while (!foundPosition) {
			position = this._getRandomPosition();
			if (!this.grid[position.x][position.y]) {
				foundPosition = true;
			}
		}
		return position;
	}
	
	
	set grid(grid) {
		this._grid = grid;
	}
	
	_wallCounter() {
		if (!this.grid || !this.dimenssion)
				throw new Error("You must initialize a grid")
		let counter = 0;
		for (let i = 0; i < this.dimenssion; i++)
			for (let j = 0; j < this.dimenssion; j++)
				if (this.grid[i][j])
					counter++;
				
		return counter;
	}
	
	_getRandomPosition() {
		return {
			x: Math.floor(Math.random() * this.dimenssion),
			y: Math.floor(Math.random() * this.dimenssion)
		}
	}
	
	_reduceFieldsRandomlySpiral(percent) {
		const occupiedFields = this._wallCounter();
		const fieldsToReduce = Math.floor((occupiedFields * percent) / 100);
		var row = this.dimenssion, 
				currentRow = this.dimenssion, 
				column = this.dimenssion, 
				currentColumn = this.dimenssion;
		let total = 0;
		while(currentRow > row/2 ) {
			if (total >= fieldsToReduce-1) return;  

			// traverse row forward
			for(var i = (column - currentColumn); i < currentColumn ; i++) { 
			if (total >= fieldsToReduce-1) return;  
				if (this.grid[row-currentRow][i]) {
					this.grid[row-currentRow][i] = 0;
					total++;
				}
			}
			
			// traverse column downward
			for(var i = (row - currentRow + 1); i < currentRow ; i++) {
			if (total >= fieldsToReduce-1) return;  
				if (this.grid[i][currentColumn - 1]) {
					this.grid[i][currentColumn - 1] = 0;
					total++;
				}
			}
			
			// traverse row backward
			for (var i = currentColumn - 1; i > (column - currentColumn) ; i--) { 
			if (total >= fieldsToReduce-1) return;  
				if(this.grid[currentRow - 1][i - 1]) {
					this.grid[currentRow - 1][i - 1] = 0;
					total++;
				}
			}
		  // traverse column upward
			for(var i = currentRow - 1; i > (row - currentRow + 1) ; i--) {
			if (total >= fieldsToReduce-1) return;  
				if (this.grid[i - 1][column - currentColumn]) {
					this.grid[i - 1][column - currentColumn] = 0;
					total++;
				}
			}

		  currentRow--;
		  currentColumn--;
		}
	}
	_reduceFieldsRandomly(percent) {
		const occupiedFields = this._wallCounter();
		const fieldsToReduce = Math.floor((occupiedFields * percent) / 100);		
		for (let i = 0, k = 0; i <  fieldsToReduce;) {
			let {x, y} = this._getRandomPosition();
			
			if (this.grid[x][y]) {
				this.grid[x][y] = 0;
				i++;
			}
		}
	}
	get grid() {
		return this._grid;
	}
	
	
}


module.exports = Field;