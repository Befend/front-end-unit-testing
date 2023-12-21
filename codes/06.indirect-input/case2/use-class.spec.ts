import { it, expect, describe, vi } from "vitest"
import { doubleUserAge } from "./use-class"
import { User } from "./User"

// vi.mock("./User", async (importOriginal) => {
// 	return {
// 		User: class User {
// 			age = 2
// 			getAge() {
// 				return 2
// 			}
// 		},
// 	}
// })

describe("使用class的形式", () => {
	// it("属性", () => {
	// 	// given
	// 	const age = doubleUserAge()

	// 	// then
	// 	expect(age).toBe(4)
	// })
	it("方法", () => {
		// 一个是修改方法
		User.prototype.getAge = () => 2
		// given
		const age = doubleUserAge()

		// then
		expect(age).toBe(4)
	})
})
