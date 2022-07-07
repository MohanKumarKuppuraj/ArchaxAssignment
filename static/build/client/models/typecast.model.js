"use strict";
class TypeAModel {
    constructor(_age, _name, _employeeId) {
        this.age = _age;
        this.name = _name;
        this.employeeId = _employeeId;
    }
}
class TypeBModel {
    constructor(_employee, _personalEmail, _a) {
        this.employee = _employee;
        this.personalEmail = _personalEmail;
        this.a = _a;
        this.b = this.a;
    }
}
