const React = require('react');
const {render} = require('ink-testing-library');

const importJsx = require('import-jsx');
const Win = importJsx('../../src/components/game-win');
describe('render win', () => {
	test('show congratulation', () => {
		const { lastFrame } = render(<Win />);
	
		expect(lastFrame()).toMatch(/Congratulation You Win/i);
	});
	
});
