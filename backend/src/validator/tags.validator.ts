import {
    MinLength,
} from 'class-validator';
import { MissingId, MissingTag } from './validator-message';

export class AddTag {
    @MinLength(1, MissingTag)
    name?: string
}

export class DeleteTag {
    @MinLength(1, MissingId)
    id?: string
}