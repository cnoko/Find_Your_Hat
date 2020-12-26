const move = request('./move/reducer');
const gamestatus = request('./status/reducer');

module.exports = {
  move,
  gamestatus
};
