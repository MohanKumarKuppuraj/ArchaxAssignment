import express,{Express,Request,Response} from "express";
import {dataRequestObj} from "./apis/data.requests";
import Employee from "./models/employee.model";
import BufferModel from "./models/buffer.object.model";
import path from "path";
import fs from "fs";

var app:Express = express();
app.set('view engine', 'html');
console.log(path.join(__dirname ,"../../"));
app.use(express.static(path.join(__dirname ,"../../")));

app.get("/apis/get-employees-data",function(req:Request,res:Response){
	var employeeRecords:Employee[] = dataRequestObj.getEmployeeRecords();
	res.json(employeeRecords);
});

app.get("/apis/get-employees-data-await/:count",function(req:Request,res:Response){
	var count:number = Number(req.params.count);
	var employeeRecords:Employee[] = dataRequestObj.getEmployeeRecords(count);
	res.json(employeeRecords);
});

app.get("/apis/get-answer/:index",async function(req:Request,res:Response){
	var data =  fs.readFileSync(path.resolve("./static/answers/answer."+req.params.index+".txt"),"utf-8");
	res.send(data);
});


app.get("/apis/save-buffer",function(req:Request,res:Response){
	
	enum side{
		buy = "buy",
		sell = "sell"
	 };

     enum type{
		limit = "limit",
		market = "market"
	 };
	var bufferObj:BufferModel = new BufferModel("&",100,9039053409554	,side.buy,type.limit);
	var buffer = bufferObj.getEncodedObject();
	console.log(buffer);
	res.send(buffer);
});

app.get("/apis/get-buffer",function(req:Request,res:Response){
	
	enum side{
		buy = "buy",
		sell = "sell"
	 };

     enum type{
		limit = "limit",
		market = "market"
	 };
	var bufferObj:BufferModel = new BufferModel("&",100,9039053409554	,side.buy,type.limit);
	var buffer = bufferObj.getEncodedObject();
	var decodedBuffer = bufferObj.decodeObject(buffer);
	res.send(decodedBuffer);
});


app.get("/",function(req:Request,res:Response){
	var htmlPath:string = path.join(__dirname ,"../../index.html"); 
	res.sendFile(htmlPath);
});


app.listen(80,()=>{
	console.log("Server started listening the port 80");
});