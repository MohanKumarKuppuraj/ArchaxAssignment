class Utility {
    bruteForceSort(unsortedArray) {
    }
    ;
    sortRecords(unsortedArray) {
        var arrPart1 = [], arrPart2 = [];
        if (unsortedArray.length > 3) {
            arrPart1 = this.sortRecords(unsortedArray.splice(0, unsortedArray.length / 2));
            arrPart2 = this.sortRecords(unsortedArray.splice(0, unsortedArray.length));
            var i = 0;
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
    }
    ;
    checkCondition(obj1, obj2, key, isDate) {
        if (isDate) {
            return new Date(obj1[key]) > new Date(obj2[key]);
        }
        else {
            return obj1[key] > obj2[key];
        }
    }
    ;
    sortData(unsortedArray) {
        var tmp;
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
    }
    ;
}
var utility = new Utility();
export default utility;
