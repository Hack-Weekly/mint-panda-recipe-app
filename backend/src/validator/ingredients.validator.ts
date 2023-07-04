import {
    MinLength, 
    ValidateNested,
    IsString
} from 'class-validator';
import { MissingId, MissingIngredient, MissingProp, NotString } from './validator-message';
import { AddIngredientsDto } from '../features/ingredients/dtos/AddIngredients.dto';
import { UpdateIngredientsDto } from '../features/ingredients/dtos/UpdateIngredients.dto';

export class AddIngredientValidator {
    @ValidateNested()
    data!: AddIngredientProp
}

export class AddIngredientProp implements AddIngredientsDto {
    @IsString(NotString)
    @MinLength(1, MissingProp)
    name!: string
}

export class UpdateIngredientValidator {
    @ValidateNested()
    data!: UpdateIngredientProp

    @IsString(NotString)
    @MinLength(1, MissingProp)
    id?: string
}

export class UpdateIngredientProp implements UpdateIngredientsDto {
    @IsString(NotString)
    @MinLength(1, MissingProp)
    name!: string
}

export class DeleteIngredientValidator {
    @MinLength(1, MissingId)
    id?: string
}