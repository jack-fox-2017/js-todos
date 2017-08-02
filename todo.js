'use strict'

const Controller = require('./controller.js');

let inputCommand = process.argv.slice(2);
let task = inputCommand[0];
let inputTask = inputCommand.splice(1).join(' ')
// console.log(inputTask);

switch (task) {
  case 'help':
    Controller.help();
    // console.log('tes');
    break;
  case 'list':
  let showList = new Controller()
    showList.getData();
    break;
  case 'add':
    let addData = new Controller()
    addData.insertData(inputTask)
  break;
  case 'delete':
  let deleteData = new Controller()
  deleteData.deleteData(inputTask)
    break;
  case 'delete:all':
  let deleteAllData = new Controller()
  deleteAllData.deleteAllDataFromFile(inputTask)
  break;
  case 'complete':
    let complete = new Controller();
    complete.complete(inputTask)
  break;
  case 'uncomplete':
    let uncomplete = new Controller();
    uncomplete.uncomplete(inputTask)
  break;
  case 'detail':
    let detailData = new Controller();
    detailData.getDataDetail(inputTask)
    break;
  case 'list:complete':
    let listComplete = new Controller();
    listComplete.sortTasksByCompletedTime(task)
    break;
  case 'tag':
  let tag = new Controller()
  tag.tagTask(inputTask);
  break;
  case 'filter':
    let filler = new Controller();
    filler.filterTask(task.split(':')[1]);
    break;
  default:

}
