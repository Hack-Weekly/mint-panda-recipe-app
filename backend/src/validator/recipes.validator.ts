import {
    ArrayMinSize,
    IsString,
    IsArray,
    Length,
} from 'class-validator';
import { AddRecipeTagsDto } from '../features/recipes/dtos/AddRecipeTags.dto';
import { AddRecipeIngredientsDto } from '../features/recipes/dtos/AddRecipeIngredients.dto';

export class AddRecipe {
    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    ingredient?: AddRecipeIngredientsDto[]

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    tag?: AddRecipeTagsDto[]
}

export class DeleteRecipeById {
    @Length(1)
    id?: string
}