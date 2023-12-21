import { User } from "./User"

export function doubleUserAge(): number {
	const user = new User()
	console.log(user)

	// return user.age * 2
	return user.getAge() * 2
}
