const fs = require('fs')

class Read {
  static readData(file){
    let data = fs.readFileSync(file,'utf-8');
    let dataJSON = JSON.parse(data);
    return dataJSON
  }
  static writeData(file,data){
    let dataJSON = JSON.stringify(data);
    //console.log(dataJSON);
    //console.log(data);
    fs.writeFile(file,dataJSON), function(err) {
      if(err) throw err;
      return console.log('data.json berhasil di update');
    }
  }
}

module.exports = Read;
