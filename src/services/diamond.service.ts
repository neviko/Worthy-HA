import { TypeOfTag } from "typescript";
import { Diamond } from "../types/diamond.interface"
import { ClarityEnum, ColorEnum, CutEnum } from "../types/enums";

const diamonds:Diamond[] = []
const pricingTable = {
    carat_weight:{
        min_amount: 0.01,
        max_amount:5,
        steps: 0.01,
        min_amount_price_usd : 5,
        
    },
    clarity:{
        SI2:1.02,
        SI1:1.05,
        VS2:1.07,
        VS1:1.08,
        VVS2:1.1,
        VVS1:1.2,
        IF:1.25,
        FL:1.3 
    },
    color:{
        D:1.2,
        E:1.1,
        F:1.09,
        G:1.08,
        H:1.07,
        I:1.05,
        J:1,
    },
    cut:{
        POOR:1,
        FAIR:1.1,
        GOOD:1.2,
        VERY_GOOD:1.3,
        IDEAL:1.4,
        SUPER_IDEAL:1.5
    }

} 

export const randomlyGenerateDiamondData = ()=>{
    const carat = parseFloat((Math.random() * pricingTable.carat_weight.max_amount).toFixed(2))

    // choose enum randomly
    const color:ColorEnum = Math.floor( (Math.random() * Object.keys(ColorEnum).length/2))
    const clarity:ClarityEnum = Math.floor( (Math.random() * Object.keys(ClarityEnum).length/2))
    const cut:CutEnum = Math.floor( (Math.random() * Object.keys(CutEnum).length/2))
    
    // const a = pricingTable.color[color as string]
    const price = calculateDiamondPrice(carat,color,clarity,cut)
    const diamond = new Diamond(carat,color,clarity,cut,price)
    diamonds.push(diamond)
}



// we assume the diamond weight will be increased in 0.01 steps
const calculateDiamondPrice = (carat_weight:number,color:ColorEnum,clarity:ClarityEnum,cut:CutEnum): number =>{
    let finalPrice = 0
    finalPrice += (carat_weight / pricingTable.carat_weight.min_amount) * pricingTable.carat_weight.min_amount_price_usd

    // TODO : find how to call directly to the object with TS and refactor
    let res
    res = Object.entries(pricingTable.color).find(([key]) => key === ColorEnum[color])
    if(res){
        finalPrice += finalPrice * res[1]
    }

    res = Object.entries(pricingTable.clarity).find(([key]) => key === ClarityEnum[clarity])
    if(res){
        finalPrice += finalPrice * res[1]
    }

    res = Object.entries(pricingTable.cut).find(([key]) => key === CutEnum[cut])
    if(res){
        finalPrice += finalPrice * res[1]
    }
    
    console.log(parseFloat( finalPrice.toFixed(2)))
    return parseFloat( finalPrice.toFixed(2))
}