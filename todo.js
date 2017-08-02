const ModelToDo = require('./model');
const ViewToDo = require('./view');

class ToDo{
  static command(com){
    let file = 'data.json';
    let data = ModelToDo.getData(file);
    let task = com.slice(1).join(' ');
    //console.log(typeof task);
    switch(com[0]){
      case 'help':
        ViewToDo.help();
        break;
      case 'list':
        ViewToDo.list(data);
        break;
      case 'add':
        data.push({task:task});
        let strData = JSON.stringify(data).split('[').join('[\n\t').split(',').join(',\n\t').split(']').join('\n]');
        //console.log(arrData)
        ModelToDo.writeData(file, strData);
        ViewToDo.add(task);
        break;
      case 'task':
        //console.log(task);
        let dt = 'Task not found!';
        if(task-1 < data.length){
          dt = task+'. '+JSON.stringify(data[parseInt(task)-1].task);
        }
        ViewToDo.find(dt);
        break;
      case 'delete':

        break;
      case 'complete':
        break;
      case 'uncomplete':
        break;
      default:
        ViewToDo.help();
    }
  }
}

let run = process.argv.slice(2);
ToDo.command(run);
