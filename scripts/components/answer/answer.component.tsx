import React from "react";
import dataRequestService from "./../../services/data.request.service";

class Answer extends React.Component<any,any>{

	constructor(props:any){
		super(props);
		this.state = {
			answerText:""
		}
	}

	async loadAnswer(){
		var answerText:string = await dataRequestService.fetchAnswer(Number(this.props["index"]));
		this.setState({answerText:answerText});
	}

	componentDidMount():void{
		this.loadAnswer();
	}

	render():any{
		return(
			<pre>
				{this.state.answerText}
			</pre>
		);	
	}
}

export default Answer;