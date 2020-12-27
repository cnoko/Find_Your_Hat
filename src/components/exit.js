const React = require('react');
const {Text, Box} = require('ink');
const importJsx = require('import-jsx');
const Confirm = importJsx('./confirm');

class Exit extends React.Component {
	render() {
		return (
			<Box>
				<Box width={40}>
					<Text>Are you sure you want to quit?</Text>
				</Box>
				<Box width={40}>
					<Confirm />
				</Box>
			</Box>
		);
	}
}

module.exports = Exit;
