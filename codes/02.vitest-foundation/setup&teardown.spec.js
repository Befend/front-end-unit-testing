import {
	describe,
	test,
	beforeEach,
	beforeAll,
	afterEach,
	afterAll,
} from "vitest"

// 1. 他们的执行顺序
// 不含describe
// beforeAll beforeEach
// test1 afterEach beforeEach(return)
// test2 afterEach beforeEach(return)
// afterAll

// 含describe
// beforeAll beforeEach
// test1 afterEach beforeEach(return)
// test2 afterEach beforeEach(return)
// beforeEach beforeEach(describe) test(describe) afterEach(describe)
// afterEach afterAll

// 只执行一次  在最开始的时候
// 数据库的连接
// 创建临时文件
beforeAll(() => {
	console.log("before all")

	return () => {
		// afterAll
		console.log("after all")
	}
})

// pinia   store
beforeEach(() => {
	console.log("before each")
	return () => {
		// afterEach
		console.log("after each")
	}
})

// test1
test("first ", () => {
	console.log("first")
})
// test2
test("second ", () => {
	console.log("second")
})

// reset
afterEach(() => {
	console.log("reset: after each")
})

describe("sub", () => {
	beforeEach(() => {
		console.log("sub: before each")
	})
	test("sub first", () => {
		console.log("sub first")
	})
	afterEach(() => {
		console.log("sub: after each")
	})
})

// 只需要执行一次  并且在最后
// 数据库 断开连接
// 临时文件 就需要删除
afterAll(() => {
	console.log("after all")
})

// 2. 在什么时候用
