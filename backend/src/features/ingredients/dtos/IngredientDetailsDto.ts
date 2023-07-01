export interface IngredientDetailsDto {
    id: string,
    name: string
}


export interface IngredientDetailsWithAmountDto extends IngredientDetailsDto {
    amount: number
}