const Controller = require('./controller')

let app = process.argv.slice(2)
console.log(Controller.commandCenter(app));
