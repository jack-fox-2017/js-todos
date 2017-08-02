const View = require('./view');
const Model = require('./model');
class Controller{

  static commandCenter(command){
    let dataModel = new Model()

    switch (command[0]) {
      case 'help':
        return View.indeks()
        break;
      case 'list':
        return View.list(dataModel.readFile())
      case 'find':
        let id = command[1]
          // console.log(command[1]);
        return View.find(id)
        break;
      case 'add':
        let newData = command[1]
        dataModel.addData(newData)
        return View.list(dataModel.readFile())
        break;
      case 'delete':
        let iddelete = command[1]
        dataModel.deleteData(iddelete)
        return View.list(dataModel.readFile())
        break;
      case 'complete':
        dataModel.complete(command[1])
        return View.list(dataModel.readFile())
        break;
      case 'uncomplete':
        dataModel.uncomplete(command[1])
        return View.list(dataModel.readFile())
        break;
      case 'addTag':
        let arr = command.slice(2)
        dataModel.addTag(command[1], arr)
        return View.list(dataModel.readFile())
        break;
      case 'list:created':
        return View.sortCreated(dataModel.sortCreated(), command[1])
        break;
      case 'list:outstanding':
        return View.sortCreated(dataModel.sortCreated(), command[1])
        break;
      case 'list:complete':
        return View.sortCompleted(dataModel.sortCreated(), command[1])
        break;
      case 'list:uncomplete':
        return View.sortUncomplete(dataModel.sortCreated(), command[1])
        break;
      case 'findbyTag':
        return View.findbyTag(dataModel.sortCreated(), command[1])
        break;
      default:
        return View.indeks()
    }
  }

}

module.exports = Controller;
