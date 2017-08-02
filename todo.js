const ModelToDo = require('./model');
const ViewToDo = require('./view');

class ToDo{
  static command(com){
    let file = 'data.json';
    let data = ModelToDo.getData(file);
    let task = com.slice(1).join(' ');
    let info = 'Task not found!';
    let filter = com[0].split(':');
    //console.log(filter[1]);
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
        let complete = this.sortByComplete(data,true);
        this.sortByDate(complete, task);
        break;
      case 'list:uncomplete':
        let uncomplete = this.sortByComplete(data,false);
        this.sortByDate(uncomplete, task);
        break;
      case 'add':
        let tag=[];
        data.push({task:task,isDone:false,date:new Date(),tag:tag});
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
      case 'tag':
        let arrTag = task.split(' ');
        for(let i=1; i<arrTag.length; i++){
          data[arrTag[0]-1].tag.push(new Tag(arrTag[i]));
        }
        let tagData = this.json(data);
        ModelToDo.writeData(file, tagData);
        arrTag.splice(0,1);
        let tagInfo = 'Tagged task '+JSON.stringify(data[parseInt(task)-1].task)+' with tags: '+arrTag.join(', ');
        ViewToDo.info(tagInfo);
        break;
      case filter[0]+':'+filter[1]:
        let filterData = this.filter(data, filter[1]);
        ViewToDo.list(filterData);
        break;
      default:
        ViewToDo.help();
    }
  }
  static json(data){
    let strData = JSON.stringify(data, null, 2);
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
  static sortByComplete(data, bool){
    let complete = [];
    for(let i=0; i<data.length; i++){
      if(data[i].isDone == bool){
        complete.push(data[i]);
      }
    }
    return complete;
  }
  static filter(data, tag){
    let tags = [];
    for(let i=0; i<data.length; i++){
      for(let j=0; j<data[i].tag.length; j++){
        if(data[i].tag[j].name == tag){
          tags.push(data[i]);
        }
      }
    }
    return tags;
  }
}

class Tag{
  constructor(name){
    this.name = name;
  }
}

let run = process.argv.slice(2);
ToDo.command(run);
