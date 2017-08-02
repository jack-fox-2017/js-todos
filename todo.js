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
      case 'list:created':
        this.sortByDate(data, task);
        break;
      case 'list:completed':
        //console.log(data.sort(function(a){return a.splice(a.isDone)}));
        let complete = this.sortByComplete(data);
        this.sortByDate(complete, task);
        break;
      case 'list:uncomplete':
        let uncomplete = this.sortByUncomplete(data);
        this.sortByDate(uncomplete, task);
        break;
      case 'add':
        data.push({task:task,isDone:false,date:new Date(),tag:[]});
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
    let strData = JSON.stringify(data).split('\t[').join('[\n\t').split(',').join(',\n\t').split('\r]').join('\n]');
    return strData;
  }
  static sortByDate(data, task){
    if(task == 'asc'){
      data.sort(function(a, b) {return new Date(a.date).getTime() - new Date(b.date).getTime();});
      ViewToDo.list(data);
    }
    else if(task == 'desc'){
      data.sort(function(a, b) {return new Date(b.date).getTime() - new Date(a.date).getTime();});
      ViewToDo.list(data);
    }else{
      ViewToDo.info('Use command asc / desc');
    }
  }
  static sortByComplete(data){
    let complete = [];
    for(let i=0; i<data.length; i++){
        if(data[i].isDone){
          complete.push(data[i]);
        }
    }
    return complete;
  }
  static sortByUncomplete(data){
    let uncomplete = [];
    for(let i=0; i<data.length; i++){
        if(!data[i].isDone){
          uncomplete.push(data[i]);
        }
    }
    return uncomplete;
  }
}

let run = process.argv.slice(2);
ToDo.command(run);
