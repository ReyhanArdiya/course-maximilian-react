// Make 10 random quotes in DUMMY_QUOTES array where each quote is an object with this schema:
// {
//   id: string,
//   author: random person name,
//   text: random quote
// }
const DUMMY_QUOTES = [
	{
		id: "0",
		author: "Oscar Wilde",
		text: "Be yourself; everyone else is already taken.",
		comments: [
			{
				id: 0,
				text: "I agree!"
			},
			{
				id: 1,
				text: "I agree!"
			},
			{
				id: 2,
				text: "I agree!"
			}
		]
	},
	{
		id: "1",
		author: "Oscar Wilde",
		text: "I have nothing to declare except my genius.",
		comments: [
			{
				id: 0,
				text: "I agree!"
			},
			{
				id: 1,
				text: "I agree!"
			},
			{
				id: 2,
				text: "I agree!"
			}
		]
	},
	{
		id: "2",
		author: "Oscar Wilde",
		text: "The truth is rarely pure and never simple.",
		comments: [
			{
				id: 0,
				text: "I agree!"
			},
			{
				id: 1,
				text: "I agree!"
			},
			{
				id: 2,
				text: "I agree!"
			}
		]
	}
];

export default DUMMY_QUOTES;
