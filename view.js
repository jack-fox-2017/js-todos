var ModelTodoList = require('./model')

class viewList{
  //show input LIST
  static showList(data){
    for (var i = 0; i < data.length; i++) {
      console.log(`${i+1}. ${data[i].completed} ${data[i].content}`);
    }
  }

  static findList(id){
    let data = ModelTodoList.readAFile('./data.json')
    for (var i = 0; i < data.length; i++) {
      if(data[i].id == id){
        console.log(`${data[i].id}. ${data[i].content}`);
      }
    }
  }


}

module.exports = viewList
