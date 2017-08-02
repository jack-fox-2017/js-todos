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

  detailDataFile(task_id) {
    this.data = fs.readFileSync('data.json', 'utf8');
    this.data = JSON.parse(this.data)
    return this.data[task_id];
  }

  dataFileDetail(task_id) {
    this.data = fs.readFileSync('data.json', 'utf8');
    this.data = JSON.parse(this.data)
    return this.data[task_id-1];
  }

  tagData(taskId, tags) {
    for (let j = 0; j < tags.length; j++) {
      this.data[taskId].tag.push(tags[j]);
    }
  }

  changeToComplete(task_id) {
    this.data[task_id].complete = true;
    this.data[task_id].time_completed = new Date();
    return true;
  }

  changeToUncomplete(task_id) {
    this.data[task_id].complete = false;
    this.data[task_id].time_completed = false;
    return true;
  }

  sortDataByCompletedTime(task) {
    if (task === 'description')
      this.data.sort((a,b) => new Date(b.time_completed) > new Date(a.time_completed));
    else
      this.data.sort((a,b) => new Date(b.time_completed) < new Date(a.time_completed));
  }

  sortDataByCreatTime(task) {
    if (task === 'description')
      this.data.sort((a,b) => new Date(b.time_created) > new Date(a.time_created));
    else
      this.data.sort((a,b) => new Date(b.time_created) < new Date(a.time_created));
  }

}

module.exports = Model;
