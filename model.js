let fs = require('fs')

class ModelTodoList{
  //read file for LIST
  static readAFile(file){
    let data = fs.readFileSync(file , 'utf-8')
    let data_json = JSON.parse(data)
    return data_json
  }
  //add data
  static addList(newData, input){
    let file = fs.writeFile('data.json', JSON.stringify(newData,null,2), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`Succes ADD Task '${input}' to List`);
    })
  }

  static deleteList(id){
    let file = fs.writeFile('data.json', JSON.stringify(id,null,2), 'utf-8', (err) => {
      if (err) throw err;
    })
  }

  static completeList(id){
    let file = fs.writeFile('data.json', JSON.stringify(id,null,2), 'utf-8', (err) => {
      if (err) throw err;
    })
  }

  static uncompleteList(id){
    let file = fs.writeFile('data.json', JSON.stringify(id,null,2), 'utf-8', (err) => {
      if (err) throw err;
    })
  }
}

module.exports = ModelTodoList
