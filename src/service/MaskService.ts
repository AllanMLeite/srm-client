import { Injectable } from '@angular/core';

declare let require: any;
const StringMask = require('string-mask')

@Injectable()
export class MaskService {

    constructor() {
    }

    public money(input:HTMLFormElement){
        input.value = input.value.replace(",","")
        input.value = input.value.replace(".","")
        input.value = parseInt(input.value, 10)
        
        if (input.value.toString().length > 8){
            input.value = input.value.toString().substr(0, 8)
        }

        input.value = new StringMask('#.##0,00', {reverse: true}).apply(input.value)
    }

    public moneyToFloat(value:String){
        value = value.toString().replace(",","")
        value = value.toString().replace(".","")
        value = parseInt(value.toString(), 10).toString()
        
        if (value.length > 2){
            value = value.substr(0, value.length -2) + "." + value.substr(value.length -2, value.length)
        } else if (value.length == 2) {
            value = "0."+value
        } else if (value.length == 1) {
            value = "0.0"+value
        }

        return value;
    }

    public floatToMoney(value:String) : String{
        if(!value)
            value = "0"

        if(value.toString().indexOf(".") >= 0){
            value = value.toString().replace(",","")
            value = value.replace(".","")
            value = parseInt(value.toString(), 10).toString()            
        } else {
            value = value + "00"
        }
        
        return new StringMask('#.##0,00', {reverse: true}).apply(value)
    }
}