import { it, expect, describe } from "vitest"
import { Product } from "./Product"
import { User } from "./User"

describe("User", () => {
	it("should buy a product", () => {
		const user = new User("Befend", 28, "123456789@qq.com", "Guangzhou")
		const product = new Product("iPhone 13", 10000)
		const result = user.buy(product)
		expect(result).toEqual("User Befend bought iPhone 13")
	})

	it("v1.0 修改业务代码本身的逻辑", () => {
		// 非常合适
		// 单元测试 也是业务逻辑的用户之一
		// 单元测试可以驱动我们设计更好用的程序api
		const user = new User("Befend")
		const product = new Product("iPhone 13")
		const result = user.buy(product)
		expect(result).toEqual("User Befend bought iPhone 13")
	})

	it("v2.0 委托 工厂函数 来隐藏不需要关心的属性", () => {
		// 委托 来去隐藏不需要关心的属性
		const user = createUser("Befend")
		const product = createProduct("iPhone 13")

		const result = user.buy(product)

		expect(result).toBe("User Befend bought iPhone 13")
	})

	it("v3.0 虚拟对象的方式", () => {
    // 注重代码的可读性 可维护性
    // 测试代码本身也是系统代码，也是需要人维护的
		// 虚拟对象的方式
		const user = new User("Befend")
		const product = { name: "iPhone 13" } as Product

		const result = user.buy(product)

		expect(result).toBe("User Befend bought iPhone 13")
	})
})

function createUser(name: string) {
	return new User(name, 28, "123456789@qq.com", "Guangzhou")
}

function createProduct(name: string) {
	return new Product(name, 10000)
}
