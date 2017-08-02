const TodoModel = require('./model')
const TodoView = require('./view')

class Todo{

  static help() {
    TodoView.help()
  }

  static list() {
    TodoView.list(TodoModel.read())
  }

  static add(newTask) {
    TodoModel.add(newTask)
  }

	static find(){
		TodoModel.find()
	}

	static deleting(id){
		TodoModel.deleting(id)
	}

  static completed(id){
    TodoModel.completed(id)
  }

  static uncompleted(id){
    TodoModel.uncompleted(id)
  }

}

var manageCommand = (input) => {
  switch(input[0]) {
    case 'help':
      Todo.help()
    break

    case 'list':
      Todo.list()
    break

    case 'add':
		if (input[1] === undefined) {
			console.log("Please input your data");
		} else {
			Todo.add(input[1])
		}
		break

		case 'find':
			Todo.find()
		break

		case 'delete':
			Todo.deleting(input[1])
		break

    case 'complete' :
      Todo.completed(input[1])
    break

    case 'uncomplete' :
      Todo.uncompleted(input[1])
    break
    
		default :
		console.log("Please type : node todo.js help " + '\n' + "for more information");
		break
  }
}

// console.log(process.argv.slice(2));
manageCommand(process.argv.slice(2))

module.exports = Todo;
