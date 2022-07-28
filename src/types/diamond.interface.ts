import { ClarityEnum, ColorEnum, CutEnum } from "./enums"

export class Diamond {
    carat_weight: number
    cut : CutEnum
    color: ColorEnum
    clarity: ClarityEnum
    price: number
    extraInfo:any

    constructor(
        carat_weight:number,
        color: ColorEnum,
        clarity: ClarityEnum,
        cut : CutEnum, 
        price: number,
        extraInfo?:any ){
            this.carat_weight = carat_weight
            this.cut = cut
            this.color = color
            this.clarity = clarity
            this.price = price
            this.extraInfo = extraInfo
    }
}