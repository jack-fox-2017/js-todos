const fs = require('fs');

class ModelToDo{
  static getData(file){
    let obj = JSON.parse(fs.readFileSync(file, 'utf-8'));
    return obj;
  }
  static writeData(file, task){
    fs.writeFileSync(file, task);
  }
}

module.exports = ModelToDo;
