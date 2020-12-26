const React = require('react');
const {Text, Box} = require('ink');

class MazeWin extends React.Component {
	render() {
		return (
			<Box>
				<Text color="green">Congratulation You Win!!!</Text>
			</Box>
		);
	}
}

module.exports = MazeWin;

