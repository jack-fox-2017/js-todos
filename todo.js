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

  }
}

// console.log(process.argv.slice(2));
manageCommand(process.argv.slice(2))
