const fs  = require('fs')
// const Todo = require('./todo.js')
// const Controller = require ('./todo.js')
const Model = require('./model');

class View {

  static list(data){
    // let data = Model.readData()
    let tmp =[];
    for (let i = 0; i < data.length; i++) {
      if (data[i].complete == true){
      tmp.push(i+1 +'. '+'[V] '+ `${data[i].task}`)
      }
      else {
      tmp.push(i+1 +'. '+'[ ] '+ `${data[i].task}`)
      }
    }
    return tmp.join('\n')
  }

  static task(){
    var arr = View.list(Model.readData()).split('\n')
    let id = process.argv[3]
    return arr[id-1]
  }

}


// console.log(View.list());
module.exports = View
