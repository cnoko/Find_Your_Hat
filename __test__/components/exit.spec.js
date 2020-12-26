const React = require('react');
const {render} = require('ink-testing-library');

const importJsx = require('import-jsx');
const Exit = importJsx('../../src/components/exit');
describe('render exit confirmation', () => {
	test('ask you question', () => {
		const { lastFrame } = render(<Exit />);
	
		expect(lastFrame()).toMatch(/are you sure you want to quit/i);
	});
	
	test('show answers', () => {
		const { lastFrame } = render(<Exit />);
	
		expect(lastFrame()).toMatch(/Yes/i);
		expect(lastFrame()).toMatch(/No/i);
	});
});
