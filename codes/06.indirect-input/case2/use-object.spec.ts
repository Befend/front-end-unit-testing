import { it, expect, describe, vi } from "vitest"
import { tellAge, tellByFunction } from "./use-object"
import { config } from "./config"

describe("使用对象的形式", () => {
	it("属性", () => {
		// given
		config.allowTellAge = true

		// when
		const age = tellAge()

		// then
		expect(age).toBe(18)
	})

	it("方法", () => {
		config.getAge = () => {
			return 2
		}

		const r = tellByFunction()

		expect(r).toBe("no")
	})
})
