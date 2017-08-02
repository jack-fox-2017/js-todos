'use strict'
const fs = require('fs');
// ===============================================================Class CONTROLER

class Controler {
  constructor(param) {
    this.model = new Model()
    this.view = new View()
    this.command = param
  }

  setup(){
    switch(this.command[2]) {
      case 'help':   {
        console.log(" node todo.js",'\n',
                    "node todo.js help",'\n',
                    "node todo.js list",'\n',
                    "node todo.js add <task_content>",'\n',
                    "node todo.js task <task_id>",'\n',
                    "node todo.js delete <task_id>",'\n',
                    "node todo.js complete <task_id>",'\n',
                    "node todo.js uncomplete <task_id>",
                  );
        break;
      }

      case 'list':   {
        this.list(this.model.data)
        break;
      }

      case 'add':   {
        this.add(this.command.slice(3, this.command.length).join(" "))
        break;
      }

      case 'delete':   {
        this.delete(this.model.data, this.command[3])
        break;
      }

      case 'task':   {
        this.task(this.model.data, this.command[3])
        break;
      }

      default:  {console.log(" node todo.js",'\n',
                              "node todo.js help",'\n',
                              "node todo.js list",'\n',
                              "node todo.js add <task_content>",'\n',
                              "node todo.js task <task_id>",'\n',
                              "node todo.js delete <task_id>",'\n',
                              "node todo.js complete <task_id>",'\n',
                              "node todo.js uncomplete <task_id>",
                ); }
    }
  }

  list(data){
   for (var i = 0; i < data.length; i++) {
    this.view.list(data[i])
   }
 }

  add(input){
    this.model.data.push({id:this.model.data.length+1, task:input})
    this.model.add(this.model.data)
    this.view.add(this.model.data[this.model.data.length-1])
   }

 task(data, id){
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        this.view.task(data[i])
      }
    }
 }

  delete(data, id){
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        this.view.delete(data[i].task)
        data.splice(i, 1)
        this.model.delete(data)
      }
    }
  }

}

// ===============================================================Class VIEW

class View {
  constructor() {
  }

  add(content){
    // console.log(`${content.id}`);
    console.log(content);
  }

  list(data){
    console.log(`${data.id} ${data.task}`);
  }

  delete(data){
    console.log(`data ${data} sudah terhapus`);
  }

  task(data){
    console.log(`data yang anda cari adalah ${data.id}. ${data.task}`);
  }

}
// ===============================================================Class MODEL
class Model {
  constructor() {
    this.file = 'data.json'
    this.data = JSON.parse(fs.readFileSync(this.file, 'utf-8'))
  }

  add(data){
    fs.writeFileSync(this.file, JSON.stringify(data, null, 2), 'utf-8' )
  }

  delete(data){
    fs.writeFileSync(this.file, JSON.stringify(data, null, 2), 'utf-8' )
  }

}
// let anu = Cookie.find()
// console.log(anu);
let run = process.argv
// console.log(run);
let input = new Controler(run)
let expression = run.slice(2)
input.setup()
// controller()
