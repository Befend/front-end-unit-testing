export default {
	name: "custom befend",
	setup(global) {
		console.log(" vitest - env - befend")
		global.localStorage = {
			getItem() {},
			setItem() {},
		}

		return {
			teardown() {
				// called after all tests with this env have been run
			},
		}
	},
}
