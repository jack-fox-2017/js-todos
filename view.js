const fs = require('fs');

class ViewCookie {
  static showList(data) {
    for(let i=0; i< data.length;i++) {
      var sign = 0;
      if (data[i].complete == true) {
        sign = 'X';
      } else { sign = ' '}
      console.log(`${data[i].id}. [${sign}] ${data[i].content}`);
    }
  }

  static showListCreated(data, way) { // asc
  if (way == null || way == "asc") {
      data.sort(function(a, b){
      var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
      return dateA-dateB //sort by date ascending
    })
  } else {
    data.sort(function(a, b){
    var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
    return dateB-dateA //sort by date descending
    })
  }
  var number = 1;
  for(let i=0; i< data.length;i++) {
      var sign = 0;
      if (data[i].complete == true) {
        sign = 'X';
      } else { sign = ' '}
      console.log(`${number}. [${sign}] ${data[i].content}`);
      number++;
    }
  }

  static showListUncompleted(data, way) { // asc
    if (way == null || way == "asc") {
        data.sort(function(a, b){
        var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
        return dateA-dateB //sort by date ascending
      })
    } else {
      data.sort(function(a, b){
      var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
      return dateB-dateA //sort by date descending
      })
    }
    var number = 1;
    for(let i=0; i< data.length;i++) {
      var sign = 0;
      if (data[i].complete == false) {
        sign = ' ';
        console.log(`${number}. [${sign}] ${data[i].content}`);
        number++;
      }
    }
  }

  static showListCompleted(data, way) { // asc
    if (way == null || way == "asc") {
        data.sort(function(a, b){
        var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
        return dateA-dateB //sort by date ascending
      })
    } else {
      data.sort(function(a, b){
      var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
      return dateB-dateA //sort by date descending
      })
    }
    var number = 1;
    for(let i=0; i< data.length;i++) {
      var sign = 0;
      if (data[i].complete == true) {
        sign = 'X';
        console.log(`${number}. [${sign}] ${data[i].content}`);
        number++;
      }
    }
  }

  static showAdded(str){
    console.log(`Added "${str}" to your TODO list...`);
  }

  static showFind(data,n) {
    for(let i=0; i< data.length;i++) {
      if(data[i].id == n) {
        console.log(`${data[i].id}. ${data[i].content}`);
      }
    }
  }
  static showDeleted(data, n) {
    for(let i=0; i< data.length;i++) {
      if(data[i].id == n) {
      console.log(`Deleted "${data[i].content}" from your TODO list...`);
      }
    }
  }
  static showTagged(data, n, arr) {
    for(let i=0; i< data.length;i++) {
      if(data[i].id == n) {
      console.log(`Tagged task "${data[i].content}" with tags: ${arr}`);
      }
    }
  }
  static showFiltered(data, arr) {
    for(let i=0; i< data.length;i++) {
      for(let q=0; q< data[i].tag.length;q++) {
        if(data[i].tag[q] == arr) {
        console.log(`${data[i].id}. ${data[i].content} [${data[i].tag}]`);
        }
      }
    }
  }
  static showHelp() {
    console.log("$node todo.js \n node todo.js help \n node todo.js list \n node todo.js add <task_content> \n node todo.js task <task_id> \n node todo.js delete <task_id> \n node todo.js complete <task_id> \n node todo.js uncomplete <task_id>" );
  }
}

module.exports = ViewCookie;
