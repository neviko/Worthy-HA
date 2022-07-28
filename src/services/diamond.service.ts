import { TypeOfTag } from "typescript";
import { Diamond } from "../types/diamond.interface"
import { ClarityEnum, ColorEnum, CutEnum } from "../types/enums";

const diamonds:Diamond[] = []
const pricingTable = {
    carat_weight:{
        min_amount: 0.01,
        steps: 0.01,
        min_amount_price_usd : 20
    },
    clarity:{
        SI2:1.1,
        SI1:1.2,
        VS2:1.4,
        VS1:1.5,
        VVS2:1.6,
        VVS1:1.7,
        IF:1.9,
        FL:2 
    },
    color:{
        D:1.6,
        E:1.5,
        F:1.4,
        G:1.3,
        H:1.2,
        I:1.1,
        J:1,
    },
    cut:{
        POOR:1,
        FAIR:1.1,
        GOOD:1.3,
        VERY_GOOD:1.4,
        IDEAL:1.5,
        SUPER_IDEAL:1.7
    }

} 

export const randomlyGenerateDiamondData = ()=>{
    const carat = parseFloat((Math.random() * 10).toFixed(2))
    // choose enum randomly
    const color = ColorEnum [ Math.floor( (Math.random() * Object.keys(ColorEnum).length/2))]
    const clarity = ClarityEnum[ Math.floor( (Math.random() * Object.keys(ClarityEnum).length/2))]
    const cut = CutEnum[ Math.floor( (Math.random() * Object.keys(CutEnum).length/2))]
    
    console.log(typeof(cut));
    // const a = pricingTable.color[color as string]
    const price = calculateDiamondPrice(carat,color,clarity,cut)
    const diamond = new Diamond(carat,color,clarity,cut,price)
    // diamonds.push(diamond)
}



// we assume the diamond weight will be increased in 0.01 steps
const calculateDiamondPrice = (carat_weight:number,color:string,clarity:string,cut:string): number =>{
    let finalPrice = 0
    finalPrice += (carat_weight / pricingTable.carat_weight.min_amount) * pricingTable.carat_weight.min_amount_price_usd
    console.log(color,clarity,cut)

    // TODO : find how to call directly to the object with TS and refactor
    let res
    res = Object.entries(pricingTable.color).find(([key]) => key === color)
    if(res){
        finalPrice += finalPrice * res[1]
    }

    res = Object.entries(pricingTable.clarity).find(([key]) => key === clarity)
    if(res){
        finalPrice += finalPrice * res[1]
    }

    res = Object.entries(pricingTable.cut).find(([key]) => key === cut)
    if(res){
        finalPrice += finalPrice * res[1]
    }
    
    
    return finalPrice
}