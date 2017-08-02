const fs = require('fs')

class Model {
  constructor() {}

  static readFile(file) {
    let data = fs.readFileSync(file, 'utf-8')
    let data_json = JSON.parse(data)
    // console.log(data_json);
    return data_json;
  }

  static addFile(file) {
    let data = fs.readFileSync(file, 'utf-8')
    // let data_json = JSON.parse(data)
    // let data = Model.readFile(file)
    // console.log(newData);
    let data_json = JSON.parse(data)
    let obj = {"id": data_json[data_json.length-1].id+1, "task": process.argv[3], "status": false}
    data_json.push(obj);
    console.log(`Added "${process.argv[3]}" to your TODO list`)
    fs.writeFile(file, JSON.stringify(data_json), (err) => {
      if(err) {throw err}
      else {}
    })
    // console.log(data_json);
    return data_json;
    // console.log(`Added "${process.argv[3]}" to your TODO list`)
  }

  static delFile(file) {
    let data = fs.readFileSync(file, 'utf-8')
    let data_json = JSON.parse(data)
    // console.log(inputJoin);
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      if(inputJoin == data[i].id) {
        data.splice(i,1)
      }
    }
    // console.log(data);
  }

} //end of Class


module.exports = Model
