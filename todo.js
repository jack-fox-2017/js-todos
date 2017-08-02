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
let inputCLI = temp.slice(2)
let file = ''
console.log(inputCLI);

class Tag{
  constructor(tag){
    this._tag = tag
  }
}

function manageInput(inputCLI){
  // split jika terdapat :
  let input = inputCLI.map(function(x){return x.split(':')})
  switch (input[0][0]) {
    case `help`: {
      let dataJSON = Model.readData('./dataList.json')
      View.showListCommand(dataJSON)
    }break;

    case `list`: {
      let data = Model.readData('./data.json')
      let property = ''
      let sort = ''
      if (input.length > 1) {
        sort = input[1][0]
      } else {
        sort = `asc`
      }
      switch (input[0][1]) {
        case 'created': {property=`created_at`}break;
        case 'status': {property=`status`}break;
        case 'task': {property=`task`}break;
        case 'complete' : {property=`complete`}break;
        case 'uncomplete' : {property=`uncomplete`}break;
        default: {property=``}
      }
      View.showListTask(data,property,sort)

    }break;

    case `add`: {
      let data = Model.readData('./data.json')
      let today = new Date()
      let sentence = input[1][0].charAt(0).toUpperCase() + input[1][0].slice(1);
      let newTask = {
        id: data.length + 1,
        status: 0,
        task: sentence,
        created_at : today.toISOString()
      }
      data.push(newTask)
      Model.writeData('./data.json',data)
    }break;

    case `task`:{
      let data = Model.readData('./data.json')
      View.showFind(data,input[1][0])
    }
    break;

    case `delete`:{
      let data = Model.readData('./data.json')
      let temp =[]
      for (var i = 0; i < data.length; i++) {
        if(Number(data[i][`id`])!==Number(input[1][0])){
          temp.push(data[i])
        }
      }
      Model.writeData('./data.json',temp)
    }
    break;

    case `complete`:{
      let data = Model.readData('./data.json')
      let temp = data.map(function(x){
        if(x.id === Number(input[1][0])){
          x.status = 1
        }
        return x
      })
      Model.writeData('./data.json',temp)
    }
    break;

    case `uncomplete`:{
      let data = Model.readData('./data.json')
      let temp = data.map(function(x){
        if(x.id === Number(input[1][0])){
          x.status = 0
        }
        return x
      })
      Model.writeData('./data.json',temp)
    }
    break;

    case `filter`:{
      let data = Model.readData('./data.json')
      console.log(input[0][1])
      let temp = data.filter(function(x){if(x.tag!==undefined)
        { for (var i = 0; i < x.tag.length; i++) {
            if (x.tag[i][`_tag`][0] === input[0][1]) {
              return true
            }
          }
          }})
      console.log(temp);
      View.showFilteTag(temp)
    }break;

    case `tag`: {
      let tag = input.splice(2)
      let data = Model.readData('./data.json')
      let temp = data.map(function(x){
        if(x.id === Number(input[1][0])){
          let obj=[]
          for (let i = 0; i < tag.length; i++) {
            obj.push(new Tag(tag[i]))
          }
          x.tag=obj
          return x
        } else {
          return x
        }
      })
      let task = data.filter(function(x){
        if(x.id === Number(input[1][0])){
          return true
        } else {
          return false
        }
      })
      Model.writeData('./data.json',temp)
      var word = `Tagged task "${task[0][`task`]}" with tags: ${tag.join(', ')}`
      View.showTag(word)
    }break;

    default:{
      View.showError()
    }
  }
}

manageInput(inputCLI)
