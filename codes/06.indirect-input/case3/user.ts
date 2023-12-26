import { innerWidthFn } from "./window"

export function doubleUserAge() {
	return Befend.age * 2
}

export function doubleInnerWidth() {
	return innerWidthFn() * 2
}
