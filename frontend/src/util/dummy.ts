interface BackendRecipe {
  id: string,
  title: string,
  tags: {
    id: string
    name: string
  }[],
  ingredients: {
    id: string
    name: string,
    amount: number
  }[],
  instructions: string,
  imageUrl: string,
  serving: number
}

interface BackendRecipeList {
  id: string,
  title: string,
  tags: {
    id: string
    name: string
  }[],
  imageUrl: string,
  serving: number,
  cookTime: string | number,
  likes: string
}


const dummyRecipe: BackendRecipe = {
  id: "1",
  title: "Dummy Recipe 1",
  tags: [
    { id: "tag1", name: "Tag 1" },
    { id: "tag2", name: "Tag 2" },
  ],
  ingredients: [
    { id: "ing1", name: "Ingredient 1", amount: 2 },
    { id: "ing2", name: "Ingredient 2", amount: 3 },
  ],
  instructions: "Dummy recipe instructions",
  imageUrl: "https://example.com/recipe.jpg",
  serving: 4,
};

const dummyRecipeList: BackendRecipeList[] = [
  {
    id: "1",
    title: "Dummy Recipe 1",
    tags: [
      { id: "tag1", name: "Tag 1" },
      { id: "tag2", name: "Tag 2" },
    ],
    imageUrl: "https://example.com/recipe.jpg",
    serving: 4,
    cookTime: "30 minutes",
    likes: "15",
  },
  {
    id: "2",
    title: "Dummy Recipe 2",
    tags: [
      { id: "tag3", name: "Tag 3" },
      { id: "tag4", name: "Tag 4" },
    ],
    imageUrl: "https://example.com/recipe2.jpg",
    serving: 2,
    cookTime: "45 minutes",
    likes: "10",
  }
]

export { dummyRecipe, dummyRecipeList }