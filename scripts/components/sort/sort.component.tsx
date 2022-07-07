import React from "react";
import utility from "./../../services/utility.service";
import Employee from "./../../../models/employee.model";
import dataRequestService from "./../../services/data.request.service";

class SortComponent extends React.Component<any,any>{
	constructor(props:any){
		super(props);
		this.state = {
			employees:[],
			sortedData:[]
		};
	}

	async loadEmployeesData():Promise<any>{
		var data:any = await dataRequestService.fetchAllRecords();
		var unSortedEmployees = Object.assign([],data);
		var sortedData:any = await utility.sortRecords(data);
		this.setState({employees:unSortedEmployees,sortedData:sortedData});
	}

	componentDidMount():void{
		this.loadEmployeesData();
	}

	render():any{
		return (<section>
				<h1>UnSorted Records</h1>
				<table data-testid="unsorted-records">
				<tbody>
				<tr><td>Index</td><td>employeeId</td><td>dateHired</td></tr>
				{this.state.employees.map((employee:any,index:number)=><tr>
						<td>{index+1}</td>
						<td>{employee.employeeId}</td>
						<td>{employee.dateHired}</td>
					</tr>
				)}
				</tbody>
				</table>

				<h1>Sorted Records</h1>
				<table data-testid="sorted-records">
				<tbody>
				<tr><td>Index</td><td>employeeId</td><td>dateHired</td></tr>
				{this.state.sortedData.map((employee:any,index:number)=><tr>
						<td>{index+1}</td>
						<td>{employee.employeeId}</td>
						<td>{employee.dateHired}</td>
					</tr>
				)}
				</tbody>
				</table>
			</section>
	);}
}

export default SortComponent;