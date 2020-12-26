const React = require('react');
const {Text, Box} = require('ink');

class MazeGameover extends React.Component {
	render() {
		return (
			<Box>
				<Text color="red">Game over....</Text>
			</Box>
		);
	}
}

module.exports = MazeGameover;

