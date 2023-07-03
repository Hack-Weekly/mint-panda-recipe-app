import {
    MinLength,
} from 'class-validator';
import { MissingId, MissingIngredient } from './validator-message';

export class AddIngredients {
    @MinLength(1, MissingIngredient)
    name?: string
}

export class UpdateIngredients {
    @MinLength(1, MissingIngredient)
    name?: string

    @MinLength(1, MissingId)
    id?: string
}

export class DeleteIngredients {
    @MinLength(1, MissingId)
    id?: string
}