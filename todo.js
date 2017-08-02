const fs = require('fs')
const Model = require('./model')
const View = require('./view')

class Read{
  constructor(){
    this.tampung = []
  }
  static readFile(){
    let convert = Model.readFile('data.json')
    View.showList(convert)

  }
  static addData(inputAdd){

    let masukan = input.slice(1)
    let joining = masukan.join(" ")
    let oldData = Model.readFile('data.json')
    oldData.push({"id": oldData.length +1,"nama": joining, "Date": new Date() })
    //console.log(oldData);

    fs.writeFile('data.json', JSON.stringify(oldData), (err) => {
      if (err) throw err;
      console.log(`Added ${joining} From your ToDo List`);
    });
  }
  static delData(inputDel)
  {
    let masukan = input.slice(1)
    let joining = masukan.join(" ")
    //console.log(joining);
    let oldData = Model.readFile('data.json')
    //console.log(oldData.length);

    for(var i=0; i<oldData.length; i++)
    {
      if(joining == oldData[i].id)
      {
        console.log(`Deleted ${oldData[i].nama} From your ToDo List`);
        oldData.splice(i, 1)
      }
    }
    //console.log(oldData);

    fs.writeFile('data.json', JSON.stringify(oldData), (err) => {
      if (err) throw err;
      //console.log('The file has been Delete!');
    });
  }
  static findData(){
    let masukan = input.slice(1)
    let joining = masukan.join(" ")
    //console.log(joining);
    let oldData = Model.readFile('data.json')
    //console.log(oldData.length);

    for(var i=0; i<oldData.length; i++)
    {
      if(joining == oldData[i].id)
      {
        console.log(`${oldData[i].id} ${oldData[i].nama}`);
      }
    }
  }
  static completed(){
    let masukan = input.slice(1)
    let joining = masukan.join(" ")
    //console.log(joining);
    let oldData = Model.readFile('data.json')
    //console.log(oldData.length);

    for(var i=0; i<oldData.length; i++)
    {
      if(joining == oldData[i].id)
      {
        oldData[i].completed_date = new Date();
        oldData[i].completed = "[x]"
      }

    }
    console.log(oldData);
    fs.writeFile('data.json', JSON.stringify(oldData), (err) => {
      if (err) throw err;
      //console.log(`Added ${joining} From your ToDo List`);
    });
  }
  static uncompleted(){
    let masukan = input.slice(1)
    let joining = masukan.join(" ")
    //console.log(joining);
    let oldData = Model.readFile('data.json')
    //console.log(oldData.length);

    for(var i=0; i<oldData.length; i++)
    {
      if(joining == oldData[i].id)
      {
        oldData[i].completed = "[]"
      }

    }
    console.log(oldData);
    fs.writeFile('data.json', JSON.stringify(oldData), (err) => {
      if (err) throw err;
      //console.log(`Added ${joining} From your ToDo List`);
    });
  }
}

function controller()
{
  //console.log(input);
  switch (input[0]) {
    case "list" :
          let loadFile = Read.readFile()
      break;
    case "add":
          let addList = Read.addData()
      break;
    case "delete":
            let delList = Read.delData()
      break;
    case "find":
            let findList = Read.findData()
      break;
    case "completed":
            let completedList = Read.completed()
      break;
    case "uncompleted":
            let uncompletedList = Read.uncompleted()
      break;
    case "help":
    console.log(`
    =================================
               HELP PAGE
    =================================
    node todo.js
    node todo.js help
    node todo.js add <task_id>
    node todo.js delete <task_id>
    node todo.js complete <task_id>
    node todo.js uncomplete <task_id>
    ==================================\n`);
      break;
    default:
    console.log(`
    =================================
               HELP PAGE
    =================================
    node todo.js
    node todo.js help
    node todo.js add <task_id>
    node todo.js delete <task_id>
    node todo.js complete <task_id>
    node todo.js uncomplete <task_id>
    ==================================\n`);
  }
}


let data = process.argv
let input = data.slice(2)
controller();
