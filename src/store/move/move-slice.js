const { createSlice } = require('@reduxjs/toolkit');

const moveSlice = createSlice({
  name: 'move',
  initialState: {
    x: 0,
	y: 0,
  },
  reducers: {
    moveLeft: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.x -= 1;
    },
    moveRight: state => {
      state.x += 1;
    },
	moveUp: state => {
	  state.y -= 1;
	},
	moveDown: state => {
      state.y += 1;
	},
  },
});

const { moveUp, moveDown, moveLeft, moveRight } = moveSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
const selectPosition = state => state.move;

module.exports = {
	moveUp, 
	moveDown, 
	moveLeft, 
	moveRight, 
	selectPosition,
	moveSlice,
	reducer: moveSlice.reducer,
};
