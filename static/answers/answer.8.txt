class TypeAModel{
	constructor(_age:number,_name:string,_employeeId:number){
		this.age = _age;
		this.name = _name;
		this.employeeId = _employeeId;
	}
	age:number;
	name:string;
	employeeId:number;
}


class TypeBModel{
	constructor(_employee:TypeAModel,_personalEmail:string,_a:number){
		this.employee = _employee;
		this.personalEmail = _personalEmail;
		this.a = _a;
		this.b = this.a;
	}
	employee:TypeAModel;
	personalEmail:string;
	a:number;
	b:typeof this.a;
}