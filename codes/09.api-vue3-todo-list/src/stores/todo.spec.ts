import { test, expect, vi } from "vitest"
import { useTodoStore } from "./todo"
import { setActivePinia, createPinia } from "pinia"
import axios from "axios"

vi.mock("axios")

test("add todo", async () => {
	// 准备数据
	vi.mocked(axios.post).mockImplementation((path, { title }: any) => {
		return Promise.resolve({
			data: { data: { todo: { id: 1, title } }, state: 1 },
		})
	})
	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	const title = "吃饭"

	// 调用
	await todoStore.addTodo(title)

	// 验证
	expect(todoStore.todos[0].title).toBe(title)
})

test("remove todo", async () => {
	vi.mocked(axios.post).mockImplementationOnce((path, { title }: any) => {
		return Promise.resolve({
			data: { data: { todo: { id: 1, title } }, state: 1 },
		})
	})
	vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
		return Promise.resolve({
			data: { data: { id }, state: 1 },
		})
	})

	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	const todo = await todoStore.addTodo("吃饭") // round-trip

	// 调用
	await todoStore.removeTodo(todo!.id)

	// 验证
	expect(todoStore.todos.length).toBe(0)
})

test("update todo list", async () => {
	const todoList = [{ id: 1, title: "写代码" }]
	vi.mocked(axios.get).mockResolvedValue({ data: { data: { todoList } } })

	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	await todoStore.updateTodoList()

	expect(todoStore.todos[0].title).toBe("写代码")
})
