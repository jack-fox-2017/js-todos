class View {
  static dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

  static showTag(data){
    console.log(data);
  }

  static showFilteTag(dataJSON){
    for (var i = 0; i < dataJSON.length; i++) {
      var mark = dataJSON[i][`status`] !== 0?'X':' '
      var temp =[]
      for (let j = 0; j < dataJSON[i][`tag`].length; j++) {
        temp.push(dataJSON[i][`tag`][j]['_tag'])
      }
      console.log(`${dataJSON[i][`id`]}. [${mark}] ${dataJSON[i][`task`]} ${temp}`)
    }
  }

  static showListCommand(dataJSON){
    for (var i = 0; i < dataJSON.length; i++) {
      console.log(`node todo.js ${dataJSON[i][`command`]}`);
    }
  }

  static showListTask(dataJSON,property,sort){
    console.log(`// Hasilnya (ada Nomor ID dan List todo nya) :`);

    if (sort === `asc`) {
      property = property
    } else if (sort === `desc`){
      property = '-'+property
    }
    console.log(property);
    var status = null
    if (property === `complete`) {
      status = 1
      property = `created_at`
    } else if (property === `uncomplete`) {
      status = 0
      property = `created_at`
    }
    //desc if with -
    console.log(status);
    if(property!==''){
    dataJSON.sort(this.dynamicSort(property))
    }

    for (var i = 0; i < dataJSON.length; i++) {
      if (status !== null) {
        if (status === 1) {
          if (dataJSON[i][`status`] === 1) {
            var mark = dataJSON[i][`status`] !== 0?'X':' '
            console.log(`${dataJSON[i][`id`]}. [${mark}] ${dataJSON[i][`task`]}`);
          }
        } else {
          if (dataJSON[i][`status`] === 0) {
            var mark = dataJSON[i][`status`] !== 0?'X':' '
            console.log(`${dataJSON[i][`id`]}. [${mark}] ${dataJSON[i][`task`]}`);
          }
        }
      } else {
        var mark = dataJSON[i][`status`] !== 0?'X':' '
        console.log(`${dataJSON[i][`id`]}. [${mark}] ${dataJSON[i][`task`]}`);
      }
    }
  }

  static showFind(dataJSON,input){
    let number = Number(input)
    let task = dataJSON[number-1]['task']
    console.log(`// outputnya :`);
    console.log(`${number}. ${task}`);
    console.log();
  }

  static showDelete(dataJSON,input){
    let number = Number(input)
    let task = dataJSON[number-1]['task']
    console.log(`// outputnya :`);
    console.log(`Deleted ${task} from TODO list`);
    console.log();
  }
}

module.exports =  View;


//View.showList()
