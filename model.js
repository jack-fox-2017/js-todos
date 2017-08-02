const fs = require('fs')

class Model{
  static readFile(file) {
    let load = fs.readFileSync(file, 'utf-8')
    let convert = JSON.parse(load)
    return convert
  }
  // static delData(input){
  //
  // }
}


module.exports = Model
