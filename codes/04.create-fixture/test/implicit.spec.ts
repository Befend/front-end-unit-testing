import { it, expect, describe, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { addTodo } from "../index"

describe("隐式", () => {
	// 这样做的坏处：代码可读性变差了，测试用例多时会造成代码分割的问题
	beforeEach(() => {
		setActivePinia(createPinia())
	})
	let todoA
	let todoB
	let todoC
	beforeEach(() => {
		todoA
		todoB
		todoC
		todoD
	})

	it("(should )", () => {})
})
