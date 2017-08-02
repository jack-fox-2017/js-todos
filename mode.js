var fs = require('fs');
const {
  View
} = require('./view.js')

class Mode {
  constructor() {
    this.data = []
  }


  write(data) {
    console.log(`Added "${data.join(' ')}" to your ToDo List`);
    var tmp = fs.readFileSync('data.json', 'utf8')
    var temp = JSON.parse(tmp);
    var date = new Date()
    var tot = temp.length
    temp.push({
      "id": tot + 1,
      "task": data.join(' '),
      "status": false,
      "createdAt": date.toUTCString(),
      "completedAt": false,
      "tag": []
    });
    this.data = temp
    fs.writeFileSync('data.json', JSON.stringify(this.data, null, 2));
  }

  read() {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    View.list(reed)
  }

  delete(param) {
    var num = 1
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    console.log(`you've been deleted ${JSON.stringify(reed[param - 1].task)} from your To Do list`);
    reed.splice(param - 1, 1)   
    for (var i = 0; i < reed.length; i++) {
      reed[i].id = num++
    }
    fs.writeFileSync('data.json', JSON.stringify(reed, null, 2))
 
  }

  find(param) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    View.find(reed, param)
  }

  mayday() {
    fs.writeFileSync('data.json', JSON.stringify([], null, 2))
  }

  comp(param) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    // console.log(reed[param - 1]);
    var date = new Date()
    reed[param - 1].status = true
    reed[param - 1].completedAt = date.toUTCString()
    fs.writeFileSync('data.json', JSON.stringify(reed, null, 2))
  }

  uncomp(param) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    // console.log(reed[param - 1]);
    reed[param - 1].status = false
    fs.writeFileSync('data.json', JSON.stringify(reed, null, 2))
  }

  sortCreate(param) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    if (param == 'asc' || param == null) {
      let asc = reed.sort((a, b) => new Date(b.createdAt) < new Date(a.createdAt))
      fs.writeFileSync('data.json', JSON.stringify(asc, null, 2))
    } else if (param == 'desc') {
      let desc = reed.sort((a, b) => new Date(b.createdAt) > new Date(a.createdAt))
      fs.writeFileSync('data.json', JSON.stringify(desc, null, 2))
    }
    View.sortCreate(reed)
  }

  sortComplete(param) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    if (param == 'asc' || param == null) {
      let ascc = reed.sort((a, b) => new Date(b.completedAt) < new Date(a.completedAt))
      fs.writeFileSync('data.json', JSON.stringify(ascc, null, 2))
    } else if (param == 'desc') {
      let descc = reed.sort((a, b) => new Date(b.completedAt) > new Date(a.completedAt))
      fs.writeFileSync('data.json', JSON.stringify(descc, null, 2))
    }
    View.sortCompleted(reed)
  }

  setTag(data) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    var num = parseInt(data[0])
    var tag = data.splice(1)
    for (var i = 0; i < tag.length; i++) {
      if (reed[num - 1].tag.includes(tag.join()) === false) {
        reed[num - 1].tag.push(tag.join())
      } else {
        console.log(`${reed[num-1].task} is already tagged with ${tag}`);
      }
    }
    fs.writeFileSync('data.json', JSON.stringify(reed, null, 2))
  }

  filter(data) {
    var reed = JSON.parse(fs.readFileSync('data.json', 'utf8'))
    View.filter(reed, data)
  }
  // reed.forEach(tags => {
  // if (tags.tag.includes(data) == true) {
  //   console.log('test');
  // }
  // })
}



module.exports = {
  Mode
}