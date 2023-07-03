import {
    ArrayMinSize,
    IsString,
    IsArray,
    MinLength,
} from 'class-validator';
import { AddRecipeTagsDto } from '../features/recipes/dtos/AddRecipeTags.dto';
import { AddRecipeIngredientsDto } from '../features/recipes/dtos/AddRecipeIngredients.dto';
import { MissingId, MissingIngredient, NotArray, NotString } from './validator-message';

export class AddRecipe {
    @IsArray(NotArray)
    @IsString({ each: true, message: NotString.message })
    @ArrayMinSize(1, MissingIngredient)
    ingredient?: AddRecipeIngredientsDto[]

    @IsArray(NotArray)
    @IsString({ each: true, message: NotString.message })
    @ArrayMinSize(1, MissingIngredient)
    tag?: AddRecipeTagsDto[]
}

export class DeleteRecipeById {
    @MinLength(1, MissingId)
    id?: string
}