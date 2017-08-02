const fs = require('fs');

class ModelToDo{
  static getData(file){
    let obj = JSON.parse(fs.readFileSync(file, 'utf-8'));
    //console.log(typeof obj);
    return obj;
  }
  static writeData(file, task){
    let data = this.getData(file);
    //console.log(typeof data);
    data.push({"task":task});
    //console.log(typeof data);
    fs.writeFileSync(file, JSON.stringify(data));
  }
}

module.exports = ModelToDo;
