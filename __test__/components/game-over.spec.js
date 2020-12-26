const React = require('react');
const {render} = require('ink-testing-library');

const importJsx = require('import-jsx');
const GameOver = importJsx('../../src/components/gameover');
describe('render game over', () => {
	test('show game over message', () => {
		const { lastFrame } = render(<GameOver />);
	
		expect(lastFrame()).toMatch(/Game over/i);
	});
	
});
