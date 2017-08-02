const fs = require('fs')

class Model {
  static readData(file){
    let data = fs.readFileSync(file,'utf-8');
    let dataJSON = JSON.parse(data);
    return dataJSON
  }
  static writeData(file,data){
    let dataJSON = JSON.stringify(data, null, ' ');
    fs.writeFile(file,dataJSON), function(err) {
      if(err) throw err;
      return console.log('data.json berhasil di update');
    }
  }
}

module.exports = Model;
