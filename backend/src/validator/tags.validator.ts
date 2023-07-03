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
} from 'class-validator';

export class AddTag {
    @Length(1)
    name?: string
}

export class DeleteTag {
    @Length(1)
    id?: string
}