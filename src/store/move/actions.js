const types = require('./actionTypes');
const {arrowListener, inputListener} = require('./moveListener');
function moveUp() {
	return ({type: types.MOVE_UP});
}

function moveDown() {
	return ({type: types.MOVE_DOWN});

}

function moveLeft() {
	return ({type: types.MOVE_DOWN});

}

function moveRight() {
	return ({type: types.MOVE_DOWN});
}

function listen(listener = useInput) {
	listener((input, key) => {
		let action = arrowListener(key);
			if (action !== NO_ACTION) {
				dispatch(action);
				return;
			}
			action = inputListener(input);
			if (action !== NO_ACTION) {
				dispatch(action);
			}
	});
}
