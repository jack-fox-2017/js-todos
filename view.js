const fs = require('fs')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataJson = JSON.parse(data)

class TodoView {

  static help() {
    console.log('> node todo.js help (show help)\n> node todo.js list (show task list)\n> node todo.js add <task_content> (add task)\n> node todo.js task <task_id> (show task by id)\n> node todo.js delete <task id> (delete task)\n> node todo.js complete <task id> (...)\n> node todo.js uncomplete <task id> (...)\n ');
  }

  static list(data) {
    console.log('Task List: ');
    // console.log(data);
    for (let i=0; i<data.length; i++) {
      console.log(data[i].id +'. '+data[i].tags +' '+data[i].task + ' status: ' + data[i].completed + ' Created: ' +data[i].createdDate);
    }
    fs.writeFileSync('./data.json', JSON.stringify(dataJson))
  }

}

module.exports = TodoView
