import { test, afterEach, expect, describe, beforeEach } from "vitest"
import { clearCount, getCount, increaseCount } from "./count.localStorage"

// 内联拆卸
describe("count", () => {
	afterEach(() => {
		clearCount()
	})
	test("first should count ++", () => {
		// 拆卸过程报错的话，会影响到其他case，所以用try{} finally {}
		// 但是这样写比较麻烦，可以用afterEach替代
		// try {
		// 	increaseCount("error")
		// 	expect(getCount()).toBe(1)
		// } finally {
		// 	clearCount()
		// }

		increaseCount("error")

		expect(getCount()).toBe(1)
	})
	test("second should count ++", () => {
		increaseCount()

		expect(getCount()).toBe(1)
	})
})
