import React from "react";
import SortComponent from "./../sort/sort.component";
import dataRequestService from "./../../services/data.request.service";
import Answer from "./../answer/answer.component";
class QuestionAnswers extends React.Component<any,any>{
	
	constructor(props:any){
		super(props);
		this.state = {
			forEachData:[],
			forData:[]
		};
	}

	/*
	 Sample code to explain ENUM and Object
	*/

	enumAndObject(){
		enum enumObject {
			apiServer= "https://companyname.io",
			port=80
		};

		var jsObject:any = {
			apiServer: "https://companyname.io",
			port:80
		};

		jsObject.port = 81;
		//enumObject.port = 80; -- this will throw compile time error
	}

	/*
	Sample code to explain Map and Object
	*/
	mapAndObjectDifference(){
		var obj:any = {"a":"1","b":"2"};
		var obj1:any = {"a":"5","b":"7"};
		var jsObject:any = {};
		var mapObject:Map<any,Boolean> = new Map<any,Boolean>();
		jsObject[obj] = true;
		console.log("jsObject[obj1] === undefined",jsObject[obj1] === undefined,jsObject," will should be false but will be true");
		mapObject.set(obj, true);
		console.log("mapObject.has(obj1)",mapObject.has(obj)," will be true");
		console.log("mapObject.has(obj2)",mapObject.has(obj1)," will be false");
	}


	/*
	Sample code will explain the difference. 
	the loop inside awaits for the async call to get data and proceeds to the next

	*/
	async awaitProblem():Promise<void>{

		var arr:number[] = [1,2,3,4,5,6,7,8,9,10];
		var forEachData:any[] = [];
		var forData:any[] = [];
		var forEachIncrementVariable:number = 0;
			arr.forEach(async function(i){
				forEachIncrementVariable=forEachIncrementVariable+1;
				console.log("loop "+(forEachIncrementVariable+1)+" starts in for forEach at millisecond "+(new Date().getMilliseconds()));
				var dataFromApi = await dataRequestService.fetchAllRecordsAwait(forEachIncrementVariable);
				forData.push(dataFromApi);
			});
			console.log("forData", forEachIncrementVariable ,JSON.stringify(forData));
		var forAwaitIncrementVariable:number = 0;
			for await(var i of arr){
				forAwaitIncrementVariable = forAwaitIncrementVariable+1;
				console.log("loop "+(forAwaitIncrementVariable+1)+" starts in for await at millisecond "+(new Date().getMilliseconds()));
				var dataFromApi = await dataRequestService.fetchAllRecordsAwait(forAwaitIncrementVariable);
				forEachData.push(dataFromApi);
			}
			console.log("forEachData",forAwaitIncrementVariable,JSON.stringify(forEachData));
			console.log("forData after blocking wait ", forEachIncrementVariable ,JSON.stringify(forData));
	}

	

	async componentDidMount():Promise<void>{
		await this.awaitProblem();
		this.mapAndObjectDifference();
		this.enumAndObject();
	}

	render():any{
		return (<section>
			<section className="question-answer-section">
			<div className="question">
				<p>{"Explain why `{ a: 1 } === { a: 1 }` is 'false' in JavaScript."}</p>
			</div>
			<div className="answer">Comparision are made between references so any two javascript
			object can never be same as all javascipt object shares different memory. We can use JSON.stringify to compare if we are required to compare value provided the order of keys doesn't change
			</div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Describe the runtime difference(s) between `for await (const a of [p1, p2, p3]) { ... }` vs `[p1, p2, p3].forEach(async (p) { await p })`"}.</p>
</div>
			<div className="answer">Both for await and await async inside the forData make async call for the 
			look but for await block the code until its completed where are forEach
			 will wait only inside the loop and the execution will continue outside its loop<br/>
			 for await is blocking code where as forEach is non-blocking code.

			 </div>
			</section>



			<section className="question-answer-section">
			<div className="question"><p>{"Describe good use cases for using a JavaScript `Map` instead of an `object`."}</p>
</div>
			<div className="answer">
					Objects are good to store primitive objects as key where are Map can be used to store object as keys.



			</div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Describe at least one way to substitute a local, unpublished version of a JavaScript library in place of a another version that is already published in an NPM registry."}</p>
</div>
			<div className="answer"><Answer index="4"></Answer></div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Write a script that will encode the following information sequentially in a JavaScript `Buffer`. No need to include field metadata, assume the consumer/decoder is aware of the offsets to use and can parse enum values. Make sure to select data types that are optimized for payload size, but can adequately express all possible values given the length and data type: `symbol`: utf-8 string up to 4 characters, `price`: unsigned 64-bit integer, `quantity`: unsigned 64-bit integer, `side`: enum buy | sell, `type`: enum limit | market."}</p>
</div>
			<div className="answer"><Answer index="5"></Answer></div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Write a script that will decode the `Buffer` you generated from question 5, and return an object with fields as described in the question."}</p>
</div>
			<div className="answer"><Answer index="6"></Answer></div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Write a function that will employ a divide-and-conquer algorithm that will sort an array of objects by their `dateHired` (native JS `Date` object) property in descending order. All items in the array will be an object which has a `dateHired` property which is a valid `Date` object. You cannot use built-in array sorting methods and 3rd-party libraries, but manipulating the `dateHired` property with built-in Node.js/ES6+ functions is allowed."}</p>
</div>
			<div className="answer"> 
				<Answer index="7"></Answer>
				<SortComponent></SortComponent>
			</div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Write a TypeScript variable declaration for a variable `a` that will guarantee that it is a property name or key of object `b` at compile-time."}</p>
</div>
			<div className="answer">
				<Answer index="8"></Answer>
			</div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Expain the differences between `object`s and `enum`s in TypeScript."}</p>
</div>
			<div className="answer">Objects are immutable where are enum are not immutable in typescript.

			</div>
			</section>

			<section className="question-answer-section">
			<div className="question"><p>{"Write a `jest` mock of method `fetchAllRecords` that will return a `Promise` that resolves immediately to array `[1, 2, 3]` that belongs to class `Employee`"}</p>
</div>
			<div className="answer">
					<Answer index="10"></Answer>
			</div>
			</section>
		</section>);
	}
}
export default QuestionAnswers;