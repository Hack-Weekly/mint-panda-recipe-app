import {Request, NextFunction, Response} from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

// TODO: Update Error Handling Messages for Different Exception/Error types
export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack)
    res
        .status(StatusCodes.BAD_REQUEST)
        .send({message : ReasonPhrases.BAD_REQUEST})
}