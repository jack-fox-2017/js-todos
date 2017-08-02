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
    View.successDeleteAllData(`Deleted All Data in to do List. Empty List`);
  }

  getData() {
    let getData = new Model();
    let data = getData.dataFile();
    View.showData(data);
  }

  getDataDetail(task_id) {
    let getDataTask = new Model();
    let dataTask = getDataTask.dataFileDetail(task_id);
    View.showDataTask(dataTask,task_id);
  }

  tagTask(specific) {
    let specificId = parseInt(specific[0]);
    if (!Number.isInteger(specificId)) {
      Controller.falseInput();
      return false;
    }
    specificId -= 1;
    let tag = specific.split(' ').splice(1);

    let tagging = new Model();
    tagging.dataFile();
    tagging.tagData(specificId, tag);
    tagging.saveToFile();
  }

  sortTasksByCreationTime(task) {
    let sortCreate = new Model();
    sortCreate.dataFile();
    sortCreate.sortDataByCreationTime(task);
    sortCreate.saveToFile();

    View.showSortedByCreationTime(sortCreate.data);
  }

  sortTasksByCompletedTime(task) {
    let sortCompleted = new Model();
    sortCompleted.dataFile();
    sortCompleted.sortDataByCompletedTime(task);
    sortCompleted.saveToFile();

    View.showSortedByCompletedTime(sortCompleted.data);
  }

  complete(task_id) {
    task_id = parseInt(task_id);
    if (!Number.isInteger(task_id)) {
      Controller.falseInput();
      return false;
    }
    task_id -= 1;

    let completeTaskId = new Model();
    completeTaskId.dataFile();
    let complete = completeTaskId.changeToComplete(task_id);

    if (complete) {
      completeTaskId.saveToFile();
      View.successCompleteTask(`Nomor ${task_id+1} Done`);
    }
  }

  uncomplete(task_id) {
    task_id = parseInt(task_id);
    if (!Number.isInteger(task_id)) {
      Controller.falseInput();
      return false;
    }
    task_id -= 1;

    let uncompleteTaskId = new Model();
    uncompleteTaskId.dataFile();
    let isCanUncomplete = uncompleteTaskId.changeToUncomplete(task_id);

    if (isCanUncomplete) {
      uncompleteTaskId.saveToFile();
      View.successUncompleteTask(`Nomor ${task_id+1} Change To Uncomplete`);
    }
  }

  filterTask(specific) {
    let filter = new Model();
    filter.dataFile();
    let filtered = filter.data;
    View.showFilterList(filter, specific);
  }

  static falseInput() {
    View.showFalseInput("Wrong Typing");
  }

  static help() {
    View.showHelp('|||||||||||||||||||||||||||||||  HELP  |||||||||||||||||||||||||||||||');
    View.showHelp('APLIKASI TO DO LIST');
    View.showHelp('1. Command (help) untuk help cara menggunakan aplikasi TO DO');
    View.showHelp('2. Command add untuk menambahkan task')
    View.showHelp('3. Command delete No Task untuk mengahapus task di TO DO List')
    View.showHelp('4. Command list untuk melihat semua list')
    View.showHelp('5. Command list:complete untuk melihat task yang sudah selsai')
  }
}

module.exports = Controller
