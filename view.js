'use strict'

class View {
  constructor() {

  }

  static showData(data) {
    if (data.length == 0) {
      console.log('List Masih Kosong');
    } else {
      for (let i = 0; i < data.length; i++) {
        console.log(`${i + 1}. [${data[i].complete?`X`:``}] ${data[i].task}`);
      }
    }
  }

  static successaddData(success) {
    console.log(success);
  }

  static successDeleteData(success) {
    console.log(success);
  }

  static successDeleteAllData(success) {
    console.log(success);
  }

  static showHelp(infoHelp) {
    console.log(infoHelp);
  }
}

module.exports = View
