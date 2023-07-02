import { Prisma, PrismaClient } from "@prisma/client"
import { AddIngredientsDto } from "../ingredients/dtos/AddIngredients.dto";
import { UpdateIngredientsDto } from "../ingredients/dtos/UpdateIngredients.dto";
import { RecipeListDto } from "./dtos/RecipeList.dto";
import { AddRecipesDto } from "./dtos/AddIngredients.dto";
import { randomUUID } from "crypto";
import { IOrderBy } from "../../types/IOrderBy";

const client = new PrismaClient();

export const getRecipes = async (page: number = 1, pageSize: number = 10, orderBy?: IOrderBy[], search?: string, ): Promise<[RecipeListDto[], number]> => {

    const results = await client.recipe.findMany({
        select: {
            id: true,
            title: true,
            serving: true,
            imageurl: true,
            created_at: true,
            updated_at: true
        },
        where: {
            title: {
                search
            }
        },
        orderBy: orderBy,
        skip: Number(pageSize * (page - 1)),
        take: Number(pageSize)
    });

    const totalItemsCount = await client.recipe.count({
        select: { id: true },
        where: {
            title: {
                search,
            }
        }
    })

    return [results, totalItemsCount.id];
}

export const getRecipesById = async (id: string) => {
    const results = await client.recipe.findFirst(
        {
            where: {
                id
            },
            include: {
                recipe_ingredient_link: {
                    select: {
                        amount: true,
                        ingredient: true
                    }
                },
                recipe_tag_link: {
                    select: {
                        tag: true
                    },
                }
            }
        }
    );

    return results;
}

export const addRecipe = async (newRecipe: AddRecipesDto) => {

    const data = {
        title: newRecipe.title,
        instruction: newRecipe.instruction,
        serving: newRecipe.serving,
        imageurl: newRecipe.imageUrl,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }

    const result = await client.recipe.create(
        {
            data
        }
    )

    const newRecipeIngredients: { recipe_id: string, ingredient_id: string, amount: number }[] = newRecipe.ingredients.map(v => {
        return {
            recipe_id: result.id,
            ingredient_id: v.id,
            amount: v.amount
        }
    })

    await client.recipe_ingredient_link.createMany({
        data: newRecipeIngredients
    })


    const newRecipeTags: { recipe_id: string, tag_id: string}[] = newRecipe.tags.map(v => {
        return {
            recipe_id: result.id,
            tag_id: v.id,
        }
    })

    await client.recipe_tag_link.createMany({
        data: newRecipeTags 
    })

    return result;
}

export const deleteRecipeById = async (id: string) => {
    const recipe = await getRecipesById(id);

    if (!recipe)
        return null;

    const result = await client.recipe.delete(
        {
            where: {
                id
            }
        }
    )

    return result.id;
}