import { AddRecipeIngredientsDto } from "./AddRecipeIngredients.dto";
import { AddRecipeTagsDto } from "./AddRecipeTags.dto";

export interface AddRecipesDto {
    title: string,
    imageUrl: string,
    serving: number,
    tags: AddRecipeTagsDto[],
    ingredients: AddRecipeIngredientsDto[] 
    instruction: string,
} 