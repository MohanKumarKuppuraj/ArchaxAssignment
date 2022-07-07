import Employee from "./../../models/employee.model";

class Utility{

bruteForceSort(unsortedArray:any):any {

};

 sortRecords(unsortedArray:any):any[] {
    var arrPart1:any = [], arrPart2:any = [];
    if (unsortedArray.length > 3) {
        arrPart1 = this.sortRecords(unsortedArray.splice(0, unsortedArray.length / 2));
        arrPart2 = this.sortRecords(unsortedArray.splice(0, unsortedArray.length));
        var i:number = 0;
        for (var i = 0; i < arrPart1.length; i++) {
            var elem1 = arrPart1[i];
            if (arrPart2.length > 0) {
                if (this.checkCondition(arrPart1[i], arrPart2[0], "dateHired", true)) {
                    arrPart1.splice(i, 0, arrPart2.splice(0, 1)[0]);
                }
            }
            else {
                break;
            }
        }
        return arrPart1.concat(arrPart2);
    }
    else {
        return this.sortData(unsortedArray);
    }
};

checkCondition(obj1:any, obj2:any, key:any, isDate:any):any {
    if (isDate) {
        return new Date(obj1[key]) > new Date(obj2[key]);
    }
    else {
        return obj1[key] > obj2[key];
    }
};

sortData(unsortedArray:any):any {
    var tmp:any;
    for (var i = 0; i < unsortedArray.length - 1; i++) {
        for (var j = i + 1; j < unsortedArray.length; j++) {
            if (this.checkCondition(unsortedArray[i], unsortedArray[j], "dateHired", true)) {
                tmp = unsortedArray[j];
                unsortedArray[j] = unsortedArray[i];
                unsortedArray[i] = tmp;
            }
        }
    }
    return unsortedArray;
};

}

var utility:Utility = new Utility();
export default utility;