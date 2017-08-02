"use strict"

let fs = require('fs')

class Model {
  constructor(){
    this.data = []
  }

  dataJson() {

    this.data = fs.readFileSync("data.json","utf8");
    this.data = JSON.parse(this.data)
    return this.data;
  }

  insert(inputTambah) {
    this.data.push(inputTambah)
  }


  saveToFile() {
    fs.writeFile('data.json',JSON.stringify(this.data,null,2), (err) => {
      if(err) throw err;
    })
  }

  hapusDat(inputTambah) {
    return this.data.splice(inputTambah,1);
  }


}

module.exports = Model
