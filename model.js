const fs = require('fs');

class ModelToDo{
  static getData(file){
    let obj = JSON.parse(fs.readFileSync(file, 'utf-8'));
    //console.log(typeof obj);
    return obj;
  }
  static writeData(file, task){
    fs.writeFileSync(file, task);
  }
}

module.exports = ModelToDo;
