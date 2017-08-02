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

  static showDataTask(data,task_id) {
    if (data.length == 0) {
      console.log('List Masih Kosong');
    } else {
      if (data.complete) {
        console.log(`${task_id}. ${data.task}. Status: Done. Tag: ${data.tag}`);
      } else {
        console.log(`${task_id}. ${data.task}. Status: Undone. Tag: ${data.tag}`);
      }
    }
  }

  static showSortedByCreatTime(creatSorted) {
    for (let i = 0; i < creatSorted.length; i++) {
      if (creatSorted[i].complete == false) {
        console.log(`${i+1} ${creatSorted[i].task}`);
      }
    }
  }

  static showSortedByCompletedTime(completSorted) {
    for (let i = 0; i < completSorted.length; i++) {
      if (completSorted[i].complete) {
        console.log(`${i+1} ${completSorted[i].task}`);
      }
    }
  }

  static showFilterList(filterList, specific) {
    for (let i = 0; i < filterList.length; i++) {
      if (filterList[i].tag.includes(specific)) {
        console.log(`${i + 1} ${filterList[i].task} [ ${filterList[i].tag.join(', ')} ]`);
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

  static successCompleteTask(success) {
    console.log(success);
  }

  static successUncompleteTask(success) {
    console.log(success);
  }

  static showHelp(infoHelp) {
    console.log(infoHelp);
  }

  static showFalseInput(infoFalseInput) {
    console.log(infoFalseInput);
  }
}

module.exports = View
