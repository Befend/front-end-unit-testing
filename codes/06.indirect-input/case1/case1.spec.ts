import { doubleUserAge, fetchDoubleUserAge } from "./index"
import { beforeEach, vi, it, expect, describe } from "vitest"
import { userAge, fetchUserAge } from "./user"

// demo1. stub   存根
// 替换掉真实的逻辑实现
// vi.mock("./user", () => {
// 	return {
// 		userAge: () => 2,
// 	}
// })

// vi.mock("./user")

// demo3. stub   存根
// 替换掉真实的逻辑实现
vi.mock("./user", () => {
	return {
		fetchUserAge: () => Promise.resolve(2),
	}
})

// 我们是否可以控制 间接input 的值呢 ( user userAge)
describe("间接input", () => {
	// beforeEach(() => {
	// 	vi.doMock("./user", () => {
	// 		return {
	// 			userAge: () => 2,
	// 		}
	// 	})
	// })
	it("first", async () => {
		// demo1. given
		// 配合vi.mock("./user") 等价于stub
		// vi.mocked(userAge).mockReturnValue(2)

		// demo2. given
		// // 可以配合beforEach使用
		// const { doubleUserAge } = await import("./index")
		// // when
		// const n = doubleUserAge()
		// // then
		// expect(n).toBe(4)

		// demo3. given
		// when
		const r = await fetchDoubleUserAge()
		// then
		expect(r).toBe(4)
		// expect(r).toBe(36)
	})

	it("second", () => {
		// 配合vi.mock("./user") 等价于stub
		// vi.mocked(userAge).mockReturnValue(4)
		// console.log(userAge())
	})
})
