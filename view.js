class View {
  static showList(data) {
    for (var i = 0; i < data.length; i++) {
      if(data[i].status === true) {
        console.log(`${data[i].id}. [x] ${data[i].task}`);
      }
      else {
        console.log(`${data[i].id}. [ ] ${data[i].task}`);
      }

    }
  }
}

module.exports = View
