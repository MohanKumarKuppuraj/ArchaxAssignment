//import jest from "@jest/globals";
import {render,screen} from "@testing-library/react";
import React from "react";
import SortComponent from "./../static/build/client/scripts/components/sort/sort.component";
jest.mock("./../static/build/client/scripts/services/data.request.service",()=>({
	  fetchAllRecordsAwait : async function(){return [];},
	  fetchAllRecords: async function(){
	 	var employeeRecords = [];
		employeeRecords.push({employeeId:104,dateHired:new Date(new Date().getTime() - (10)*60*60*24*1000 )});
		employeeRecords.push({employeeId:105,dateHired:new Date(new Date().getTime() - (15)*60*60*24*1000 )});
		employeeRecords.push({employeeId:101,dateHired:new Date(new Date().getTime() - (15)*60*60*24*1000 )});
		employeeRecords.push({employeeId:102,dateHired:new Date(new Date().getTime() - (2)*60*60*24*1000 )});
		employeeRecords.push({employeeId:103,dateHired:new Date(new Date().getTime() - (1)*60*60*24*1000 )});
		employeeRecords.push({employeeId:106,dateHired:new Date(new Date().getTime() - (6)*60*60*24*1000 )});
		employeeRecords.push({employeeId:108,dateHired:new Date(new Date().getTime() - (5)*60*60*24*1000 )});
		console.log("this is called");
		return employeeRecords;
	}
}));
it("test",async ()=>{
	render(<SortComponent></SortComponent>);
	expect(screen.getByTestId("sorted-records")).toBe(8);
});