import { test, expect } from "vitest"
import { reset, useTodoStore } from "./todo.remove"
import { setActivePinia, createPinia } from "pinia"

test("remove todo", () => {
	setActivePinia(createPinia())
	const store = useTodoStore()

	// round-trip
	// 后门操作
	// const todo = {
	//   id: 1,
	//   title: "工作"
	// }
	// store.todos.push(todo)

	const todo = store.addTodo("工作")
	store.removeTodo(todo.id)

	expect(store.todos.length).toBe(0)
})
