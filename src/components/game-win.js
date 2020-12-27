const React = require('react');
const {Text, Box} = require('ink');
const {GAME_WIN_COLOR} = require('../constants/colors');

class MazeWin extends React.Component {
	render() {
		return (
			<Box>
				<Text color={GAME_WIN_COLOR}>Congratulation You Win!!!</Text>
			</Box>
		);
	}
}

module.exports = MazeWin;

