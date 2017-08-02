"use strict"

class View {
  constructor(){
  }

  static tampilData(data) {
    if (data.length == 0) {
      console.log("Belum ada yang terdaftar");
    } else {
      for (var i = 0; i < data.length; i++) {
        console.log(`${i + 1}. [${data[i].complete?`V`:` `}] ${data[i].task}`);
      }
    }
  }

  static showHelp(help) {
    console.log(help);
  }


  }

module.exports = View
