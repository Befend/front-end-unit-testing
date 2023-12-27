// 接口
export interface FileReader {
	read(filePath: string): string
}

export function readAndProcessFile(
	filePath: string,
	fileReader: FileReader
): string {
	const content: string = fileReader.read(filePath)
	// 在实际的场景下可能 process 的过程会更复杂一点
	return content + " -> test unit"
}

// import { readFileSync } from "fs"
// export class ReadAndProcessFile {
// 	run(filePath: string) {
// 		const content = readFileSync(filePath, { encoding: "utf-8" })
// 		return content + " -> test unit"
// 	}
// }

export class ReadAndProcessFile {
	private _fileReader: FileReader
	// 1. 构造函数
	// constructor(fileReader: FileReader) {
	//   this._fileReader = fileReader
	// }
	constructor() {}
	run(filePath: string) {
		const content = this._fileReader.read(filePath)
		return content + " -> test unit"
	}
	// 2. 属性
	// get fileReader() {
	// 	return this._fileReader
	// }
	// set fileReader(fileReader: FileReader) {
	// 	this._fileReader = fileReader
	// }
	// 3. 方法
	setFileReader(fileReader: FileReader) {
		this._fileReader = fileReader
	}
}
