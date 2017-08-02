const Model = require ('./model');
const View = require ('./view');
const fs = require('fs')

class ToDo {
  static help() {
    console.log(`$ node todo.js`);
    console.log(`$ node todo.js help`);
    console.log(`$ node todo.js list`);
    console.log(`$ node todo.js add <task_content>`);
    console.log(`$ node todo.js task <task_id>`);
    console.log(`$ node todo.js delete <task_id>`);
    console.log(`$ node todo.js complete <task_id> `);
    console.log(`$ node todo.js uncomplete <task_id>`);
  }

  static list() {
    let data = Model.readFile('./data.json', 'utf-8');
    // console.log(data);
    View.showList(data);
  }

  static addList() {
    let data = Model.addFile('./data.json', 'utf-8')
    // View.showList(data);
  }

  static find() {
    let data = Model.readFile('./data.json', 'utf-8');
    for (var i = 0; i < data.length; i++) {
      if(data[i].id == process.argv[3]) {
        console.log(`${data[i].id}. ${data[i].task}`);
      }
    }
  }

  static delete() {
    let data = Model.readFile('./data.json', 'utf-8');
    // let input = command.slice(1)
    let input = command[1]
    // let inputJoin = input.join(" ")
    // console.log(inputJoin);
    for (var i = 0; i < data.length; i++) {
      if(input == data[i].id) {
        console.log(`Deleted "${data[i].task}" from your TODO list`);
        data.splice(i,1)
      }
    }
    // console.log(data);
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if(err) {throw err}
      // console.log(data);
      else {}
    })
  }

  static completed() {
    let data = Model.readFile('./data.json', 'utf-8');
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == process.argv[3]) {
        // console.log(data[i]);
        data[i].status = true;
      }
    }
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if(err) {throw err}
      // console.log(data);
      else {}
    })
  }

  static uncomplete() {
    let data = Model.readFile('./data.json', 'utf-8');
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == process.argv[3]) {
        // console.log(data[i]);
        data[i].status = false;
      }
    }
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
      if(err) {throw err}
      // console.log(data);
      else {}
    })
  }
}


function manageCommand(command) {
  switch(command[0]) {
    case "help":
      ToDo.help()
      break
    case "list":
      ToDo.list()
      break
    case "add":
      ToDo.addList()
      break
    case "task":
      ToDo.find()
      break
    case "del":
      ToDo.delete()
      break
    case "complete":
      ToDo.completed()
      break
    case "uncomplete":
      ToDo.uncomplete()
      break
    default:
      ToDo.help()

  }
}

let run = process.argv;
let command = run.slice(2);

manageCommand(command)
