const ModelToDo = require('./model');
const ViewToDo = require('./view');

class ToDo{
  static command(com){
    let file = 'data.json';
    let data = ModelToDo.getData(file);
    let task = com.slice(1).join(' ');
    switch(com[0]){
      case 'help':
        ViewToDo.help();
        break;
      case 'list':
        ViewToDo.list(data);
        break;
      case 'add':
        data.push({task:task});
        let jsonAdd = this.json(data);
        ModelToDo.writeData(file, jsonAdd);
        ViewToDo.add(task);
        break;
      case 'task':
        let dt = 'Task not found!';
        if(task-1 < data.length){
          dt = task+'. '+JSON.stringify(data[parseInt(task)-1].task);
        }
        ViewToDo.find(dt);
        break;
      case 'delete':
        let rmTask = data.splice(task-1,1);
        let jsonRm = this.json(data);
        ModelToDo.writeData(file, jsonRm);
        ViewToDo.rm(JSON.stringify(rmTask[0].task));
        break;
      case 'complete':
        break;
      case 'uncomplete':
        break;
      default:
        ViewToDo.help();
    }
  }
  static json(data){
    let strData = JSON.stringify(data).split('[').join('[\n\t').split(',').join(',\n\t').split(']').join('\n]');
    return strData;
  }
}

let run = process.argv.slice(2);
ToDo.command(run);
