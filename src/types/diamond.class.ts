import { ClarityEnum, ColorEnum, CutEnum } from "./enums"
const IMG_URL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbGBQAJDAf4POikpecbf5bWwE53Sk1GYq93R813WI4Sw&s'
export class Diamond {
    carat_weight: number
    cut : string
    color: string
    clarity: string
    price: number
    imgUrl:string
    extraInfo:any

    constructor(
        carat_weight:number,
        color: string,
        clarity: string,
        cut : string, 
        price: number,
        imgUrl?:string,
        extraInfo?:any ){
            this.carat_weight = carat_weight
            this.cut = cut
            this.color = color
            this.clarity = clarity
            this.price = price
            this.imgUrl = imgUrl || IMG_URL
            this.extraInfo = extraInfo
    }
}