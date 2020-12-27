const React = require('react');
const {Text, Box} = require('ink');
const {GAMEOVER_COLOR} = require('../constants/colors');
class MazeGameover extends React.Component {
	render() {
		return (
			<Box>
				<Text color={GAMEOVER_COLOR}>Game over....</Text>
			</Box>
		);
	}
}

module.exports = MazeGameover;

