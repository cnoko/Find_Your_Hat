const inputs = require('../../src/constants/keyboard-input');
const confirmListener = require('../../src/listeners/confirm');
describe('Test confirmation', () => {
	const exitDispatcher = jest.fn();
	const rejectDispatcher = jest.fn();
	beforeEach(() => {
		exitDispatcher.mockClear();
		rejectDispatcher.mockClear();
	});
	test('confirm yes',  () => {
		confirmListener(inputs.INPUT_YES, exitDispatcher, rejectDispatcher);
		expect(exitDispatcher.mock.calls.length).toBe(1);
		expect(rejectDispatcher.mock.calls.length).toBe(0);
	});
	test('confirm no',  () => {
		confirmListener(inputs.INPUT_NO, exitDispatcher, rejectDispatcher);
		expect(exitDispatcher.mock.calls.length).toBe(0);
		expect(rejectDispatcher.mock.calls.length).toBe(1);
	});
	test('confirm nothing',  () => {
		confirmListener('', exitDispatcher, rejectDispatcher);
		expect(exitDispatcher.mock.calls.length).toBe(0);
		expect(rejectDispatcher.mock.calls.length).toBe(0);
	});
	
});
