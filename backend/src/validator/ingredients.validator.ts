import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
    IsString,
    IsOptional,
    IsIn
} from 'class-validator';

export class AddIngredients {
    @Length(1)
    name?: string
}

export class UpdateIngredients {
    @Length(1)
    name?: string

    @Length(1)
    id?: string
}

export class DeleteIngredients {
    @Length(1)
    id?: string
}