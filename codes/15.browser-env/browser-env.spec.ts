import { test, expect } from "vitest"
import { getName } from "./browser-env"
// import { Window } from "happy-dom"

test("browser-env", () => {
	// const window = new Window()
	// console.log(window)
	// globalThis.localStorage = window.localStorage

	// globalThis.localStorage = {
	// 	getItem() {
	// 		return "cxr"
	// 	},
	// }
	localStorage.setItem("name", "Befend")
	expect(getName()).toBe("Befend")
})
