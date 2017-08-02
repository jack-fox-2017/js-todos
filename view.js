const Model = require('./model');
class View {
  constructor() {

  }

  static indeks(){
    return `
    $ node todo.js # will call help
    $ node todo.js help
    $ node todo.js list
    $ node todo.js find <task_id>
    $ node todo.js add <task_content>
    $ node todo.js delete <task_id>
    $ node todo.js complete <task_id>
    $ node todo.js uncomplete <task_id>
    $ node todo.js list:created asc|desc
    $ node todo.js list:complete asc|desc
    $ node todo.js list:uncomplete asc|desc
    $ node todo.js list:outstanding asc|desc
    $ node todo.js addTag <task_id> <your-first-tag your-second-tag>
    $ node todo.js findbyTag hobby -> hobby is the tag to find the task\n`
  }

  static list(data){
    let result = []
    for(let i = 0; i < data.length; i++){
      if(data[i].complete == true){
        result.push(`${data[i].id}. [v] ${data[i].task}`)
      } else {
        result.push(`${data[i].id}. [ ] ${data[i].task}`)
      }

    }
    return result.join('\n')
  }

  static find(id){
    let get = new Model()
    let getData = get.readFile()
    let result = []
    for(let i = 0; i < getData.length; i++){
      if(getData[i].id == id){
        result.push(`Data with ID ${getData[i].id} Found!!! ==> ${getData[i].task}`)
        // console.log(getData[i].id + id + '*********');

      }

    }
    // console.log(getData);
    return result.join()
  }

  static sortCreated(data, aod){
    if (aod == null || aod == "asc") {
        data.sort(function(a, b){
        var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
        return dateA-dateB
      })
    } else {
      data.sort(function(a, b){
      var dateA=new Date(a.created_date), dateB=new Date(b.created_date)
      return dateB-dateA
      })
    }

    let result = []
    for(let i = 0; i < data.length; i++){
      if(data[i].complete == true){
        result.push(`${data[i].id}. [v] ${data[i].task}`)
      } else {
        result.push(`${data[i].id}. [ ] ${data[i].task}`)
      }

    }
    return result.join('\n')

  }
  static sortCompleted(data, aod){
    if (aod == null || aod == "asc") {
        data.sort(function(a, b){
        var dateA=new Date(a.completed_date), dateB=new Date(b.completed_date)
        return dateA-dateB
      })
    } else {
      data.sort(function(a, b){
      var dateA=new Date(a.completed_date), dateB=new Date(b.completed_date)
      return dateB-dateA
      })
    }

    let result = []
    for(let i = 0; i < data.length; i++){
      if(data[i].complete == true){
        result.push(`${data[i].id}. [v] ${data[i].task}`)
      } else {
        result.push(`${data[i].id}. [ ] ${data[i].task}`)
      }

    }
    return result.join('\n')

  }

  static sortUncomplete(data, aod){
    if (aod == null || aod == "asc") {
        data.sort(function(a, b){
        var dataA=a.complete, dataB=b.complete
        return dataA-dataB
      })
    } else {
      data.sort(function(a, b){
      var dataA = a.complete, dataB = b.complete
      return dataB-dataA
      })
    }

    let result = []
    for(let i = 0; i < data.length; i++){
      if(data[i].complete == true){
        result.push(`${data[i].id}. [v] ${data[i].task}`)
      } else {
        result.push(`${data[i].id}. [ ] ${data[i].task}`)
      }

    }
    return result.join('\n')

  }

  static findbyTag(data, tag){

    let result = []
    for(let i = 0; i < data.length; i++){
      if(data[i].tag.includes(tag)){
        if(data[i].complete == true){
          result.push(`${data[i].id}. [v] ${data[i].task}`)
        } else {
          result.push(`${data[i].id}. [ ] ${data[i].task}`)
        }
      }
    }
    return result.join('\n')

  }


}

module.exports = View;
