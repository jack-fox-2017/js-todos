// const fs = require('fs')
// const data = fs.readFileSync('./data.json', 'utf-8')
// const dataJson = JSON.parse(data)

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

  static find(id) {
    TodoView.find(TodoModel.find(id))
  }

  static delete(id) {
    TodoModel.delete(id)
  }

  static complete(id) {
    TodoModel.complete(id)
  }

  static uncomplete(id) {
    TodoModel.uncomplete(id)
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
    Todo.add(input[1])
    break

    case 'find':
    Todo.find(input[1])
    break

    case 'delete':
    Todo.delete(input[1])
    break

    case 'complete':
    Todo.complete(input[1])
    break

    case 'uncomplete':
    Todo.uncomplete(input[1])
    break

    default:
    Todo.help()

  }
}

// console.log(process.argv.slice(2));
manageCommand(process.argv.slice(2))
