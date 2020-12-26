const React = require('react');
const importJsx = require('import-jsx');
const Maze = importJsx('../components/game');

class MazeGameContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let gameOver = false, shouldUpdate = true;
		const {dimenssion, position, grid} = nextProps;
		if (position.x < 0 || position.y < 0) {
			gameOver = true;
			shouldUpdate = false;
		} 
		else if (position.y > dimenssion-1 || position.x > dimenssion-1) {
			gameOver = true;
			shouldUpdate = false;
		}
		else if (position.x < 0 || position.y < 0 
			|| position.x > dimenssion-1 || position.y > dimenssion-1) {
			gameOver = true;
			shouldUpdate = false;
		}
		else if (!grid[position.x][position.y]) {
			gameOver = true;
		}
		
		if (gameOver) {
			this.props.onGameover();
		}
		
		return shouldUpdate;
	}
	render() {
		///const {onMoveListener} = this.props;
		//onMoveListener();
		return <Maze {...this.props} />;
	}
}

module.exports = MazeGameContainer;