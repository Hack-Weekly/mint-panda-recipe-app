import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const tag = await prisma.tag.createMany({
        data: [
            { name: "Easy" },
            { name: "Quick" },
            { name: "Tasty" },
            { name: "Healthy" },
            { name: "Baking" },
            { name: "Breakfast" },
            { name: "Lunch" },
            { name: "Dinner" },
            { name: "Snack" },
            { name: "Nutritious" },
            { name: "Yummy" },
            { name: "Vegan" },
            { name: "Dairy Free" },
            { name: "Weight loss" },
            { name: "Weight gain" },
            { name: "Low Carb" },
            { name: "Keto" },
            { name: "Chicken" },
            { name: "Protein" },
            { name: "Soup" },
        ]
    });

    const ingredient = await prisma.ingredient.createMany({
        data: [
            { name: "Egg" },
            { name: "Salt" },
            { name: "Pepper" },
            { name: "Olive Oil" },
            { name: "All-purpose Flour" },
            { name: "Chicken Stock" },
            { name: "Tomato Sauce" },
            { name: "Tuna" },
            { name: "Pasta" },
            { name: "Lentils" },
            { name: "Pasta" },
            { name: "Onion" },
            { name: "Chicken Breast" },
            { name: "Milk" },
            { name: "Parmesan Cheese" },
            { name: "Fish" },
            { name: "Corn" },
            { name: "Beef" },
            { name: "Honey" },
            { name: "Brown Sugar" },
        ]
    });

    const recipe = await prisma.recipe.createMany({
        data: [
            { 
                title: "Stracciatella (Italian Wedding Soup)",
                serving: 4,
                instruction: "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into \"rags.\" Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as \"Stracciatella\" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs.",
                imageurl: "https://www.sugarlovespices.com/wp-content/uploads/2022/02/Italian-wedding-soup-with-stracciatella-feature-plated-bread-and-wine.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Elegant Chicken in Sour Cream",
                serving: 4,
                instruction: "1. Bring 7 cups of water to boiling, add pasta-chicken package, and simmer for 10 minutes, stirring occasionally. Add peas, at the end, for the amount of time recommended on their package. 2. Mix soup mix with 1/2 cup of water. Pour into pot while stirring, and simmer 5-10 minutes more, or until pasta and chicken are tender. 3. Reconstitute sour cream mix with cold water, stir into the pot. Serve sprinkled with almonds on top. Makes about 8 cups.",
                imageurl: "https://www.saltandlavender.com/wp-content/uploads/2021/06/sour-cream-and-onion-chicken-2.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Electronic Gourmet's French Onion Soup",
                serving: 6,
                instruction: "1) Cook the onions slowly with the butter and oil in a covered saucepan for 15 minutes. 2) Uncover, raise the heat to moderate and stir in the salt and sugar. Cook for 30 to 40 minutes stirring frequently until the onions have turned and even, deep golden brown. 3) Sprinkle in the flour and stir 3 minutes. 4) Off heat, blend in the boiling liquid. Note that instead of brown stock you may use canned beef bouillon (same quantity). Or, and equal part of boiling water plus stock or bouillon. 5) Add the wine and season to taste. Simmer partially covered for 30 to 40 minutes or more, skimming occasionally. Correct Seasoning. 6) Set aside uncovered until ready to serve, then reheat to simmer. 7) Just before serving, stir in the cognac. Pour into french onion soup bowls over the rounds of bread. Cover with cheese. Bake at 350 F until cheese melts.",
                imageurl: "https://www.pressurecookrecipes.com/wp-content/uploads/2018/12/instant-pot-french-onion-soup.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Ellen's Beef Stew",
                serving: 1,
                instruction: "Combine flour, pepper, and salt in bag. Add meat and shake til coated. Heat oil in Dutch oven. Brown meat on all sides. Add onion, garlic, water, tomatoes, salt, and worcestershire. Cover, reduce heat to low and simmer 2 hours, until meat begins to get tender. Add potatoes, onions, and carrots. Cook 30-45 mins, until vegetables are done. Add peas. Cook until heated. By Ellen Cleary",
                imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTXZwf7nvSsnNQUfYx92cn2iC9Pa9AoCjBZSapT24IpIDByk6-wdDT6qxNE2TjClrxN3I&usqp=CAU",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Ella's Vegetable and Meat Egg Rolls",
                serving: 14,
                instruction: "Fry ground beef, drain, set aside for now. Heat wok, add oil, heat until hot, but not smoking, put celery, onions, bean sprouts and waterchestnuts. fry 2 minutes. Add salt, sugar, and soy sauce, cook 1 minute more. Add ground beef and mix well. Mix cornstarch and water well. Add to mixture in wok. set aside and cool. When cool add to egg roll wrappers, wrapping diagonaly then fry in deep fat for 3 to 5 minutes. Serve with a mixture of mustard and ketchup. Did egg rolls in this. Use 7 egg roll wrappers and cut in half and this will make 15 egg rolls. NOTES : Very good.",
                imageurl: "https://thewoksoflife.com/wp-content/uploads/2019/06/vegetable-egg-rolls-22-599x599.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Fresh Marinated Vegetables",
                serving: 6,
                instruction: "1. Combine all ingredients except 1/2 cup parsley in a large, heavy pot. Add enough water to cover vegetables. Cover tightly and cook over medium heat until vegetables are just tender but still crisp. This will take 10-12 minutes. 2. Remove from heat, remove cover, and let vegetables cool in the pot. When cool, transfer to serving dish. Cover; chill to allow flavors to blend. Bring to room temperature to serve; top with remaining parsley.",
                imageurl: "https://www.theseasonedmom.com/wp-content/uploads/2019/06/Marinated-Vegetable-Salad-10.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Emeril's Baked Potato",
                serving: 1,
                instruction: "Preheat oven to 425 degrees. Prick potato all over with a fork and bake 1 to 1 1/2 hours, depending on size, until center is tender and cooked through and skin is crisp. To serve, split open and load it up.",
                imageurl: "https://static.emerils.com/Twice%20Air-Fried%20Potatoes.jpeg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Fresh Mozzarella Tomato Salad",
                serving: 4,
                instruction: "Cut each ball of mozzarella into 6 slices. Cut each tomato slice into 6 slices. Thinly slice the red onion and separate into rings. Shred the basil leaves. Alternate slices of tomato and basil on a serving platter. Scatter the onion rings and basil over them. Drizzle the olive oil over the salad. Season with salt and pepper to taste and serve.",
                imageurl: "https://images-gmi-pmc.edge-generalmills.com/1b5be23d-0f52-43b1-8043-8866ae7e52d5.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Ellu Chaadam (Sesame Rice)",
                serving: 6,
                instruction: "Cook rice till just done. Spread on a flat dish. Add salt and allow to cool. Roast sesame seeds and red chilies til brown and pound coarsely. Add to rice along with cashewnuts, oil and ghee. Mix well and serve.",
                imageurl: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-april/Ellu_sadam_stir_fried_rice_with_sesame_seeds_and_coconut_recipe-2.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Empress Mushrooms",
                serving: 4,
                instruction: "Clean the mushrooms thoroughly and remove and chop up their stems. Saute onions and garlic in 1/4 cup of olive oil until transparent. Add chopped mushrooms stems, chopped prosciutto, parsley, marjoram, salt and pepper. Saute for about 2 minutes, then add wine. Add bread crumbs until mixture is consistency of mush. Coat mushroom tops with remaining olive oil. Stuff each mushroom with a tablespoon of the mixture, then sprinkle with Parmigiano cheese and bake at 375 F for 3 - 7 minutes, depending on the size of the mushrooms.",
                imageurl: "https://laz-img-sg.alicdn.com/p/e76eb5622c903219eccadfa74215bb0a.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                title: "Emilie's Green Beans and Christening Carrots",
                serving: 8,
                instruction: "Parboil beans in boiling water about 3 minutes and drain. ( I used Safeway select which were very sweet and tender and did not require much cooking. Cook carrots in boiling water until tender about 5 minutes. Drain. Mix Chinese lemon chicken sauce as directed on package. Pour into zip lock bag and add beans. Seal and mix to coat beans and chill overnight. Melt margarine and add chopped parsley. Pour into zip lock bag and add carrots. Mix to coat carrots and chill overnight. Place beans in center of platter. Arrange carrots around the beans and garnish with red pepper strips. Emilie rwsm05a",
                imageurl: "https://kalynskitchen.com/wp-content/uploads/2011/11/650-green-beans-carrots-charmoula.jpg",
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }
        ]
    });

    const recipe_ids = await prisma.recipe.findMany({
        select: {
            id: true
        }
    });

    const tag_ids = await prisma.tag.findMany({
        select: {
            id: true
        }
    });

    const ingredient_ids = await prisma.ingredient.findMany({
        select: {
            id: true
        }
    });

    let recipe_ingredient_link_data: { recipe_id: string, ingredient_id: string, amount: number }[] = [];

    let recipe_tag_link_data: { recipe_id: string, tag_id: string }[] = [];

    for(let i = 0; i < 100; i++) {
        let recipe_id = recipe_ids[getRandomInt(recipe_ids.length)].id;
        let ingredient_id = ingredient_ids[getRandomInt(ingredient_ids.length)].id;
        let tag_id = tag_ids[getRandomInt(tag_ids.length)].id;
        let amount = getRandomInt(10) + 1;

        recipe_ingredient_link_data.push({
            recipe_id: recipe_id,
            ingredient_id: ingredient_id,
            amount: amount
        });

        recipe_tag_link_data.push({
            recipe_id: recipe_id,
            tag_id: tag_id
        });
    };

    const recipe_ingredient_link = await prisma.recipe_ingredient_link.createMany({
        data: recipe_ingredient_link_data
    });

    const recipe_tag_link = await prisma.recipe_tag_link.createMany({
        data: recipe_tag_link_data
    });
}

main()
  .then(async () => {
    await prisma.$disconnect
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}