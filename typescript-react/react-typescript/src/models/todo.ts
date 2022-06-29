export default class Todo {
	public readonly id: string =  Math.random() * 85349 + "";

	constructor(public text: string) {
		this.text = text;
	}
}


