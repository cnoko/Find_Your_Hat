const React = require('react');
const {Text, Box} = require('ink');

class Exit extends React.Component {
	render() {
		return (
			<Box width={40} FlexDirection="column" borderStyle="round">
				<Box width={15}><Text>Yes</Text></Box>
				<Box width={15}><Text>No</Text></Box>
			</Box>
		);
	}
}

module.exports = Exit;
