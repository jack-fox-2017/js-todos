class View {
  static showListCommand(dataJSON){
    for (var i = 0; i < dataJSON.length; i++) {
      console.log(`node todo.js ${dataJSON[i][`command`]}`);
    }
  }
  static showListTask(dataJSON){
    console.log(`// Hasilnya (ada Nomor ID dan List todo nya) :`);
    for (var i = 0; i < dataJSON.length; i++) {
      var status = dataJSON[i][`status`] !== 0?'X':' '
      console.log(`${i+1}. [${status}] ${dataJSON[i][`task`]}`);
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
