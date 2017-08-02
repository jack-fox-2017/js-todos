const {
  View
} = require('./view.js')
const {
  Mode
} = require('./mode.js')

class Controller {
  constructor() {
    this.model = new Mode()
    this.view = new View()
  }
  prog(param) {
    switch (param[0]) {
      case 'help':
        this.view.help()
        break;
      case 'list':
        this.model.read()
        break;
      case 'list:created':
        this.model.sortCreate(param.splice(1))
        break;
      case 'list:completed':
        this.model.sortComplete(param.splice(1))
        break;
      case 'add':
        this.model.write(param.splice(1))
        break;
      case 'delete':
        this.model.delete(param.splice(1))
        break;
      case 'mayday':
        this.model.mayday()
        break;
      case 'completed':
        this.model.comp(param.splice(1))
        break;
      case 'uncomplete':
        this.model.uncomp(param.splice(1))
        break;
      case 'tag':
        this.model.setTag(param.splice(1))
        break;
      case 'filter:':
        this.model.filter(param.splice(1))
        break;
      default:
        console.log('WRONG PARAMETER, TYPE node todo.js help FOR HELP');
    }
  }
}

module.exports = {
  Controller
}
