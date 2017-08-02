const ModelToDo = require('./model')
const ViewToDo = require('./view')

class ToDo {
	static command(arr) {
		const file = './data.json'
		let data = ModelToDo.getData(file)	
		let content = command[1]
		let taskId = command[1]

		switch(arr[0]) {
			case undefined:
			case 'help':
				console.log(ViewToDo.showHelp());
				break;

			case 'list':
				console.log(ViewToDo.showList(data));
				break;

			case 'add':
				if (content == undefined) {
					console.log(ViewToDo.needParam());
					break;
				}

				let newToDo = {
					id: data.length + 1,
					completed: false,
					content: content,
					completedDate: null,
					createdDate: new Date(),
					tags: []
				}

				data.push(newToDo)
				ModelToDo.save(file, data)

				console.log(ViewToDo.success('Added', content));
				break;

			case 'task':
				if (taskId == undefined) {
					console.log(ViewToDo.needParam());
					break;
				}

				let taskFound = data.filter(item => {return item.id == taskId})
				if (taskFound.length <= 0) 
					console.log(ViewToDo.notFound(taskId));
				else
					console.log(ViewToDo.showSingleList(taskFound[0]));
				break;

			case 'delete':
				if (taskId == undefined) {
					console.log(ViewToDo.needParam());
					break;
				}

				let deleteFound = data.filter(item => {return item.id == taskId})
				if (deleteFound.length <= 0)
				 	console.log(ViewToDo.notFound(taskId));
				else {
					let afterDeleted = data.filter(item => {return item.id != taskId})
					for (let i = 0; i < afterDeleted.length; i++) {
						afterDeleted[i].id = i + 1
					}
					ModelToDo.save(file, afterDeleted)
					console.log(ViewToDo.success('Deleted', deleteFound[0].content));
				}
				break;

			case 'complete':
				for (let i = 0; i < data.length; i++) {
					if (data[i].id == taskId) {
						data[i].completeDate = new Date()
						data[i].completed = true
						ModelToDo.save(file, data)
						console.log(ViewToDo.success('Marked', data[i].content));
						break;
					}
				}
				break;

			case 'uncomplete':
				for (let i = 0; i < data.length; i++) {
					if (data[i].id == taskId) {
						data[i].completeDate = null
						data[i].completed = false
						ModelToDo.save(file, data)
						console.log(ViewToDo.success('Unmarked', data[i].content));
						break;
					}
				}
				break;

			case 'tag':
				if (taskId == undefined) {
					console.log(ViewToDo.needParam());
					break;
				}

				for (let i = 0; i < data.length; i++) {
					if (data[i].id == taskId) {
						let tags = command.slice(2)
						data[i].tags = data[i].tags.concat(tags)
						ModelToDo.save(file, data)
						console.log(ViewToDo.success('Tagged', data[i].content, `with tags: ${tags.join(', ')}`));
						break;
					}
				}

				break;

			default:
				let split = command[0].split(':')
				switch(split[0]) {

					case 'list':
						switch(split[1]) {

							case 'created':
								let orderList = command[1]

								switch(orderList) {
									case undefined:
									case 'asc':
										console.log(ViewToDo.showListOrdered(data.sort((a,b) => {return a.createdDate > b.createdDate})));
										break;
									case 'desc':
										console.log(ViewToDo.showListOrdered(data.sort((a,b) => {return a.createdDate < b.createdDate})));
										break;
									default:
										console.log(ViewToDo.showCommandNotFound());
								}
							
								break;

							case 'completed':
								let completeList = command[1]

								switch(completeList) {
									case undefined:
									case 'asc':
										console.log(ViewToDo.showListOrdered(data.filter(item => {return item.completed == true}).sort((a,b) => {return a.completeDate > b.completeDate})));
										break;
									case 'desc':
										console.log(ViewToDo.showListOrdered(data.filter(item => {return item.completed == true}).sort((a,b) => {return a.completeDate < b.completeDate})));
										break;
									default:
										console.log(ViewToDo.showCommandNotFound());
								}
								break;

								case 'outstanding':
								let outstandingList = command[1]

								switch(outstandingList) {
									case undefined:
									case 'asc':
										console.log(ViewToDo.showListOrdered(data.filter(item => {return item.completed == false}).sort((a,b) => {return a.createdDate > b.createdDate})));
										break;
									case 'desc':
										console.log(ViewToDo.showListOrdered(data.filter(item => {return item.completed == false}).sort((a,b) => {return a.createdDate < b.createdDate})));
										break;
									default:
										console.log(ViewToDo.showCommandNotFound());
								}
								break;

							default:
								console.log(ViewToDo.showCommandNotFound());
						}
						break;

					case 'filter':
						if (split[1] == undefined) {
							console.log(ViewToDo.needParam());
							break;
						}

						let filtered = data.filter(item => {return item.tags.indexOf(split[1]) >= 0})
						console.log(ViewToDo.showListOrdered(filtered, true));

						break;

					default:
						console.log(ViewToDo.showCommandNotFound());
				}
		}
	}
}



const command = process.argv.slice(2)
// console.log(command);
ToDo.command(command);