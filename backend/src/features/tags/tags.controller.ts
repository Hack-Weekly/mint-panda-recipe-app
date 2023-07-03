import { Request, Response } from "express";
import * as tagsRepo from './tags.repository'
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { validateOrReject } from "class-validator";
import { AddTag, DeleteTag } from "../../validator/tags.validator";

export const getTags = async(req: Request, res: Response) => {
    const results = await tagsRepo.getTags();

    res
        .status(StatusCodes.OK)
        .send(results);
};

export const getTagsById = async(req: Request, res: Response) => {
    const id = req.params.id ;
    const result = await tagsRepo.getTagById(id);

    if(!result) {
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Ingredients with Id '${id}' was not found.`})
    } else {
        res
        .status(StatusCodes.OK)
        .send(result);
    }
}

export const addTag = async(req: Request, res: Response) => {
    const data = req.body;

    let addTag = new AddTag();
    addTag.name = data.name;

    try {
        await validateOrReject(addTag)
    } catch (e) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send({message: e});
    }

    const result = await tagsRepo.addTag(data);

    if (!result) {
        res
            .status(StatusCodes.BAD_REQUEST)
            .send({message: 'Tag already exists.'});
    } else {
        res
            .status(StatusCodes.CREATED)
            .send({
                status: StatusCodes.CREATED,
                message: `Created with Id: '${result.id}'`
            });
    }
}

export const deleteTag = async(req: Request, res: Response) => {
    const id = req.params.id;

    let deleteTag = new DeleteTag();
    deleteTag.id = id;

    try {
        await validateOrReject(deleteTag)
    } catch (e) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .send({message: e});
    }

    const result = await tagsRepo.deleteTagById(id);

    if(!result)
        res
            .status(StatusCodes.NOT_FOUND)
            .send({message : `Ingredients with Id '${id}' was not found.`})

    res
        .status(StatusCodes.NO_CONTENT)
        .send(ReasonPhrases.NO_CONTENT);
}