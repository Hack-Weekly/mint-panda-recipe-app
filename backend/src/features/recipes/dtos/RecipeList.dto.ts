export interface RecipeListDto {
    id: string;
    title: string;
    serving: number;
    imageurl: string | null;
    created_at: Date;
    updated_at: Date;
}