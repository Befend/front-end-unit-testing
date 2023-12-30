import { beforeEach, afterEach, vi, it, expect, describe } from "vitest"
import { checkFriday } from "./date"

describe("date", () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	})
	it("should be happy when it's Friday", () => {
		vi.setSystemTime(new Date(2023, 12, 26))

		const result = checkFriday()

		expect(result).toBe("happy")
	})
	it("should be sad when it's not Friday", () => {
		vi.setSystemTime(new Date(2023, 12, 30))

		const result = checkFriday()

		expect(result).toBe("sad")
	})
	it("third", () => {
		checkFriday()
	})
})
