import { it, expect, describe } from "vitest"
import Hi from "./Hi.vue"
import { mount } from "@vue/test-utils"

it("snapshot", () => {
	// form rules
	const wrapper = mount(Hi)
	console.log(wrapper)
	expect(wrapper.html()).toMatchSnapshot()
	// expect({name:"cxr", age: 10}).toMatchSnapshot()
})

it("inline", () => {
	expect({ name: "befend", age: 18 }).toMatchInlineSnapshot(`
		{
		  "age": 18,
		  "name": "befend",
		}
	`)
})

it("file", () => {
	const wrapper = mount(Hi)
	expect(wrapper.html()).toMatchFileSnapshot("./hi.html")
})
