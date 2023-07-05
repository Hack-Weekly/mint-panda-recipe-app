import { RecipeList, FullRecipe, Ingredient, Tag } from "../interfaces"

const dummyRecipe: FullRecipe = {
  "id": "1",
  "title": "Delicious Pasta",
  "serving": 4,
  "instruction": "1. Cook the pasta\n2. Prepare the sauce\n3. Mix pasta and sauce\n4. Serve hot",
  "imageurl": "https://example.com/delicious-pasta.jpg",
  "like": 0,
  "created_at": "2023-06-01T10:00:00Z",
  "updated_at": "2023-06-15T15:30:00Z",
  "recipe_ingredient_link": [
    {
      "id": "ingredient1",
      "name": "Pasta",
      "amount": 250
    },
    {
      "id": "ingredient2",
      "name": "Tomato Sauce",
      "amount": 500
    },
    {
      "id": "ingredient3",
      "name": "Cheese",
      "amount": 100
    }
  ],
  "recipe_tag_link": [
    {
      "id": "tag1",
      "name": "Italian"
    },
    {
      "id": "tag2",
      "name": "Pasta"
    }
  ]
}

const dummyRecipeList: RecipeList = {
  "results": [
    {
      "id": "1",
      "title": "Recipe 1",
      "serving": 4,
      "like": 0,
      "imageurl": "https://example.com/recipe1.jpg",
      "created_at": "2023-06-01T10:00:00Z",
      "updated_at": "2023-06-15T15:30:00Z"
    },
    {
      "id": "2",
      "title": "Recipe 2",
      "serving": 2,
      "like": 0,
      "imageurl": "https://example.com/recipe2.jpg",
      "created_at": "2023-06-05T14:30:00Z",
      "updated_at": "2023-06-20T09:45:00Z"
    }
  ],
  "pageData": {
    "page": 1,
    "pageSize": 10,
    "totalItemsCount": 20,
    "totalPageCount": 2,
    "hasPreviousPage": false,
    "hasNextPage": true
  }
}

const dummyIngredientList: Ingredient[] = [
  { id: "1", name: "Ingredient 1" },
  { id: "2", name: "Ingredient 2" },
  { id: "3", name: "Ingredient 3" }
];

const dummyTags: Tag[] = [
  { id: "tag1", name: "Tag 1" },
  { id: "tag2", name: "Tag 2" },
  { id: "tag3", name: "Tag 3" }
];

export { dummyRecipe, dummyRecipeList, dummyIngredientList, dummyTags }