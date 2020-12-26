const {GAME_EXIT} = require('../../../constants/game_status');;
module.exports = (input) => {
	if (input.toLowerCase() == 'q') {
		return GAME_EXIT;
	}
}