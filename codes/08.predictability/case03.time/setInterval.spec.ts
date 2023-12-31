import { vi, it, expect, describe } from "vitest"
import { sayHi } from "./setInterval"

describe("setInterval", () => {
	it("should call one", () => {
		vi.useFakeTimers()
		vi.spyOn(console, "log")
		sayHi()
		// 1. 延迟两次
		// vi.advanceTimersToNextTimer()
		// vi.advanceTimersToNextTimer()
		// 2. 一次性计算延迟时间
		vi.advanceTimersByTime(1100)

		expect(console.log).toBeCalledWith("hi")
	})
})
