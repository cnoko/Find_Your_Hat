'use strict';
const React = require('react');
const {Box, Text, useInput} = require('ink');
const { createStore } = require('redux');
const {Provider, connect, useDispatch} = require('react-redux');
const reducer = require('./src/reducer');
const importJsx = require('import-jsx');
const GameContainer = importJsx('./src/containers/game');
const store = createStore(reducer);
const {exit, gameResume, gameover, gameWin} = require('./src/actions/game-status');
const {setupMovement} = require('./src/actions/move');
const exitListener = require('./src/listeners/exit');
//React.context = {'store': store};
const confirmListener = require('./src/listeners/confirm');
const moveListener = require('./src/listeners/move');
const mapStateToProps = (state) => {
	return {
		gameStatus: state.gameStatus.gameStatus,
		position: {
			x: state.move.x,
			y: state.move.y
		}
	}
};

const mapDispatchToProps = () => {
	return {
		onExitListener: () => {
			useInput((input, key) => {
				exitListener(input, () => {
					store.dispatch(exit());
				})
			});
		},
		onSetup: (position) => {
			store.dispatch(setupMovement(position))
		},
		onMoveListener: () => {
			moveListener(useInput, (action) => {
				store.dispatch(action);
			})
		},
		onGameWin: () => {
			store.dispatch(gameWin());
		},
		
		onGameover: () => {
			setTimeout(() => store.dispatch(gameover()), 500);
		},
		
		onConfirmListener: () => {
				useInput((input, key) => {
					confirmListener(input, () => process.exit(), () => {
						store.dispatch(gameResume());
					});
				});
		}
	}
}


const Game =  connect(mapStateToProps, mapDispatchToProps)(GameContainer);
const App = ({difficulty = 50}) => {
	
	 return (
		<Provider store={store}>
			<Box Margin={2} display="flex" alignItems="center" flexDirection="column" borderStyle="round">
				<Game difficulty={difficulty} />
			</Box>
		</Provider>
	);
}
module.exports = App;
