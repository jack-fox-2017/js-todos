const fs = require('fs');

let data = fs.readFileSync('data.json','utf-8');
let data_json = JSON.parse(data);

class ToDo {

   manageCommand(command){
    switch(command[0]){
      case 'help':
      console.log(`$ node todo.js`)
      console.log(`$ node todo.js help`)
      console.log(`$ node todo.js list`)
      console.log(`$ node todo.js add <task_content>`)
      console.log(`$ node todo.js task <task_id>`)
      console.log(`$ node todo.js delete <task_id>`)
      console.log(`$ node todo.js complete <task_id>`)
      console.log(`$ node todo.js uncomplete <task_id>`);break;
      case 'list':
      this.list();break;
      case 'add':
      this.add();break;
      case 'task':
      this.find();break;
      case 'delete':
      this.delete();break;
      case 'complete':;break;
      case 'uncomplete':;break;
      default:
      console.log(`$ node todo.js`)
      console.log(`$ node todo.js help`)
      console.log(`$ node todo.js list`)
      console.log(`$ node todo.js add <task_content>`)
      console.log(`$ node todo.js task <task_id>`)
      console.log(`$ node todo.js delete <task_id>`)
      console.log(`$ node todo.js complete <task_id>`)
      console.log(`$ node todo.js uncomplete <task_id>`);break;
    }
  }

  list(){

    for(let i = 0; i < data_json.length; i++){
      console.log(`${i+1}. ${data_json[i].task}`);
    }
  }

  add(){
    let addArr = command.slice(1);
    let addArrJoin = addArr.join('');
    let obj = {};
    obj.task = addArrJoin;
    data_json.push(obj);
    fs.writeFileSync('data.json',JSON.stringify(data_json, null,2),'utf-8');
    console.log(`Added "${obj.task}" to your TODO list...`);
  }

  find(){
    let addArr = command.slice(1);
    let addArrJoin = addArr.join('');
    console.log(`${addArrJoin}. ${data_json[addArrJoin-1].task}`)
    //console.log(addArrJoin);
  }

  delete(){
    let addArr = command.slice(1);
    let addArrJoin = addArr.join('');
    let dataDel = data_json.splice(addArrJoin-1,1);
    fs.writeFileSync('data.json',JSON.stringify(data_json, null,2),'utf-8');

    console.log(`Deleted "${dataDel[0].task}" from your TODO list...`);

  }
}

let run = process.argv;
let command = run.slice(2);

let tes = new ToDo();
tes.manageCommand(command);
//tes.add();
//tes.find();
//tes.delete();
