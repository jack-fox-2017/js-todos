let fs = require('fs');
const Model = require('./model.js');
const View = require('./view.js')

class Controller {
  constructor() {

  }

  insertData(inputTask) {
    let addData = new Model();
    addData.data = addData.dataFile();
    addData.insertData({task: inputTask, complete: false, time_created: new Date(), time_completed: false, tag: []});
    addData.saveToFile();
    View.successaddData(`${inputTask} Success Add Data`);
  }

  deleteData(task_id) {
    task_id = parseInt(task_id);
    if (!Number.isInteger(task_id)) {
      Controller.falseInput();
      return false;
    }
    task_id -= 1;

    let deleteData = new Model();
    deleteData.data = deleteData.dataFile();
    let deleteNoId = deleteData.deleteData(task_id);

    if (deleteNoId) {
      deleteData.saveToFile();
      View.successDeleteData(`Task No. ${task_id+1} Deleted Data in to do List`);
    }
  }

  deleteAllDataFromFile() {
    let deleteAllData = new Model();
    deleteAllData.deleteAllDataFromFile();
    View.deleteAllDataFromFile(`Deleted All Data in to do List. Empty List`);
  }

  getData() {
    let getData = new Model();
    let data = getData.dataFile();
    View.showData(data);
  }

  static help() {
    View.showHelp('|||||||||||||||||||||||||||||||  HELP  |||||||||||||||||||||||||||||||');
    View.showHelp('APLIKASI TO DO LIST');
    View.showHelp('1. Command (help) untuk help cara menggunakan aplikasi TO DO');
    View.showHelp('2. Command add untuk menambahkan task')
    View.showHelp('3. Command delete No Task untuk mengahapus task di TO DO List')
  }
}

module.exports = Controller
