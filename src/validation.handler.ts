import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

// const extractErrorMessages = (errors)  =>{
//         let errorTexts = Array()
//         for (const errorItem of errors) {
//             errorTexts = errorTexts.concat(errorItem.constraints);
//         }
//         return errorTexts;
    
// }


export async function validateAndConvert(classToConvert: any, body: any) {
    const evalDto = plainToClass(classToConvert, body)
    const errors = await validate(evalDto)

    // errors is an array of validation errors
    if (errors.length > 0) {
        let errorTexts = Array();
        for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints);
        }
        
        return errorTexts;
    }
    return null
}