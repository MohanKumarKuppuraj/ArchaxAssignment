
export namespace enumModel
{
    export enum side{
		buy = "buy",
		sell = "sell"
	 };

	export enum type{
		limit = "limit",
		market = "market"
	 };
}

class BufferModel{
     constructor(_symbol:string,_price:number,
     	_quantity:number,_side:enumModel.side,
     	_type:enumModel.type){
     	this.symbol = _symbol;
     	this.price = _price;
     	this.quantity = _quantity;
     	this.side = _side;
     	this.type = _type;
     }
     side:enumModel.side;
     type:enumModel.type;
     symbol:string;
     quantity:number;
     price:number;

     getDataFromBuffer = function(buffer:Buffer){
     	var arr:any[]=[];
     	for(var i=0;i<buffer.length;i++){
     		arr.push(buffer[i]);
     	}
     	return arr;
     }

     getEncodedObject():any[]{
     	var data:any[] = [];
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

     getASCIIConvert(arr:any[]){
        var res:string = "";
        for(var i in arr){
            res += String.fromCharCode(arr[i]);
        }
        return res;
     }


     decodeObject(arr:any[]):BufferModel{
     		var count:number = 0;
            var _symbol:string = "";
            var _priceStr:string = "";
            var _quantityStr:string = "";
            var _sideStr:string = "";
            var _typeStr:string = "";
     		var currentDecodeArr = [];
     		for(var i=0;i<arr.length;i++){
     			if(arr[i] === "¬"){
     				count++;
     				switch(count){
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
     			}else{
     			currentDecodeArr.push(arr[i]);
     			}
     		}
            console.log("_symbol,_priceStr,_quantityStr,_sideStr,_typeStr",_symbol,_priceStr,_quantityStr,_sideStr,_typeStr);
            var bufferObj:BufferModel = new BufferModel(_symbol,Number(_priceStr),Number(_quantityStr),_sideStr as enumModel.side,_typeStr as enumModel.type);
            return bufferObj;
            
     }

}
export default BufferModel;