import {
    ArrayMinSize,
    IsArray,
    MinLength,
    IsObject,
    ValidateNested,
    IsInt,
    Min,
    IsString,
} from 'class-validator';
import { IncorrectProp, MissingProp, NotArray, NotNumber, NotString } from './validator-message';
import { AddRecipesDto } from '../features/recipes/dtos/AddIngredients.dto';
import { AddRecipeTagsDto } from '../features/recipes/dtos/AddRecipeTags.dto';
import { AddRecipeIngredientsDto } from '../features/recipes/dtos/AddRecipeIngredients.dto';

export class AddRecipeValidator {
    @ValidateNested()
    data!: AddRecipeProp
}

export class AddRecipeProp implements AddRecipesDto {
    @IsString(NotString)
    @MinLength(1, MissingProp)
    title!: string

    @IsString(NotString)
    @MinLength(1, MissingProp)
    instruction!: string

    @IsInt(NotNumber)
    @Min(1)
    serving!: number

    @IsString(IncorrectProp)
    @MinLength(1, MissingProp)
    imageUrl!:string

    @IsArray(NotArray)
    @IsObject({ each: true })
    @ArrayMinSize(1, MissingProp)
    @ValidateNested()
    ingredients!: AddRecipeIngredients[]

    @IsArray(NotArray)
    @IsObject({ each: true })
    @ArrayMinSize(1, MissingProp)
    @ValidateNested()
    tags!: AddRecipeTags[]
}

export class AddRecipeTags implements AddRecipeTagsDto {
    @IsString(IncorrectProp)
    @MinLength(1, MissingProp)
    id!: string
}

export class AddRecipeIngredients implements AddRecipeIngredientsDto {
    @IsString(NotString)
    @MinLength(1, MissingProp)
    id!: string

    @IsInt(NotNumber)
    @Min(1)
    amount!: number
}

export class DeleteRecipeByIdValidator {
    @IsString(NotString)
    @MinLength(1, MissingProp)
    id?: string
}