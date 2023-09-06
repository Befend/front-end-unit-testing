import { test, it, expect } from "vitest"
import { add } from "./add"

// test it
// it -> BDD 行为驱动开发  TDD 测试驱动学习
// it should xxx xxx , Mocha Jasmine
// test it Jest
// vitest -> test it
test("should ", () => {
	const r = add(1, 1)
	expect(r).toBe(2)
})

// describe
it("should ", () => {
	add()
})

// test.skip 跳过测试
test.skip("should", () => {
	add()
})

// test.todo("");

// 功能
// 1. xxx add
// 2. xxx remove
// test.todo 待开发事项，看得见的进度
test("add")
test("add reverse")
test.todo("remove")
