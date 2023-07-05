export interface FullRecipe {
  id: string;
  title: string;
  serving: number;
  instruction: string;
  imageurl: string;
  created_at: string | Date;
  updated_at: string | Date;
  recipe_ingredient_link: FullRecipeIngredientLink[];
  recipe_tag_link: FullRecipeTagLink[];
}

export interface FullRecipeIngredientLink {
  id: string;
  name: string;
  amount: number;
}

export interface FullRecipeTagLink {
  id: string;
  name: string;
}

export interface RecipeList {
  results: Recipe[];
  pageData: PageData;
}

export interface Recipe {
  id: string;
  title: string;
  serving: number;
  imageurl: string;
  created_at: string | Date;
  updated_at: string | Date;
}

export interface PageData {
  page: number;
  pageSize: number;
  totalItemsCount: number;
  totalPageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Ingredient {
  id: string,
  name: string
}

export interface RecipePost {
  title: string,
  imageUrl: string,
  serving: number,
  instruction: string,
  tags: {
    id: string
  }[],
  ingredients: {
    id: string,
    amount: number
  }[]
}

export interface Tag {
  id: string,
  name: string
}

export interface ErrorMessage {
  title?: string,
  imageUrl?: string,
  serving?: string,
  instruction?: string,
  tags?: string,
  ingredients?: string,
  id?: string
}