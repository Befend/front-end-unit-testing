import { expect, it } from "vitest"

it("toBe", () => {
	expect(1).toBe(1)
})

it("toEqual", () => {
	const user = {
		name: "chan",
	}

	expect(user).toEqual({
		name: "chan",
	})
})

it("toBeTruthy", () => {
	expect(1).toBeTruthy()
	expect(true).toBeTruthy()
	expect("1234").toBeTruthy()
})

it("toBeFalsy", () => {
	expect(0).toBeFalsy()
	expect(false).toBeFalsy()
	expect("").toBeFalsy()
})

it("toContain", () => {
	const item1 = {
		name: "yan",
	}
	const item2 = {
		name: "chan",
	}
	const item3 = {
		name: "chanLoveYan",
	}
	const list = [item1, item2]
	expect(list).toContain(item1)
	// expect(list).toContain(item3)
	expect("<div>1234</div>").toContain("1234")
})

it("toThrow", () => {
	function getName(name) {
		if (typeof name !== "string") {
			throw new Error("error name")
		}
		return "hahha"
	}
	expect(() => {
		getName(111)
	}).toThrow("error name")
})
