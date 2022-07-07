"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_requests_1 = require("./apis/data.requests");
const buffer_object_model_1 = __importDefault(require("./models/buffer.object.model"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
var app = (0, express_1.default)();
app.set('view engine', 'html');
console.log(path_1.default.join(__dirname, "../../"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../")));
app.get("/apis/get-employees-data", function (req, res) {
    var employeeRecords = data_requests_1.dataRequestObj.getEmployeeRecords();
    res.json(employeeRecords);
});
app.get("/apis/get-employees-data-await/:count", function (req, res) {
    var count = Number(req.params.count);
    var employeeRecords = data_requests_1.dataRequestObj.getEmployeeRecords(count);
    res.json(employeeRecords);
});
app.get("/apis/get-answer/:index", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        var data = fs_1.default.readFileSync(path_1.default.resolve("./static/answers/answer." + req.params.index + ".txt"), "utf-8");
        res.send(data);
    });
});
app.get("/apis/save-buffer", function (req, res) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side || (side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type || (type = {}));
    ;
    var bufferObj = new buffer_object_model_1.default("&", 100, 9039053409554, side.buy, type.limit);
    var buffer = bufferObj.getEncodedObject();
    console.log(buffer);
    res.send(buffer);
});
app.get("/apis/get-buffer", function (req, res) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side || (side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type || (type = {}));
    ;
    var bufferObj = new buffer_object_model_1.default("&", 100, 9039053409554, side.buy, type.limit);
    var buffer = bufferObj.getEncodedObject();
    var decodedBuffer = bufferObj.decodeObject(buffer);
    res.send(decodedBuffer);
});
app.get("/", function (req, res) {
    var htmlPath = path_1.default.join(__dirname, "../../index.html");
    res.sendFile(htmlPath);
});
app.listen(80, () => {
    console.log("Server started listening the port 80");
});
