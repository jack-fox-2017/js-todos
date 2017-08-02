const fs = require('fs')
const data = fs.readFileSync('./data.json', 'utf-8')
const dataJson = JSON.parse(data, null, 2)

class TodoModel {

  static read() {
    // let dataJson = JSON.parse(data)
    return dataJson
  }

  static add(strTask,content) {
    let obj = {
      id: dataJson[dataJson.length-1].id+1,
      task: strTask,
			completed: false,
			content: content,
			completeDate: null,
			createdDate: new Date(),
      tags: '[ ]'
    }
    dataJson.push(obj)
    fs.writeFile('./data.json', JSON.stringify(dataJson), (err) => {
      if (err) {throw err}
      else {console.log(`Added "${obj.task}" to your TODO list...`);}
    })
  }

  static find(){
    for (var i = 0; i < dataJson.length; i++) {
      if (dataJson[i].id == process.argv[3]) {
        console.log(`${dataJson[i].id}. ${dataJson[i].task}`);
      }
    }
  }

  static deleting(id) {
    for (let i = 0; i < dataJson.length; i++) {
      if (dataJson[i].id == id ) {
        dataJson.splice(i, 1);
        console.log(`Deleted data with id : ${id} from your TODO list...`);
        break;
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(dataJson))
  }

  static completed(id){
    for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].id == id) {
          dataJson[i].createdDate = new Date()
          dataJson[i].completed = true
          dataJson[i].tags = '[x]'
          console.log('oke');
        }
      }
      fs.writeFileSync('./data.json', JSON.stringify(dataJson))
  }

  static uncompleted(id){
    for (let i = 0; i < dataJson.length; i++) {
        if (dataJson[i].id == id) {
          dataJson[i].createdDate = new Date()
          dataJson[i].completed = false
          dataJson[i].tags = '[ ]'
          console.log('oke uncompleted');
        }
      }
      fs.writeFileSync('./data.json', JSON.stringify(dataJson))
  }

}

module.exports = TodoModel
