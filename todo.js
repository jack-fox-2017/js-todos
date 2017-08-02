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
				let result = [
					'$ node todo.js',
					'$ node todo.js help',
					'$ node todo.js list',
					'$ node todo.js add <task_content>',
					'$ node todo.js task <task_id>',
					'$ node todo.js delete <task_id>',
					'$ node todo.js complete <task_id>',
					'$ node todo.js uncomplete <task_id>'
				]
				console.log(result.join('\n'))
				break;

			case 'list':
				console.log(data.map(item => {return `${item.id}. [${item.completed ? 'x' : ' '}] ${item.content}`}).join('\n'));
				break;

			case 'add':

				if (content == undefined) {
					console.log('please write a content');
					break;
				}

				let newToDo = {
					id: data.length + 1,
					completed: false,
					content: content
				}

				data.push(newToDo)
				ModelToDo.save(file, data)

				console.log(`Added ${content} to your TODO list...`);
				break;

			case 'task':
				let taskFound = data.filter(item => {return item.id == taskId})
				if (taskFound.length <= 0) 
					console.log(`Cannot found todo with id ${taskId}`);
				else
					console.log(`${taskFound[0].id}. [${taskFound[0].completed ? 'x' : ' '}] ${taskFound[0].content}`);
				break;
			case 'delete':
				//arr[1]
				break;
			case 'complete':
				//arr[1]
				break;
			case 'uncomplete':
				//arr[1]
				break;
			
			default:
				
		}
	}
}



const command = process.argv.slice(2)
// console.log(command);
ToDo.command(command);