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
import utility from "./../../services/utility.service";
import dataRequestService from "./../../services/data.request.service";
class SortComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            sortedData: []
        };
    }
    loadEmployeesData() {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield dataRequestService.fetchAllRecords();
            var unSortedEmployees = Object.assign([], data);
            var sortedData = yield utility.sortRecords(data);
            this.setState({ employees: unSortedEmployees, sortedData: sortedData });
        });
    }
    componentDidMount() {
        this.loadEmployeesData();
    }
    render() {
        return (<section>
				<h1>UnSorted Records</h1>
				<table data-testid="unsorted-records">
				<tbody>
				<tr><td>Index</td><td>employeeId</td><td>dateHired</td></tr>
				{this.state.employees.map((employee, index) => <tr>
						<td>{index + 1}</td>
						<td>{employee.employeeId}</td>
						<td>{employee.dateHired}</td>
					</tr>)}
				</tbody>
				</table>

				<h1>Sorted Records</h1>
				<table data-testid="sorted-records">
				<tbody>
				<tr><td>Index</td><td>employeeId</td><td>dateHired</td></tr>
				{this.state.sortedData.map((employee, index) => <tr>
						<td>{index + 1}</td>
						<td>{employee.employeeId}</td>
						<td>{employee.dateHired}</td>
					</tr>)}
				</tbody>
				</table>
			</section>);
    }
}
export default SortComponent;
