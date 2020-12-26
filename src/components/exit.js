const React = require('react');
const {Text, Box} = require('ink');
const importJsx = require('import-jsx');
const Confirm = importJsx('./confirm');

class Exit extends React.Component {
	render() {
		return (
			<Box>
				<Text>Are you sure you want to quit?</Text>
				<Confirm />
			</Box>
		);
	}
}

module.exports = Exit;
