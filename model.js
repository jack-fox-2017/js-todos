const fs = require('fs')

class ModelToDo {
	static getData(file) {
		return JSON.parse(fs.readFileSync(file, 'utf-8'))
	}

	static save(file, data) {
		return fs.writeFileSync(file, JSON.stringify(data, null, 2))
	}
}

module.exports = ModelToDo