// const fs = require('fs')
// const data = fs.readFileSync('./data.json', 'utf-8')
// const dataJson = JSON.parse(data)

const TodoModel = require('./model')
const TodoView = require('./view')


var manageCommand = (input) => {
  switch(input[0]) {
    case 'help':
      TodoView.help()
    break

    case 'list':
      TodoView.list()
    break

    case 'add':
    TodoModel.add(input[1])
    break

  }
}

// console.log(process.argv.slice(2));
manageCommand(process.argv.slice(2))
