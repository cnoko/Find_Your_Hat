const React = require('react');
//all status
const gameStatus = require('../constants/game-status');
const importJsx = require('import-jsx');

///switch components according to status
const GameWin = importJsx('../components/game-win');
const Gameover = importJsx('../components/gameover');
const Exit = importJsx('../components/exit');
const NotFound = importJsx('../components/not-found');
const GameWrapper = importJsx('../containers/maze-container');
const Field = require('../../lib/field');
const FieldFiller = require('../../lib/field-filler');
const field = new Field();
const filler = new FieldFiller();
let playing = false;

const GetProperComponent = (props) => {
	const {onMoveListener, onConfirmListener} = props;
	switch (props.gameStatus) {
			case gameStatus.GAME_STATUS_PLAYING:
				onMoveListener();
				return (
					<GameWrapper 
						{...props} 
						filler={filler} 
						grid={field.grid} 
						dimenssion={field.dimenssion}
						destinationPosition={field.endPosition}
						/>
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
				if (!playing) {
					field.config(props);
					field.newGame();
					props.onSetup(field.startPosition);
					playing = true;
				}
		return (
			<React.Fragment>
				<GetProperComponent {...props} />
			</React.Fragment>
		);
}

module.exports = GameContainer;