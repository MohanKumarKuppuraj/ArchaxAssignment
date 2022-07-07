var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from "react";
import dataRequestService from "./../../services/data.request.service";
class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerText: ""
        };
    }
    loadAnswer() {
        return __awaiter(this, void 0, void 0, function* () {
            var answerText = yield dataRequestService.fetchAnswer(Number(this.props["index"]));
            this.setState({ answerText: answerText });
        });
    }
    componentDidMount() {
        this.loadAnswer();
    }
    render() {
        return (<pre>
				{this.state.answerText}
			</pre>);
    }
}
export default Answer;
