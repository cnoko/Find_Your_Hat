const {INPUT_QUIT} = require('../constants/keyboard-input');
const exitListener = (input, dispatcher) => {
	if (input.toLowerCase() === INPUT_QUIT) {
		dispatcher();
	}
}

module.exports = exitListener;
