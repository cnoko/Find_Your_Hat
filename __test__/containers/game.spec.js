const gameStatus = require('../../src/constants/game-status');
const importJsx = require('import-jsx');
const React = require('react');
const {render} = require('ink-testing-library');
const Game = importJsx('../../src/containers/game');
const GameWin = importJsx('../../src/components/game-win');
//const Maze = importJsx('../components/game');
const GameOver = importJsx('../../src/components/gameover');
const GameExit = importJsx('../../src/components/exit');
const NotFound = importJsx('../../src/components/not-found');
const onExitListener    = jest.fn();
const onMoveListener    = jest.fn();
const onConfirmListener = jest.fn();
const onSetup = jest.fn();
const onGameover = jest.fn();
const onGameWin = jest.fn();
const grid = (new Array((new Array(10).fill(0))));
const position = {x: 0, y: 0};
describe('Test game container', () => {
	beforeEach(() => {
		onExitListener.mockClear()
		onMoveListener.mockClear();
		onConfirmListener.mockClear();
		onGameover.mockClear();
		onSetup.mockClear();
		onGameWin.mockClear();
	})
	it('listenening', () => {
		const {lastFrame, rerenderer} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameover={onGameover}
					onGameWin={onGameWin}
					onSetup={onGameWin}
					grid={grid}
					position={position}
					gameStatus={gameStatus.GAME_STATUS_PLAYING} 
				/>);
		//const {lastFrame} = render(< />);
		expect(onExitListener.mock.calls.length).toBe(1);
		//expect(listenerMockFunc.mock.calls.length).toBe(1);
	});
	
	it('playing', () => {
		const {lastFrame, rerenderer} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameover={onGameover}
					onGameWin={onGameWin}
					onSetup={onGameWin}
					grid={grid}
					position={position}
					gameStatus={gameStatus.GAME_STATUS_PLAYING} 
				/>);
		//const {lastFrame} = render(< />);
		expect(onExitListener.mock.calls.length).toBe(1);
		//expect(listenerMockFunc.mock.calls.length).toBe(1);
	});
	
	it('show game over', () => {
		const {lastFrame} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameover={onGameover}
					onGameWin={onGameWin}
					onSetup={onGameWin}
					grid={grid}
					position={position}
					gameStatus={gameStatus.GAME_STATUS_OVER} 
				/>);
		const expected = render(<GameOver />);
		expect(onExitListener.mock.calls.length).toBe(1);
		expect(lastFrame()).toBe(expected.lastFrame());
		//expect(listenerMockFunc.mock.calls.length).toBe(1);
	});
	
	it('show game win', () => {
		const {lastFrame} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameover={onGameover}
					onGameWin={onGameWin}
					onSetup={onGameWin}
					grid={grid}
					position={position}
					gameStatus={gameStatus.GAME_STATUS_WIN} 
				/>);
		const expected = render(<GameWin />);
		expect(onExitListener.mock.calls.length).toBe(1);
		expect(lastFrame()).toBe(expected.lastFrame());
	});
	
	
	it('show game exit', () => {
		const {lastFrame} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameover={onGameover}
					onGameWin={onGameWin}
					grid={grid}
					position={position}
					gameStatus={gameStatus.GAME_STATUS_EXIT} 
				/>);
		const expected = render(<GameExit />);
		expect(onExitListener.mock.calls.length).toBe(1);
		expect(lastFrame()).toBe(expected.lastFrame());
	});
	
	it('unxpected', () => {
		const {lastFrame} = render(
				<Game 
					onExitListener={onExitListener}
					onMoveListener={onMoveListener}
					onConfirmListener={onConfirmListener}
					onGameWin={onGameWin}
					grid={grid}
					position={position}
					gameStatus={"NOT-FOUND"} 
				/>);
		const expected = render(<NotFound />);
		expect(onExitListener.mock.calls.length).toBe(1);
		expect(lastFrame()).toBe(expected.lastFrame());
	});
});
