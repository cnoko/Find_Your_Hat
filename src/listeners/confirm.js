const {INPUT_YES, INPUT_NO} = require('../constants/keyboard-input');
const confirmListener = (input, exitDispatcher, rejectDispatcher) => {
	if (input.toLowerCase() === INPUT_YES) {
		exitDispatcher();
	}
	if (input.toLowerCase() === INPUT_NO) {
		rejectDispatcher();
	}
}

module.exports = confirmListener;
