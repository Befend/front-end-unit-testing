import { it, expect, describe } from "vitest"
import { addTodo, fighting, State, todos, Player, Weapons } from "../index"

// 缺点
// 1. 重复代码
// 2. 当given逻辑复杂的时候，就会导致单元测试可读性变差 -> 测试 as 文档
describe("内联", () => {
	it("normal addTodo", () => {
		// given
		const todo: any = {
			title: "吃饭",
			content: "今天我要吃大餐",
		}

		// when
		addTodo(todo)

		// then
		expect(todos[0]).toEqual(todo)
	})

	it(" addTodo with reverse command", () => {
		// given
		const todo: any = {
			title: "reverse: 吃饭",
			content: "今天要和小明去吃饭",
		}

		// when
		addTodo(todo)

		// then
		expect(todos[0].title).toEqual("饭吃")
	})

	it("难理解的 given ", () => {
		// 简单容易理解 可读性要高
		// todo 需要一个更贴切的 case
		// given
		const userA = {
			name: "cxr",
			age: 18,
		}

		const userB = {
			name: "cxr",
			age: 18,
		}

		const userC = {
			name: "cxr",
			age: 18,
		}

		const playerA = new Player(new Weapons("冲锋枪"))
		playerA.life = 3
		playerA.attack = () => {
			return 3
		}
		const playerB = new Player(new Weapons("手枪"))
		playerA.life = 2
		playerA.attack = () => {
			return 3
		}

		// when
		fighting(playerA, playerB, [userA, userB, userC])

		// then
		//     expect()
	})
})
