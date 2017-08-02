'use strict'

let fs = require('fs');

class Model {
  constructor() {
    this.data = [];
  }

  dataFile() {
    this.data = fs.readFileSync('data.json', 'utf8');
    this.data = JSON.parse(this.data)
    return this.data;
  }

  insertData(inputTask) {
    this.data.push(inputTask);
  }

  saveToFile() {
    fs.writeFile('data.json', JSON.stringify(this.data,null,2), (err) => {
      if (err) throw err;
    });
  }

  deleteData(task_id) {
    return this.data.splice(task_id, 1);
  }

  deleteAllDataFromFile() {
    this.data = [];
    fs.writeFile('data.json', '[]', (err) => {
      if (err) throw err;
    });
  }

}

module.exports = Model;
