const Controller = require('./controller')

var input =process.argv.slice(2)
console.log(Controller.Call(input));
