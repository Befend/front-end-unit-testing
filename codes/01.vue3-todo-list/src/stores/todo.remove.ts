import { defineStore } from "pinia"
import { ref } from "vue"

export interface TodoItem {
	id: number
	title: string
}

type Todos = TodoItem[]

let isAdded = false

export function reset() {
	isAdded = false
}

export const useTodoStore = defineStore("todo", () => {
	const todos = ref<Todos>([])

	function removeTodo(id: number) {
		const todoItem = findTodo(id)
		if (todoItem) {
			todos.value = todos.value.filter((todoItem: any) => {
				return todoItem.id !== id
			})
		}
		return todoItem
	}

	function findTodo(id: TodoItem["id"]) {
		return todos.value.find((todoItem: any) => {
			return todoItem.id === id
		})
	}

	return {
		todos,
		removeTodo,
		findTodo,
	}
})
