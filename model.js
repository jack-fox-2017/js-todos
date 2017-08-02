const fs = require('fs');
const View = require('./view');

class Model{
  constructor(){
    this.file = './data.json'
  }

  readFile(){
    let data = JSON.parse(fs.readFileSync(this.file, 'utf8'))
    return data
  }

  addData(str){
    var allData = [];

    let data = this.readFile()
    for (let i=0; i<data.length; i++) {
      allData.push(data[i])
    }
    var newId = data.length+1
    var newData = {}
    newData['id'] = newId;
    newData['task'] = str;
    newData['complete'] = false;
    newData['completed_date'] = null;
    newData['tag'] = [];
    newData['created_date'] = new Date();
    allData.push(newData);
    fs.writeFileSync('data.json',JSON.stringify(allData, null, 2));
  }

  deleteData(iddelete){
    var allData = [];
    let data = this.readFile()
    for (let i=0; i<data.length; i++) {
      // console.log(iddelete + '=======' + data[i].id);
      if(iddelete != data[i].id){
        allData.push(data[i])
      }
    }
    fs.writeFileSync('data.json',JSON.stringify(allData, null, 2));
  }

  complete(id){
    var allData = [];
    let data = this.readFile()
    for (let i=0; i<data.length; i++) {
      // console.log(iddelete + '=======' + data[i].id);
      if(id == data[i].id){
        data[i].complete = true;
        data[i].completed_date = new Date();
        allData.push(data[i])
      } else {
        allData.push(data[i])
      }
    }
    fs.writeFileSync('data.json',JSON.stringify(allData, null, 2));
  }

  uncomplete(id){
    var allData = [];
    let data = this.readFile()
    for (let i=0; i<data.length; i++) {
      // console.log(iddelete + '=======' + data[i].id);
      if(id == data[i].id){
        data[i].complete = false;
        data[i].completed_date = new Date();
        allData.push(data[i])
      } else {
        allData.push(data[i])
      }
    }
    fs.writeFileSync('data.json',JSON.stringify(allData, null, 2));
  }

  addTag(id, arr){
    var allData = [];
    let data = this.readFile()
    for (let i=0; i<data.length; i++) {
      if(id == data[i].id){
        data[i].tag = arr;
        allData.push(data[i])
      } else {
        allData.push(data[i])
      }
    }
    fs.writeFileSync('data.json',JSON.stringify(allData, null, 2));
  }

  sortCreated(){
    let data = this.readFile()
    return data
  }

}

module.exports = Model;
