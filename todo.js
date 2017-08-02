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

  default:

}
