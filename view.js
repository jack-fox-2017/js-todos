class View {
  static showList(convert) {
    console.log(`            LIST
    =====================`);
    for(let i=0; i<convert.length; i++)
    {
      console.log(`     ${i+1}. ${convert[i].completed} ${convert[i].nama} `);
    }
  }
}

module.exports = View
