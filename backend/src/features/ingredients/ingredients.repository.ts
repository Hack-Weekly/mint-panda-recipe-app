import { PrismaClient } from "@prisma/client" 
import { AddIngredientsDto } from "./dtos/AddIngredients.dto";
import { UpdateIngredientsDto } from "./dtos/UpdateIngredients.dto";
const client = new PrismaClient();

export const getIngredients = async () => {
    const results = await client.ingredient.findMany();

    return results;
}

export const getIngredientById = async (id: string) => {
    const results = await client.ingredient.findFirst(
        {
            where: {
                id
            } 
        }
    );

    return results;
}

export const addIngredients = async (data: AddIngredientsDto) => {
    const result = await client.ingredient.create(
        {
            data
        }
    )
    return result;
}

export const updateIngredientById = async (id: string, data: UpdateIngredientsDto) => {
    const ingredient = await getIngredientById(id);

    if(!ingredient)
        return null;

    const result = await client.ingredient.update(
        {
            where: {
                id
            },
            data
        }
    )
    return result.id;
}

export const deleteIngredientById = async (id: string) => {
    const ingredient = await getIngredientById(id);

    if(!ingredient)
        return null;

    const result = await client.ingredient.delete(
        {
            where: {
                id
            }
        }
    )

    return result.id;
}