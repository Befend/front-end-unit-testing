import { afterEach, it, expect, describe } from "vitest"
import { increment, getCount, reset } from "./counterFunction"

describe("counter function", () => {
	afterEach(() => {
		// 拆卸
		reset()
	})
	it("increment", () => {
		// 0 -> 1
		increment()

		expect(getCount()).toBe(1)
	})
	it("second", () => {
		// 0 -> 1
		increment()

		expect(getCount()).toBe(1)
	})
})
