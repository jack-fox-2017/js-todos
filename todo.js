// mencetak teks bantuan dengan help
// melihat daftar TODO dengan list
// menambahkan TODO ke dalam list dengan add
// melihat detail TODO dengan task <id>
// menghapus TODO dengan delete <id>
// menandai bahwa TODO selesai dengan complete <id>
// menandai bahwa TODO belum selesai dengan uncomplete <id>
const Model = require(`./model.js`)
const View = require(`./view.js`)

let temp = process.argv
let input = temp.slice(2)
let file = ''
console.log(input);

function manageInput(input){
  //console.log(input[0]);
  switch (input[0]) {
    case `help`: {
      let dataJSON = Model.readData('./dataList.json')
      View.showListCommand(dataJSON)
    }break;

    case `list`: {
      let data = Model.readData('./data.json')
      View.showListTask(data)
    }break;

    case `add`: {
      let data = Model.readData('./data.json')
      let newTask = {task: input[1]}
      data.push(newTask)
      Model.writeData('./data.json',data)
    }break;

    case `task`:{
      let data = Model.readData('./data.json')
      View.showFind(data,input[1])
    }
    break;

    case `delete`:{
      let data = Model.readData('./data.json')
      View.showDelete(data,input[1])
      let number = Number(input[1]) - 1
      //console.log(number);
      data.splice(number,1)
      //console.log(data);
      Model.writeData('./data.json',data)
    }
    break;

    default:
  }
}

manageInput(input)
