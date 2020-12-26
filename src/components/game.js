const React = require('react');
const {Box, Text, useInput} = require('ink');

const {CURRENT_POSITION_COLOR, PATH_COLOR, WALL_COLOR, COLLISION_COLOR} = require('../../constants/colors.js');


class Maze extends React.Component {
	constructor(props) {
		super(props);
	}
	getColor(x, y) {
		if (this.props.position.x === x && this.props.position.y === y) {
			if (!this.props.grid[x][y]) {
				return COLLISION_COLOR;
			} else {
				return CURRENT_POSITION_COLOR;
			}
		}
		if (this.props.grid[x][y]) {
			return PATH_COLOR;
		}
		
		return WALL_COLOR;
	}
	
	render() {
		const items = [];
	
			for (let i = 0; i < this.props.dimenssion; i++) {
				const line = [];
				for (let j = 0; j < this.props.dimenssion; j++) {
				const color = this.getColor(j, i);
				const key = `key_${i}_${j}`;
					line.push(
						<Box borderStyle="round" width={7} FlexGrow={1} key={key} borderColor={color}>
							<Text width="100%" backgroundColor={color} alignSelf="center">{this.props.grid[i][j]}</Text>
						</Box>
					);
				
			}
			items.push(<Box key={"wrapper_" + i}>{line}</Box>);
		}

		return <React.Fragment>{items}</React.Fragment>;
	}
}

module.exports = Maze;
