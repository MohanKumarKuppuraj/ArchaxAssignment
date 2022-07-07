var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DataRequestService {
    fetchAllRecords() {
        return __awaiter(this, void 0, void 0, function* () {
            var fetchResponse = yield fetch("/apis/get-employees-data");
            var data = yield fetchResponse.json();
            return data;
        });
    }
    fetchAllRecordsAwait(count) {
        return __awaiter(this, void 0, void 0, function* () {
            var fetchResponse = yield fetch("/apis/get-employees-data-await/" + count);
            var data = yield fetchResponse.json();
            return data;
        });
    }
    fetchAnswer(index) {
        return __awaiter(this, void 0, void 0, function* () {
            var fetchResponse = yield fetch("/apis/get-answer/" + index);
            var data = yield fetchResponse.text();
            return data;
        });
    }
}
var dataRequestService = new DataRequestService();
export default dataRequestService;
