import { test, expect, vi } from "vitest"
import { useTodoStore } from "./todo"
import { setActivePinia, createPinia } from "pinia"
import { fetchAddTodo, fetchRemoveTodo, fetchTodoList } from "../api"

vi.mock("../api")

// SUT  create list
// create list
// add todo to todos , todos' length is 1
test("should add todo to the list when successful", async () => {
	// 准备数据
	vi.mocked(fetchAddTodo).mockImplementation((title: any) => {
		return Promise.resolve({
			data: { todo: { id: 1, title } },
			state: 1,
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
	// 准备数据
	vi.mocked(fetchAddTodo).mockImplementation((title: any) => {
		return Promise.resolve({
			data: { todo: { id: 1, title } },
			state: 1,
		})
	})
	vi.mocked(fetchRemoveTodo).mockImplementationOnce((id: any) => {
		return Promise.resolve({
			data: { id },
			state: 1,
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
	vi.mocked(fetchTodoList).mockResolvedValue({ data: { todoList } })

	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	await todoStore.updateTodoList()

	expect(todoStore.todos[0].title).toBe("写代码")
})

test("should not be added todo when network is error", async () => {
	// 准备数据
	vi.mocked(fetchAddTodo).mockImplementation((title: any) => {
		return Promise.reject("network error")
	})
	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	const title = "吃饭"

	// 调用
	expect(async () => {
		await todoStore.addTodo(title)
	}).rejects.toThrowError("network error")
})

test("should not add a todo when title is empty", async () => {
	// 准备数据
	setActivePinia(createPinia())
	const todoStore = useTodoStore()
	const title = ""

	// 调用
	await todoStore.addTodo(title)

	// 验证
	expect(todoStore.todos.length).toBe(0)
})

test("should throw a error when removed id does not exist", async () => {
	// 准备数据
	vi.mocked(fetchRemoveTodo).mockImplementationOnce(() => {
		return Promise.resolve({
			data: null,
			state: 0,
		})
	})

	setActivePinia(createPinia())
	const todoStore = useTodoStore()

	// 调用
	expect(async () => {
		await todoStore.removeTodo(2)
	}).rejects.toThrowError("id:2 does not exist")
})