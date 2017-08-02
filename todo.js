"use strict"

const Controller = require("./Controller.js");

let procArgs = process.argv.slice(2);
let command = procArgs[0];
let inputTambah = procArgs.splice(1).join(' ');


// function managed(command){
  switch(command){
    case "help":
      Controller.help()
    break;

    case "list":
      let Tampil = new Controller();
      Tampil.ambilData();
    break;

    case "add":
      let tambah = new Controller();
      tambah.insert(inputTambah)

    // case "delete":
    //   let hapus = new Controller();
    //   hapus.deleteData(inputTambah);




    default:
    console.log('masukan perintah, jika bingung ketikan "node todo.js help" tanpa petik');
  }
// }

// managed(command);

// console.log(todos.list());
// console.log(todos.add());
