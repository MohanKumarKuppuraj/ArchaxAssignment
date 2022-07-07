class DataRequestService{
	async fetchAllRecords(){
		var fetchResponse = await fetch("/apis/get-employees-data");
		var data = await fetchResponse.json();
		return data;
	}

	async fetchAllRecordsAwait(count:number){
		var fetchResponse = await fetch("/apis/get-employees-data-await/"+count);
		var data = await fetchResponse.json();
		return data;
	}

	async fetchAnswer(index:number):Promise<string>{
		var fetchResponse = await fetch("/apis/get-answer/"+index);
		var data:string = await fetchResponse.text();
		return data;
	}
}

var dataRequestService:DataRequestService = new DataRequestService();

export default dataRequestService;