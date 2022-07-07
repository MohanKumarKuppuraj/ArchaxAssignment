"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumModel = void 0;
var enumModel;
(function (enumModel) {
    let side;
    (function (side) {
        side["buy"] = "buy";
        side["sell"] = "sell";
    })(side = enumModel.side || (enumModel.side = {}));
    ;
    let type;
    (function (type) {
        type["limit"] = "limit";
        type["market"] = "market";
    })(type = enumModel.type || (enumModel.type = {}));
    ;
})(enumModel = exports.enumModel || (exports.enumModel = {}));
class BufferModel {
    constructor(_symbol, _price, _quantity, _side, _type) {
        this.getDataFromBuffer = function (buffer) {
            var arr = [];
            for (var i = 0; i < buffer.length; i++) {
                arr.push(buffer[i]);
            }
            return arr;
        };
        this.symbol = _symbol;
        this.price = _price;
        this.quantity = _quantity;
        this.side = _side;
        this.type = _type;
    }
    getEncodedObject() {
        var data = [];
        data = this.getDataFromBuffer(Buffer.from(this.symbol));
        data = data.concat("¬");
        data = data.concat(this.getDataFromBuffer(Buffer.from(String(this.price))));
        data = data.concat("¬");
        data = data.concat(this.getDataFromBuffer(Buffer.from(String(this.quantity))));
        data = data.concat("¬");
        data = data.concat(this.getDataFromBuffer(Buffer.from(this.side)));
        data = data.concat("¬");
        data = data.concat(this.getDataFromBuffer(Buffer.from(this.type)));
        data = data.concat("¬");
        return data;
    }
    getASCIIConvert(arr) {
        var res = "";
        for (var i in arr) {
            res += String.fromCharCode(arr[i]);
        }
        return res;
    }
    decodeObject(arr) {
        var count = 0;
        var _symbol = "";
        var _priceStr = "";
        var _quantityStr = "";
        var _sideStr = "";
        var _typeStr = "";
        var currentDecodeArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === "¬") {
                count++;
                switch (count) {
                    case 1:
                        _symbol = this.getASCIIConvert(currentDecodeArr);
                        break;
                    case 2:
                        _priceStr = this.getASCIIConvert(currentDecodeArr);
                        break;
                    case 3:
                        _quantityStr = this.getASCIIConvert(currentDecodeArr);
                        break;
                    case 4:
                        _sideStr = this.getASCIIConvert(currentDecodeArr);
                        break;
                    case 5:
                        _typeStr = this.getASCIIConvert(currentDecodeArr);
                        break;
                }
                currentDecodeArr = [];
            }
            else {
                currentDecodeArr.push(arr[i]);
            }
        }
        console.log("_symbol,_priceStr,_quantityStr,_sideStr,_typeStr", _symbol, _priceStr, _quantityStr, _sideStr, _typeStr);
        var bufferObj = new BufferModel(_symbol, Number(_priceStr), Number(_quantityStr), _sideStr, _typeStr);
        return bufferObj;
    }
}
exports.default = BufferModel;
