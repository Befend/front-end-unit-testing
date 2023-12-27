import { it, expect, describe } from "vitest"
import {
	readAndProcessFile,
	FileReader,
	ReadAndProcessFile,
} from "./readAndProcessFile"

describe("di function", () => {
	it("read and process file", () => {
		class StubFileReader implements FileReader {
			read() {
				return "Befend"
			}
		}

		const result = readAndProcessFile("./test", new StubFileReader())

		expect(result).toBe("Befend -> test unit")
	})

	it("构造函数", () => {
		// class StubFileReader implements FileReader {
		// 	read() {
		// 		return "Befend"
		// 	}
		// }
		// const result = new ReadAndProcessFile(new StubFileReader())
		// expect(result.run("./test")).toBe("Befend -> test unit")
	})

	it("属性", () => {
		// class StubFileReader implements FileReader {
		// 	read() {
		// 		return "Befend"
		// 	}
		// }
		// const result = new ReadAndProcessFile()
		// result.fileReader = new StubFileReader()
		// expect(result.run("./test")).toBe("Befend -> test unit")
	})

	it("方法", () => {
		class StubFileReader implements FileReader {
			read() {
				return "Befend"
			}
		}
		const result = new ReadAndProcessFile()
		result.setFileReader(new StubFileReader())
		expect(result.run("./test")).toBe("Befend -> test unit")
	})
})
