import { MaskService } from './MaskService';

describe('MaskService:', () => {
    let maskService = new MaskService()
    
    it('deve colocar mascara de dinheiro para o campo da tela', () => {
        let input: any = new Object()
        input.value = "1234567"
        maskService.money(input)
        expect(input.value).toEqual("12.345,67")

        input.value = ""
        maskService.money(input)
        expect(input.value).toEqual("")

        input.value = "3"
        maskService.money(input)
        expect(input.value).toEqual("0,03")
    })

    it('deve converter para float para salvar na api', () => {
        let retorno : String 
        retorno = maskService.moneyToFloat("12.345,67")        
        expect(retorno).toEqual("12345.67")

        retorno = maskService.moneyToFloat("345,67")        
        expect(retorno).toEqual("345.67")

        retorno = maskService.moneyToFloat("0,67")        
        expect(retorno).toEqual("0.67")

        retorno = maskService.moneyToFloat("0,07")        
        expect(retorno).toEqual("0.07")

        retorno = maskService.moneyToFloat("0,00")        
        expect(retorno).toEqual("0.00")
    })

    it('deve converter para money quando retornar um float da api', () => {
        let retorno : String 
        
        retorno = maskService.floatToMoney("12345.67")        
        expect(retorno).toEqual("12.345,67")

        retorno = maskService.floatToMoney("1234")        
        expect(retorno).toEqual("1.234,00")

        retorno = maskService.floatToMoney("5.67")        
        expect(retorno).toEqual("5,67")

        retorno = maskService.floatToMoney("0.67")        
        expect(retorno).toEqual("0,67")

        retorno = maskService.floatToMoney("0.07")        
        expect(retorno).toEqual("0,07")

        retorno = maskService.floatToMoney("0.00")        
        expect(retorno).toEqual("0,00")
    })
})