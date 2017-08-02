const fs = require('fs')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataJson = JSON.parse(data)

class TodoModel {

  static read() {
    return dataJson
  }

  static add(strTask) {
    let obj = {
      id: dataJson[dataJson.length-1].id+1,
      task: strTask,
      isComplete: false
    }
    dataJson.push(obj)
    fs.writeFileSync('./data.json', JSON.stringify(dataJson))
  }

  static find(id) {
    let arr = []
    for (let i=0; i<dataJson.length; i++) {
      if (id == dataJson[i].id) {
        arr.push(dataJson[i])
      }
    }
    return arr
  }

  static delete(id) {
    let arr = []
    for (let i=0; i<dataJson.length; i++) {
      if (id != dataJson[i].id) {
        arr.push(dataJson[i])
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(arr))
  }

  static complete(id) {
    let arr = []
    for (let i=0; i<dataJson.length; i++) {
      if (id == dataJson[i].id) {
        dataJson[i].isComplete = true
      }
      arr.push(dataJson[i])
    }
    fs.writeFileSync('./data.json', JSON.stringify(arr))
  }

  static uncomplete(id) {
    let arr = []
    for (let i=0; i<dataJson.length; i++) {
      if (id == dataJson[i].id) {
        dataJson[i].isComplete = false
      }
      arr.push(dataJson[i])
    }
    fs.writeFileSync('./data.json', JSON.stringify(arr))
  }

}

module.exports = TodoModel
