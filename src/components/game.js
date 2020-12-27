const React = require('react');
const {Box, Text, useInput} = require('ink');

const {CURRENT_POSITION_COLOR, PATH_COLOR, WALL_COLOR, COLLISION_COLOR, DESTINATION_COLOR} = require('../constants/colors.js');


class Maze extends React.Component {
	constructor(props) {
		super(props);
	}
	getColor(x, y) {
		if (this.props.position.x === x && this.props.position.y === y) {
			if (this.props.grid[x][y]) {
				return COLLISION_COLOR;
			} else {
				return CURRENT_POSITION_COLOR;
			}
		}
		if (this.props.destinationPosition.x === x && this.props.destinationPosition.y === y) {
			return DESTINATION_COLOR;
		}
		if (!this.props.grid[x][y]) {
			return PATH_COLOR;
		}
		
		return WALL_COLOR;
	}
	fill(x, y, cell) {
		return this.props.filler.getCellCharacter(cell, x, y, this.props.position, this.props.destinationPosition)
	}
	
	render() {
		const items = [];
		const {grid, dimenssion} = this.props;
			for (let i = 0; i < dimenssion; i++) {
				const line = [];
				for (let j = 0; j < dimenssion; j++) {
				const color = this.getColor(j, i);
				const character = this.fill(j, i, grid[j][i]);
				const key = `key_${i}_${j}`;
					line.push(
						<Box borderStyle="round" width={7} FlexGrow={1} key={key} borderColor={color}>
							<Text width="100%" backgroundColor={color} alignSelf="center">{character}</Text>
						</Box>
					);
				
			}
			items.push(<Box key={"wrapper_" + i}>{line}</Box>);
		}

		return <React.Fragment>{items}</React.Fragment>;
	}
}

module.exports = Maze;
