import { vi, it, expect, describe } from "vitest"
import { delay, fetchUserData } from "./index"

describe("Promise", () => {
	it("normal", async () => {
		const result = await fetchUserData()

		expect(result).toBe("1")
	})

	it("delay", async () => {
		// 测试嵌套的case，需要和advanceTimersToNextTimer配套使用
		vi.useFakeTimers()
		//     vi.advanceTimersToNextTimer()
		//     const result = await delay(1000);
		const result = delay(100)
		vi.advanceTimersToNextTimer()

		expect(result).resolves.toBe("ok")
	})
})
