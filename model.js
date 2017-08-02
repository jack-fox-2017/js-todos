const fs = require('fs')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataJson = JSON.parse(data)

class TodoModel {

  static read() {
    let dataJson = JSON.parse(data)
    return dataJson
  }

  static add(strTask) {
    let obj = {
      id: dataJson[dataJson.length-1].id+1,
      task: strTask
    }
    dataJson.push(obj)
    fs.writeFile('./data.json', JSON.stringify(dataJson), (err) => {
      if (err) {throw err}
      else {console.log(`Added "${obj.task}" to your TODO list...`);}
    })
  }

}

module.exports = TodoModel
