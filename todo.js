class ToDo {
	static command(arr) {
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
				return result.join('\n')
			case 'list':
				
				break;
			case 'add':
				//arr[1] content
				break;
			case 'task':
				//arr[1]
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
console.log(ToDo.command(command));