const fs = require('fs');

class ModelCookie {
  static readFile(file) {
    let data = fs.readFileSync(file,'utf-8') // type nya string

    let data_json = JSON.parse(data);
    // console.log(data_json);
    return data_json
  }

  static add(str) {
    var string = [];
    let rawList = fs.readFileSync('./data.json', 'utf-8');
    let rawListparsed = JSON.parse(rawList);
    var number = 1;
    for (let i=0; i<rawListparsed.length; i++) {
      rawListparsed[i].id = number;
      number++;
    }
    var newId = rawListparsed.length+1
    var obj = {}
    obj['id'] = newId;
    obj['content'] = str;
    obj['complete'] = false;
    obj['completed_date'] = null;
    obj['tag'] = [];
    obj['created_date'] = new Date();
    rawListparsed.push(obj);
    fs.writeFileSync('data.json',JSON.stringify(rawListparsed, null, 2));
  }

  static delete(n) {
    let rawList = fs.readFileSync('./data.json', 'utf-8');
    let rawListparsed = JSON.parse(rawList);
    let newList = [];
    for (let i=0; i<rawListparsed.length; i++) {
      if (rawListparsed[i].id != n) {
        newList.push(rawListparsed[i]);
      }
    }
    var number = 1;
    for (let i=0; i<newList.length; i++) {
      newList[i].id = number;
      number++;
    }
    fs.writeFileSync('data.json',JSON.stringify(newList, null, 2));
  }

  static completed(n) {
    let rawList = fs.readFileSync('./data.json', 'utf-8');
    let rawListparsed = JSON.parse(rawList);
    let newList = [];
    for (let i=0; i<rawListparsed.length; i++) {
      if (rawListparsed[i].id == n) {
        rawListparsed[i].complete = true;
        rawListparsed[i].completed_date = new Date();
      }
        newList.push(rawListparsed[i]);
    }
    fs.writeFileSync('data.json',JSON.stringify(newList, null, 2));
  }
  static uncompleted(n) {
    let rawList = fs.readFileSync('./data.json', 'utf-8');
    let rawListparsed = JSON.parse(rawList);
    let newList = [];
    for (let i=0; i<rawListparsed.length; i++) {
      if (rawListparsed[i].id == n) {
        rawListparsed[i].complete = false;
      }
        newList.push(rawListparsed[i]);
    }
    fs.writeFileSync('data.json',JSON.stringify(newList, null, 2));
  }

  // ModelCookie.tag(n,arr);
  // ViewCookie.showTagged(n,arr);

  static tag(n,arr) {
    let rawList = fs.readFileSync('./data.json', 'utf-8');
    let rawListparsed = JSON.parse(rawList);
    let newList = [];
    for (let i=0; i<rawListparsed.length; i++) {
      if (rawListparsed[i].id == n) {
        rawListparsed[i].tag = arr;
      }
        newList.push(rawListparsed[i]);
    }
    fs.writeFileSync('data.json',JSON.stringify(newList, null, 2));
  }


}

module.exports = ModelCookie;

// ModelCookie.readFile('./data.json')
