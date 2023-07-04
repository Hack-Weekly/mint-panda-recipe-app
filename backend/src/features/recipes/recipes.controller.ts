import { Request, Response } from "express";
import * as recipesRepository from './recipes.repository' 
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { PageList } from "../../models/PageData";
import { AddRecipesDto } from "./dtos/AddIngredients.dto";
import { IngredientDetailsDto } from "../ingredients/dtos/IngredientDetailsDto";
import { TagDetailsDto } from "../tags/dtos/TagDetailsDto";
import { dateStringToDateObject, orderByOptions } from "./helper/recipes.helper";
import { IFilterByDate } from "../../types/IFilterByDate";
import { validateOrReject } from "class-validator";
import { plainToInstance } from "class-transformer";
import { AddRecipeIngredients, AddRecipeProp, AddRecipeTags, AddRecipeValidator, DeleteRecipeByIdValidator } from "../../validator/recipes.validator";

interface RequestQuery {
    page: number,
    pageSize: number,
    search?: string,
    orderBy?: string,
    orderByPrecedence?: string,
    FromDate?: string,
    ToDate?: string
}

export const getRecipes = async (req: Request<{}, {}, {}, RequestQuery>, res: Response) => {
    const {page = 1, pageSize = 10, search, orderBy, orderByPrecedence, FromDate="", ToDate=""} = req.query

    let orderByObj: Record<string, string> = orderByOptions(orderBy, orderByPrecedence);
    let filterByDateObj: IFilterByDate | undefined = dateStringToDateObject(FromDate, ToDate);
    
    const [results, totalItemsCount] = await recipesRepository.getRecipes(page, pageSize, search, orderByObj, filterByDateObj);
    
    const pageList = PageList.GetPageList(results, page, pageSize, totalItemsCount)
    
    res
        .status(StatusCodes.OK)
        .send(pageList);
};

export const getRecipesById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id ;
    const result = await recipesRepository.getRecipesById(id);

    if(!result)
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Recipe with Id '${id}' was not found.`})


    const mapped = {
        ...result,
        recipe_ingredient_link: result?.recipe_ingredient_link.map((v: {amount: number, ingredient: IngredientDetailsDto}) => {
            return {
                id: v.ingredient.id,
                name: v.ingredient.name,
                amount: v.amount
            }
        }),
        recipe_tag_link: result?.recipe_tag_link.map((v: {tag: TagDetailsDto}) => {
            return {
                id: v.tag.id,
                name: v.tag.name
            }
        })
    }
    res
        .status(StatusCodes.OK)
        .send(mapped);
}

export const addRecipe = async (req: Request<{}, {}, AddRecipesDto>, res: Response) => {
    const data = req.body;
    
    let addRecipe = new AddRecipeValidator();
    addRecipe.data = plainToInstance(AddRecipeProp, data);
    addRecipe.data.tags = plainToInstance(AddRecipeTags, data.tags);
    addRecipe.data.ingredients = plainToInstance(AddRecipeIngredients, data.ingredients);

    try {
        await validateOrReject(addRecipe)
    } catch (e) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send({message: e});
    }

    // if(data.ingredients.length === 0)
    //     res.status(StatusCodes.BAD_REQUEST).send({
    //         status: StatusCodes.BAD_REQUEST,
    //         message: "Recipe Ingredients should not be empty"
    //     })

    // if(data.tags.length === 0)
    //     res.status(StatusCodes.BAD_REQUEST).send({
    //         status: StatusCodes.BAD_REQUEST,
    //         message: "Recipe Tags should not be empty"
    //     })
    
    const result = await recipesRepository.addRecipe(data);

    res
	    .status(StatusCodes.CREATED)
	    .send({
            status: StatusCodes.CREATED,
            message: `Created with Id: '${result.id}'`
        });
}

export const likeRecipeById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id ;
    const result = await recipesRepository.likeRecipeById(id);

    if(!result)
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Recipes with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}

export const unlikeRecipeById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id ;
    const result = await recipesRepository.unlikeRecipeById(id);

    if(!result)
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Recipes with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}

export const deleteRecipeById = async (req: Request<{id: string}>, res: Response) => {
    const id = req.params.id ;

    let deleteRecipeById = new DeleteRecipeByIdValidator();
    deleteRecipeById.id = id;

    try {
        await validateOrReject(deleteRecipeById)
    } catch (e) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send({message: e});
    }

    const result = await recipesRepository.deleteRecipeById(id);

    if(!result)
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Recipes with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}