class ViewToDo {
	static showHelp() {
		let result = [
			'Available command :',
			'$ node todo.js',
			'$ node todo.js help',
			'$ node todo.js list',
			'$ node todo.js add <task_content>',
			'$ node todo.js task <task_id>',
			'$ node todo.js delete <task_id>',
			'$ node todo.js complete <task_id>',
			'$ node todo.js uncomplete <task_id>',
			'$ node todo.js list:created asc|desc',
			'$ node todo.js list:completed asc|desc',
			'$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>',
			'$ node todo.js filter:<tag_name>',
		]
		return result.join('\n')
	}

	static showCommandNotFound() {
		return `Command not found!\n${this.showHelp()}`
	}

	static showSingleList(data, order) {
		return `${order || data.id}. [${data.completed ? 'x' : ' '}] ${data.content}`
	}

	static showList(data) {
		return data.map(item => {
			return this.showSingleList(item)
		}).join('\n')
	}

	static showListOrdered(data) {
		return data.map((item, index) => {
			return this.showSingleList(item, index + 1)
		}).join('\n')
	}

	static needParam() {
		return `Command need more params\n${this.showHelp()}`
	}

	static success(job, content, information) {
		return `${job} "${content}" ${information || 'to your TODO list...'}`
	}

	static notFound(id) {
		return `Can't found list with id ${id}`
	}
}

module.exports = ViewToDo