export interface SingleRecipe {
  id: string;
  title: string;
  serving: number;
  instruction: string;
  imageurl: string;
  created_at: string | Date;
  updated_at: string | Date;
  recipe_ingredient_link: SingleRecipeIngredientLink[];
  recipe_tag_link: SingleRecipeTagLink[];
}

export interface SingleRecipeIngredientLink {
  id: string;
  name: string;
  amount: number;
}

export interface SingleRecipeTagLink {
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