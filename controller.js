const View = require('./view.js')
const Model = require('./model.js')

class Controller {

static Call(input){

    switch (input[0]) {
      case 'help':
        return `
              $node todo.js # will call help
              $node todo.js help
              $node todo.js list
              $node todo.js add <task_content>
              $node todo.js task <task_id>
              $node todo.js delete <task_id>
              $node todo.js complete <task_id>
              $node todo.js uncomplete <task_id>
              $node todo.js list:created
        `
      break;
      case "list":
        return View.list(Model.readData())
      break;
      case "add": // <task_content>
        var input = process.argv
        var kata2= 'Added "'+process.argv[3]+'" to your  list..'
        if (input.length < 4){
          return '"Index brapa yang mau di add?" contoh "add 3"'
        }
        else{
        return kata2+'\n' + View.list(Model.adds())
       }
      break;
      case "task" ://<task_id>":
        return View.task()
      break;
      case "delete": // <task_id>
      var input = process.argv
      if (input.length < 4){
        return '"Index brapa yang mau di delete?" contoh "delete 3"'
      }
      else{
          return View.list(Model.deletes())
      }
      break;
      case "complete": // <task_id>
        return View.list(Model.completes())
      break;
      case "uncomplete": // <task_id>
        return View.list(Model.uncompletes())
      break;
      case "list:created":
      // return View.list()
      break;
      default:
        return'node.todo.js help';
    }
  }
}

// console.log(View.list())

module.exports= Controller
