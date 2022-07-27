import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from "class-validator"
import { Clarity, Color, Cut } from "../types/enums"

export default class EvaluationDto {

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    carat_weight:number
    
    @IsNotEmpty()
    @IsEnum(Cut)
    cut: Cut

    @IsNotEmpty()
    @IsEnum(Color)
    color: Color

    @IsNotEmpty()
    @IsEnum(Clarity)
    clarity: Clarity
}