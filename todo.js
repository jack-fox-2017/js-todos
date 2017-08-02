const ModelToDo = require('./model');
const ViewToDo = require('./view');

class ToDo{
  static command(com){
    let file = 'data.json';
    let data = ModelToDo.getData(file);
    let task = com.slice(1).join(' ');
    let info = 'Task not found!';
    switch(com[0]){
      case 'help':
        ViewToDo.help();
        break;
      case 'list':
        ViewToDo.list(data);
        break;
      case 'add':
        data.push({task:task,isDone:false});
        let jsonAdd = this.json(data);
        ModelToDo.writeData(file, jsonAdd);
        ViewToDo.add(task);
        break;
      case 'task':
        if(task-1 > 0 && task-1 < data.length){
          info = task+'. '+JSON.stringify(data[parseInt(task)-1].task);
        }else{
          ViewToDo.info(info);}
        break;
      case 'delete':
        if(task-1 > 0 && task-1 < data.length){
          let rmTask = data.splice(task-1,1);
          let jsonRm = this.json(data);
          ModelToDo.writeData(file, jsonRm);
          info = 'Removed "'+rmTask[0].task+'" to your TODO list...';
        }else{
          ViewToDo.info(info);}
        break;
      case 'complete':
        if(task-1 > 0 && task-1 < data.length){
          data[task-1].isDone = true;
          let jsonComp = this.json(data);
          ModelToDo.writeData(file, jsonComp);
          ViewToDo.list(data);
        }else{
          ViewToDo.info(info);}
        break;
      case 'uncomplete':
        if(task-1 > 0 && task-1 < data.length){
          data[task-1].isDone = false;
          let jsonUncom = this.json(data);
          ModelToDo.writeData(file, jsonUncom);
          ViewToDo.list(data);
        }else{
          ViewToDo.info(info);}
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
