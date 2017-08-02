"use strict"

const Model = require("./model");
const View = require("./view")
let fs = require('fs');

class Controller {
  constructor(){
  }

  ambilData() {
    let ambil = new Model();
    let data = ambil.dataJson();
    View.tampilData(data);
  }

  insert(inputTambah) {
    let tambahTask = new Model();
    tambahTask.data = tambahTask.dataJson();
    tambahTask.insert({task: inputTambah, complete:false, time_created: new Date(),time_completed: false, tag: []})
    tambahTask.saveToFile();
    console.log('Task berhasil di masuk kan');
  }

  static help() {
    View.showHelp('');
    View.showHelp('menu node todo.js');
    View.showHelp('------------------');
    View.showHelp('node todo.js help');
    View.showHelp('node todo.js list');
    View.showHelp('node todo.js add <task_content>');
    View.showHelp('node todo.js task <task_id>');
    View.showHelp('node todo.js delete <task_id>');
    View.showHelp('node todo.js complete <task_id>');
    View.showHelp('node todo.js uncomplete <task_id>');
  }

  // deleteData(inputTambah) {
  //   inputTambah = parseInt(inputTambah);
  //   if (!Number.isInteger(inputTambah)) {
  //     Controller.falseInput();
  //     return false;
  //   }
  //   inputTambah -= 1;
  //
  //   let hapusData = new Model();
  //   hapusData.data = hapusData.dataJson();
  //   let hapusD = hapusData.hapusDat(inputTambah);
  //
  //   if(hapusD) {
  //     hapusData.saveToFile();
  //     console.log(`sukses hapus data ${inputTambah+1}`);
  //   }
  // }

}

module.exports = Controller
