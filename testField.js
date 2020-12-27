const Field = require('./lib/Field');

const field = new Field();

field.newGame();
const percent = 50;
console.log(field._wallCounter())
field.reduceFieldsRandomly(percent);
console.log(field._wallCounter())
