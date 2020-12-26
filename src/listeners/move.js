const {NO_ACTION} = require('../constants/game-move-actions');
const {arrowListener, inputListener} = require('./move-keyboard');
const listen = (listener, dispatcher) => {
	listener((input, key) => {
		let action = arrowListener(key);
			if (action !== NO_ACTION) {
				dispatcher(action);
				return;
			}
			action = inputListener(input);
			if (action !== NO_ACTION) {
				dispatcher(action);
			}
	});
}

module.exports = listen;