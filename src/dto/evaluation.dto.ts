import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from "class-validator"
import { isFloat32Array } from "util/types"
import { ClarityEnum, ColorEnum, CutEnum } from "../types/enums"

export default class EvaluationDto {

    @IsNotEmpty()
    @IsNumber()
    // @IsPositive()
    carat_weight:number
    
    @IsNotEmpty()
    @IsEnum(CutEnum)
    cut: CutEnum

    @IsNotEmpty()
    @IsEnum(ColorEnum)
    color: ColorEnum

    @IsNotEmpty()
    @IsEnum(ClarityEnum)
    clarity: ClarityEnum
}