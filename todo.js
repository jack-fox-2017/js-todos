
const Model = require('./model');
const View = require('./view');
//Cookies - Todo
class Todo {
  static list() {
    // let data = fs.readFileSync('./data.json','utf-8') // type nya string
    // let data_json = JSON.parse(data);
    // console.log(typeof data);
    let data = Model.readFile('./data.json');
    View.showList(data);
  }
  static find(n) {
    let data = Model.readFile('./data.json');
    View.showFind(data,n);
  }

  static add(str) {
    let data = Model.readFile('./data.json');
    Model.add(str);
    View.showAdded(str);
  }

  static completed(n){
    Model.completed(n);
  }

  static uncompleted(n){
    Model.uncompleted(n);
  }

  static deleted(n) {
    let data = Model.readFile('./data.json');
    View.showDeleted(data, n);
    Model.delete(n);
  }

  static sortCreated(way) {
    let data = Model.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      View.showListCreated(data, way);
    } else {
      way = "desc";
      View.showListCreated(data, way);
    }
  }

  static sortUncompleted(way) {
    let data = Model.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      View.showListUncompleted(data, way);
    } else {
      way = "desc";
      View.showListUncompleted(data, way);
    }
  }

  static sortCompleted(way) {
    let data = Model.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      View.showListCompleted(data, way);
    } else {
      way = "desc";
      View.showListCompleted(data, way);
    }
  }
  // Cookies.tag(command[1],arr)
  static tag(n,arr) {
    Model.tag(n,arr);
    let data = Model.readFile('./data.json');
    View.showTagged(data, n, arr);
  }
  static filter(arr) {
    let data = Model.readFile('./data.json');
    View.showFiltered(data, arr);
  }
}
// pake switch case bukan looping cuma skali kyk if
function manageCommand(command) {

  switch(command[0]) {
    case "help": // kalo "node index.js help"
    View.showHelp();
    break;
    case undefined: // kalo "node index.js help"
    View.showHelp();
    break;
    case "list":
    Todo.list()
    break;
    case "add":
    Todo.add(command[1]);
    break;
    case "task":
    Todo.find(command[1]);
    break;
    case "delete":
    Todo.deleted(command[1]);
    break;
    case "complete":
    Todo.completed(command[1])
    break;
    case "uncomplete":
    Todo.uncompleted(command[1])
    break;
    case "list:created":
    Todo.sortCreated(command[1])
    break;
    case "list:outstanding":
    Todo.sortUncompleted(command[1])
    break;
    case "list:completed":
    Todo.sortCompleted(command[1])
    break;
    case "tag":
    let arr=[];
    for (let i=2; i<command.length; i++) {
      arr.push(command[i]);
    }
    Todo.tag(command[1],arr)
    break;
    default:
    var newCommand = command[0].split(':');
    switch(newCommand[0]) {
      case "filter":
      Todo.filter(newCommand[1])
      break;
      default:
      View.showHelp();
    }
  }
}

let run = process.argv
let command = run.slice(2)
manageCommand(command);
