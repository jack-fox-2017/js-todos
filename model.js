// const Todo = require ('./todo.js')
// const View = require ('./view.js')
const fs  = require('fs')
let rawdata = fs.readFileSync('data.json','utf8')

class Model{

  static readData(){
    var rawdataobj= JSON.parse(rawdata)
    return rawdataobj
  }

  static adds(){
    let stradd = process.argv[3]
    var obj = {}
    var rawdataobj= JSON.parse(rawdata)
    var length = rawdataobj.length+1
    obj['ID']= length
    obj['complete']= false
    obj['created_date'] = new Date().toISOString()
    obj['task']= stradd
    obj['completed_date'] = null
    rawdataobj.push(obj)
    var writefile = JSON.stringify(rawdataobj)
    fs.writeFileSync('data.json',writefile,'utf8')
    return rawdataobj
    // return writefile
  }

  static deletes(){
    var rawdataobj= JSON.parse(rawdata)
    var input = process.argv
      var index = process.argv[3]-1
      var splice = rawdataobj.splice(index,1)
      var writefile = JSON.stringify(rawdataobj)
      fs.writeFileSync('data.json',writefile,'utf8')
      return rawdataobj
  }

  static completes(){
    var rawdataobj= JSON.parse(rawdata)
    var index = process.argv[3]-1
    rawdataobj[index].complete = true
    rawdataobj[index].completed_date = new Date().toISOString()
    var writefile = JSON.stringify(rawdataobj)
    fs.writeFileSync('data.json',writefile,'utf8')
    return rawdataobj
    // return rawdataobj[index].complete
  }

  static uncompletes(){
    var rawdataobj= JSON.parse(rawdata)
    var index = process.argv[3]-1
    rawdataobj[index].complete = false
    var writefile = JSON.stringify(rawdataobj)
    fs.writeFileSync('data.json',writefile,'utf8')
    return rawdataobj
  }

  static list_createdASC(){
    var rawdataobj= JSON.parse(rawdata)
    // return rawdataobj.created_date.sort(new Date())
    var sort = rawdataobj.sort(function(a,b) {
      return new Date(a.created_date) - new Date(b.created_date)
      });
    return sort
  }

  static list_createdDSC(){
    var rawdataobj= JSON.parse(rawdata)
    // return rawdataobj.created_date.sort(new Date())
    var sort = rawdataobj.sort(function(a,b) {
      return new Date(b.created_date) - new Date(a.created_date)
      });
    return sort
  }
}

// console.log(Model.readData());


module.exports = Model
