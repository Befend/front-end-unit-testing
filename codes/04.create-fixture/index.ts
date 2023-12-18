interface Todo {
	title: string
	content: string
	state: State
}

export enum State {
	active,
	completed,
	removed,
}

export const todos: Todo[] = []
export function addTodo(todo: Todo) {}

export function fighting(player1: any, player2: any, args: any) {
	console.log(player1, player2, args)
}

export class Weapons {
	name: string
	constructor(name: string) {
		this.name = name
		return this
	}
}

export class Player {
	life: number
	constructor(options: any) {
		this.life = options.life
	}
	attack() {}
}
