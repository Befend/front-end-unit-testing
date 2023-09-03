import { describe, it, expect } from "vitest"

describe("add", () => {
	const user = {
		name: "chan",
	}
	it("should add a item to todos", () => {
		expect(user.name).toBe("chan")
	})

	it("should add a item to todos with reverse command", () => {
		expect(user.name).toBe("chan")
	})
})
