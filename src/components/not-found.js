const React = require('react');
const {Box, Text} = require('ink');
const {ERROR_COLOR} = require('../constants/colors');
module.exports = () => {
	return (
		<Box>
			<Text color={ERROR_COLOR}>Error occured... unexpected  game status.</Text>
		</Box>
	);
}