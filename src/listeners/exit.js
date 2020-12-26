const exitListener = (input, dispatcher) => {
	if (input.toLowerCase() === 'q') {
		dispatcher();
	}
}

module.exports = exitListener;
