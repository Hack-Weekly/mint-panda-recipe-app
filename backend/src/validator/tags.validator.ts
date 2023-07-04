import {
    IsString,
    MinLength, 
    ValidateNested,
} from 'class-validator';
import { MissingId, MissingProp, NotString } from './validator-message';
import { AddTagsDto } from '../features/tags/dtos/AddTagsDto';

export class AddTagValidator {
    @ValidateNested({ each: true})
    data!: AddTagProp
}

export class AddTagProp implements AddTagsDto{
    @IsString(NotString)
    @MinLength(1, MissingProp)
    name!:string
}

export class DeleteTagValidator {
    @MinLength(1, MissingId)
    id?: string
}