const Maze = require('../../lib/maze-generator');
var PF = require('pathfinding');

function getRandomPosition(grid) {
	let x, y;
	do {
		x = Math.floor(Math.random() * grid.length);
		y = Math.floor(Math.random() * grid[x].length);
	} while (grid[x][y]); 
	return {x, y};
}
describe('test N times maze generator', () => {

	test('', () => {
		const size = 10;
		const generator = new Maze(10);
		let counter = 0;
		for (let i = 0; i < 150; i++) {
			const startPosition = getRandomPosition(generator.maze);
			const endPosition = getRandomPosition(generator.maze);
			generator.generateMaze();
			const grid = new PF.Grid(generator.maze);
			const finder = new PF.AStarFinder();
			const result = finder.findPath(startPosition.x, startPosition.y, endPosition.x, endPosition.y, grid);
			counter += result.length ? 1 : 0;
		}
			expect(counter).toBeGreaterThan(10);
	});
});