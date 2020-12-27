const React = require('react');
//const {useInput} = require('ink');

//listeners
//const quitListener = require('../features/status/quitListener');

//exit reducer
//const {quit} = require('../features/status/gamestatusSlice')

//all status
const gameStatus = require('../constants/game-status');
const importJsx = require('import-jsx');

///switch components according to status
const GameWin = importJsx('../components/game-win');
const Gameover = importJsx('../components/gameover');
const Exit = importJsx('../components/exit');
const NotFound = importJsx('../components/not-found');
const GameWrapper = importJsx('../containers/maze-container');
const Maze = require('../../lib/maze-generator');
const dimenssion = 10;
const maze = new Maze(dimenssion);
maze.generateMaze();
const grid = maze.maze;
const GetProperComponent = (props) => {
	const {onMoveListener, onConfirmListener, position, onGameover, onGameWin} = props;
	switch (props.gameStatus) {
			case gameStatus.GAME_STATUS_PLAYING:
				onMoveListener();
				return (
					<GameWrapper 
						onGameover={onGameover} 
						position={position} 
						grid={grid} 
						dimenssion={dimenssion}
						onGameWin={onGameWin}/>
				);
			case gameStatus.GAME_STATUS_OVER:

				return <Gameover {...props} />;
				break;
			case gameStatus.GAME_STATUS_WIN:
				return <GameWin />;
				break;
			case gameStatus.GAME_STATUS_EXIT:
				onConfirmListener();
				return <Exit />;
				break;
			default:
				return <NotFound />;
		}
}

const GameContainer = (props) => {
		const {onExitListener} = props;
		onExitListener();
		
		return (
			<React.Fragment>
				<GetProperComponent {...props} />
			</React.Fragment>
		);
}

module.exports = GameContainer;