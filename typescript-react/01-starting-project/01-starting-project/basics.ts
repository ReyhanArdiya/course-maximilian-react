// // const person = {
// // 	name: "Max",
// // 	age: 30
// // };

// // type Person = typeof person;

// // interface Employee extends Person {
// // 	job: string;
// // }

// // const people: Person[] = [person, person];

// // const addType = (a: number, b: number) => a + b;

// // const printStdout = (val: unknown) => console.log(val);

// // interface Fun {
// // 	(a: number, b: number): number | string;
// // 	(a: string, b: string): string | number;
// // }

// // const Fun: Fun = (a: number | string, b: number | string) => a + b;

// // interface Args<A> {
// // 	(args: A, b: number, c: string): void;
// // }

// // const Story: Args<{ he: number }> = (args, b, c) => {};

// interface Args {
// 	dark?: boolean;
// 	onClick?: (e: MouseEvent) => void;
// 	title?: string;
// }

// /**
//  * Storybook meta data
//  *
//  * @template Args The type of the component
//  */
// interface Meta<Args> {
// 	args?: Args;
// 	argTypes?: Args;
// }

// const meta: Meta<Args> = {};

interface Unshift<arr> {
	(arr: arr, value: unknown): arr;
}

const unshift = <T, V>(arr: T[], value: V): [V, ...Array<T>] => {
	const newArr: [V, ...Array<T>] = [value, ...arr];
	return newArr;
};

const demoArr: [number, { meow: 1 }, number] = [1, { meow: 1 }, 3];

const updatedArray = unshift<typeof demoArr, string>(demoArr, "meow");

updatedArray[0];

const map: Map = {};
