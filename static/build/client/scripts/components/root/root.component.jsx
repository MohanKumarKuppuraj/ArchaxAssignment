import React from "react";
import QuestionAnswers from "./../question/question.component";
class RootView extends React.Component {
    render() {
        return (<section className="component-container">
				<section className="header">
				<h1>Archax Assessments</h1>
				</section>
				<section className="question-answer-container">
					<QuestionAnswers></QuestionAnswers>
				</section>
			</section>);
    }
}
export default RootView;
