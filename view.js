class View {
  constructor() {

  }
  help() {
    console.log('node todo.js help');
    console.log('node todo.js add <data>');
    console.log('node todo.js list');
    console.log('node todo.js delete <data_number>');
    console.log('node todo.js completed <data_number>');
    console.log('node todo.js uncompleted <data_number>');
    console.log('node todo.js mayday');
    console.log('node todo.js list:created <asc/desc>');
    console.log('node todo.js list:completed <asc/desc>');
    console.log('node todo.js tag <data_number> <tag_name1> <tag_name2> ...');
    console.log('node todo.js filter: <tag_name>');
  }

  static list(param) {
    for (var i = 0; i < param.length; i++) {
      if (param[i].status == true) {
        console.log(`${i + 1}. [X] ${param[i].task}`)
      } else {
        console.log(`${i + 1}. [ ] ${param[i].task}`)
      }
    }
  }

  static find(param, num) {
    for (var i = 0; i < param.length; i++) {
      if (param[i].id == num) {
        console.log(`${param[i].id}. ${param[i].task}`);
      }
    }
  }

  static sortCreate(param) {
    for (var i = 0; i < param.length; i++) {
      if (param[i].status == true) {
        console.log(`${i + 1}. [X] ${param[i].task}`);
      } else {
        console.log(`${i + 1}. [ ] ${param[i].task}`);
      }
    }
  }
  static sortCompleted(param) {
    for (var i = 0; i < param.length; i++) {
      if (param[i].status) {
        console.log(`${i + 1}. [X] ${param[i].task}`);
      }
    }
  }

  static filter(param, data) {
    for (var i = 0; i < param.length; i++) {
      if (param[i].tag.includes(data.join())) {
        if (param[i].status == true) {
          console.log(`${i + 1}. [X] ${param[i].task} [${param[i].tag.join(', ')}]`)
        } else {
          console.log(`${i + 1}. [ ] ${param[i].task} [${param[i].tag.join(', ')}]`)
        }
      }
    }
  }
}

//test

module.exports = {
  View
}