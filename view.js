class ViewToDo{
  static help(){
    console.log('$ node todo.js help \n\
    \r$ node todo.js list\n\
    \r$ node todo.js list:created <asc/desc>\n\
    \r$ node todo.js list:completed <asc/desc>\n\
    \r$ node todo.js list:uncompleted <asc/desc>\n\
    \r$ node todo.js add <task_content>\n\
    \r$ node todo.js task <task_id>\n\
    \r$ node todo.js delete <task_id>\n\
    \r$ node todo.js tag <tag_name><tag_name2>...<tag_name_N>\n\
    \r$ node todo.js complete <task_id>\n\
    \r$ node todo.js uncomplete <task_id>\
    \r$ node todo.js tag:<tag_name>\
    ');
  }
  static list(data){
    for(let i=0; i<data.length; i++){
      let xmark = ' ';
      if(data[i].isDone){
        xmark='x';
      }
      let tag=[];
      for(let j=0; j<data[i].tag.length; j++){
        tag.push(data[i].tag[j].name);
      }
      console.log(i+1+'.'+' ['+xmark+'] '+data[i].task+' ['+tag.join(', ')+']');
    }
  }
  static add(task){
    console.log('Added "'+task+'" to your TODO list...');
  }
  static info(strInfo){
    console.log(strInfo);
  }
}

module.exports = ViewToDo;
