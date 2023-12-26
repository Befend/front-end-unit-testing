import { vi, it, expect } from "vitest"
import { doubleInnerWidth, doubleUserAge } from "./user"

vi.mock("./window.ts", () => {
	return {
		innerWidthFn: () => 200,
	}
})
it("doubleUserAge", () => {
	vi.stubGlobal("Befend", { age: 18 })
	const r = doubleUserAge()

	expect(r).toBe(36)
})

// it("double innerWidth", () => {
// 	// window
// 	vi.stubGlobal("innerWidth", 200)

// 	const r = doubleInnerWidth()

// 	expect(r).toBe(400)
// })
it("funciton", () => {
	// window
	const r = doubleInnerWidth()

	expect(r).toBe(400)
})
