import { Request, Response } from "express";
import * as ingredientsRepository from './ingredients.repository'
import { ReasonPhrases, StatusCodes } from "http-status-codes";

export const getIngredients = async (req: Request, res: Response) => {
    const results = await ingredientsRepository.getIngredients();

    res
        .status(StatusCodes.OK)
        .send(results);
};

export const getIngredientById = async (req: Request, res: Response) => {
    const id = req.params.id ;
    const result = await ingredientsRepository.getIngredientById(id);

    if(!result)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Ingredients with Id '${id}' was not found.`})



    res
        .status(StatusCodes.OK)
        .send(result);
}

export const addIngredients = async (req: Request, res: Response) => {
    const data = req.body;

    const result = await ingredientsRepository.addIngredients(data);

    res
	    .status(StatusCodes.CREATED)
	    .send({
            status: StatusCodes.CREATED,
            message: `Created with Id: '${result.id}'`
        });
}

export const updateIngredients = async (req: Request, res: Response) => {
    const id = req.params.id ;
    const data = req.body;

    const result = await ingredientsRepository.updateIngredientById(id, data);

    if(!result)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Ingredients with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}


export const deleteIngredients = async (req: Request, res: Response) => {
    const id = req.params.id ;
    const result = await ingredientsRepository.deleteIngredientById(id);

    if(!result)
        return res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Ingredients with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}