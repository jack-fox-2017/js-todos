
var ModelTodoList = require('./model')
var viewList = require('./view')

class TodoList{
  constructor(){}

  static list(){
    let data = ModelTodoList.readAFile('./data.json')
    viewList.showList(data)
  }

  //add data
  static add(input){
    let data = ModelTodoList.readAFile('./data.json')
    data.push({
      "id" : data.length + 1,
      "content" : input,
      "create_date" : new Date()
    })
    ModelTodoList.addList(data, input)
  }

  static find(id){
    viewList.findList(id)
  }

  static delete(id){
    let data = ModelTodoList.readAFile('./data.json')
    for(var i = 0; i < data.length; i++) {
      if(data[i].id == id){
        console.log(`Success Delete '${data[i].content}' from your List`);
        data.splice(i, 1)
      }
    }
    console.log(data);
    ModelTodoList.deleteList(data)
  }

  static complete(id){
    let data = ModelTodoList.readAFile('./data.json')
    for(let i=0; i<data.length; i++){
      if(data[i].id == id){
        data[i].completed_date = new Date(),
        data[i].completed = "[x]"
        console.log(`Task : '${data[i].content}' Complete`);
      }
    }
    console.log(data);
    ModelTodoList.completeList(data)
  }

  static uncomplete(id){
    let data = ModelTodoList.readAFile('./data.json')
    for(let i=0; i<data.length; i++){
      if(data[i].id == id){
        data[i].completed = "[ ]"
        console.log(`Task : '${data[i].content}' Re-Complete`);
      }
    }
    console.log(data);
    ModelTodoList.uncompleteList(data)
  }
}



function manageCalled(called){
  switch(called[0]){
    case 'list' :
    case 'list:create' :
      TodoList.list()
      break;
    case 'add' :
      TodoList.add(called[1])
      break;
    case 'task' : //is find
      TodoList.find(called[1])
      break;
    case 'delete' :
      TodoList.delete(called[1])
      break;
    case 'complete' :
      TodoList.complete(called[1])
      break;
    case 'uncomplete' :
      console.log('There is the uncomplete for input');
      break;
    case 'help' :
    default :
      console.log('$ node todo.js \
      \n\$ node todo.js help \
      \n\$ node todo.js list \
      \n\$ node todo.js add "<task_content>"\
      \n\$ node todo.js task <task_id>\
      \n\$ node todo.js delete <task_id>\
      \n\$ node todo.js complete <task_id>\
      \n\$ node todo.js uncomplete <task_id>\
      ');
  }
}

let called = process.argv.slice(2) //.join(" ")
//console.log(called);
manageCalled(called)
