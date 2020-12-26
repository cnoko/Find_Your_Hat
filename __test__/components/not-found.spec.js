const React = require('react');
const {render} = require('ink-testing-library');

const importJsx = require('import-jsx');
const NotFound = importJsx('../../src/components/not-found');
describe('render game over', () => {
	test('show game over message', () => {
		const { lastFrame } = render(<NotFound />);
	
		expect(lastFrame()).toMatch(/Error occured\.\.\. unexpected  game status./i);
	});
	
});
