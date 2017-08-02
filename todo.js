
const ModelCookie = require('./model');
const ViewCookie = require('./view');

class Cookies {
  static list() {
    // let data = fs.readFileSync('./data.json','utf-8') // type nya string
    // let data_json = JSON.parse(data);
    // console.log(typeof data);
    let data = ModelCookie.readFile('./data.json');
    ViewCookie.showList(data);
    // for(let i=0; i< data_json.length;i++) {
    //   console.log(`data ke ${i+1}: ${data_json[i].nama} `);
    // }
  }
  static find(n) {
    let data = ModelCookie.readFile('./data.json');
    ViewCookie.showFind(data,n);
  }

  static add(str) {
    let data = ModelCookie.readFile('./data.json');
    ModelCookie.add(str);
    ViewCookie.showAdded(str);
  }

  static completed(n){
    ModelCookie.completed(n);
  }

  static uncompleted(n){
    ModelCookie.uncompleted(n);
  }

  static deleted(n) {
    let data = ModelCookie.readFile('./data.json');
    ViewCookie.showDeleted(data, n);
    ModelCookie.delete(n);
  }

  static sortCreated(way) {
    let data = ModelCookie.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      ViewCookie.showListCreated(data, way);
    } else {
      way = "desc";
      ViewCookie.showListCreated(data, way);
    }
  }

  static sortUncompleted(way) {
    let data = ModelCookie.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      ViewCookie.showListUncompleted(data, way);
    } else {
      way = "desc";
      ViewCookie.showListUncompleted(data, way);
    }
  }

  static sortCompleted(way) {
    let data = ModelCookie.readFile('./data.json');
    if (way == null || way == "asc") {
      way = "asc";
      ViewCookie.showListCompleted(data, way);
    } else {
      way = "desc";
      ViewCookie.showListCompleted(data, way);
    }
  }
  // Cookies.tag(command[1],arr)
  static tag(n,arr) {
    ModelCookie.tag(n,arr);
    let data = ModelCookie.readFile('./data.json');
    ViewCookie.showTagged(data, n, arr);
  }
  static filter(arr) {
    let data = ModelCookie.readFile('./data.json');
    ViewCookie.showFiltered(data, arr);
  }
}
// pake switch case bukan looping cuma skali kyk if
function manageCommand(command) {
  // command[0]
  // let rawList = ModelCookie.readFile('./data.json');
  switch(command[0]) {
    case "help": // kalo "node index.js help"
    ViewCookie.showHelp();
    break;
    case "list":
    Cookies.list()
    break;
    case "add":
    Cookies.add(command[1]);
    break;
    case "task":
    Cookies.find(command[1]);
    break;
    case "delete":
    Cookies.deleted(command[1]);
    break;
    case "complete":
    Cookies.completed(command[1])
    break;
    case "uncomplete":
    Cookies.uncompleted(command[1])
    break;
    case "list:created":
    Cookies.sortCreated(command[1])
    break;
    case "list:outstanding":
    Cookies.sortUncompleted(command[1])
    break;
    case "list:completed":
    Cookies.sortCompleted(command[1])
    break;
    case "tag":
    let arr=[];
    for (let i=2; i<command.length; i++) {
      arr.push(command[i]);
    }
    Cookies.tag(command[1],arr)
    break;
    default:
    var newCommand = command[0].split(':');
    switch(newCommand[0]) {
      case "filter":
      Cookies.filter(newCommand[1])
      break;
      default:
      ViewCookie.showHelp();
    }
    // ViewCookie.showHelp();
  }
}

let run = process.argv
let command = run.slice(2)
manageCommand(command);
