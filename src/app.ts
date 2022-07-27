import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import express, { Application, Request, Response } from 'express'
import EvaluationDto from './dto/evaluation.dto'
import { validateAndConvert } from './validation.handler'

const app: Application = express()

const port: number = 3001

app.get('/evaluation', async (req: Request, res: Response):Promise<void> => {

    const errorMessage = await validateAndConvert(EvaluationDto,req.query)
    if (errorMessage){
        res
        .status(400)
        .send(errorMessage)
    }
    

    res.send('Hello toto')
})

app.listen(port, function () {
    console.log(`App is listening on port ${port} !`)
})