import { PrismaClient } from "@prisma/client" 
import { AddTagsDto } from "./dtos/AddTagsDto";
const client = new PrismaClient();

export const getTags = async () => {
    return await client.tag.findMany();
}

export const getTagById = async (id: string) => {
    return await client.tag.findFirst({
        where: {id},
    });
}

export const addTag = async(data: AddTagsDto) => {
    const result = await client.tag.findFirst({
        where: {
            name: {
                equals: data.name,
            },
        },
    });
    if (!result) return false;
    return await client.tag.create({data});
}

export const deleteTagById = async(id: string) => {
    const tag = await getTagById(id);

    if(!tag) return null;
    const result = await client.tag.delete({
        where: {id},
    });
    return result.id;
}