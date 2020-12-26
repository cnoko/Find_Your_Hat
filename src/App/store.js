const { configureStore } = require('@reduxjs/toolkit');
const {reducer} = require('../features/move/moveSlice');

module.exports = configureStore({
  reducer: {
    move: reducer,
  },
});
