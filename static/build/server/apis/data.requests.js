"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataRequestObj = void 0;
const employee_model_1 = __importDefault(require("./../models/employee.model"));
class DataRequests {
    getEmployeeRecords(employeesCount = 50) {
        var employeeRecords = [];
        for (var i = 0; i < employeesCount; i++) {
            var randomNumber = Math.round(Math.random() * 1000);
            employeeRecords.push(new employee_model_1.default(10000 + i, new Date(new Date().getTime() - (randomNumber) * 60 * 60 * 24 * 1000)));
        }
        return employeeRecords;
    }
}
let dataRequestObj = new DataRequests();
exports.dataRequestObj = dataRequestObj;
