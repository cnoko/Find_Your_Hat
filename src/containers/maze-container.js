const React = require('react');
const importJsx = require('import-jsx');
const GamePlayer = importJsx('../components/game');
class MazeGameContainer extends React.Component {
	constructor(props) {
		super(props);

	}

	shouldComponentUpdate(nextProps, nextState) {
		let gameOver = false, shouldUpdate = true;
		const {dimenssion, position} = nextProps;
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
		else if (this.props.grid[position.x][position.y]) {
			gameOver = true;
		} else if (this.props.destinationPosition.x === position.x && this.props.destinationPosition.y === position.y) {
			this.props.onGameWin();
		}
		
		if (gameOver) {
			this.props.onGameover();
			shouldUpdate= true;
		}
		
		return shouldUpdate;
	}
	render() {
		///const {onMoveListener} = this.props;
		//onMoveListener();
		return <GamePlayer {...this.props} />;
	}
}

module.exports = MazeGameContainer;